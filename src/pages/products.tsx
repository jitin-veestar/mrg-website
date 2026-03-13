import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { fetchProductList } from "../api/products";
import type { ApiProduct } from "../types/product";

const PLACEHOLDER_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAyO6GpMo2zBG3Gq7_VePEfSY-DExKGwJrt_suVXaSv62gBHcsYNDxPr35shKjOLJq2IQ5dalJBC7oWiWU62nUyhJehiXYx0SvKteaBtZgkA7owhAep4YiLNiqp-DChHJK_21oOG4yYCHU8dGoMtKL-J4hlS5eZmOK62YDbGuQe9VM5Y4NbbcGiQEEmdKB_OWmtGplW5pccnWdXgoVi3jVJKEs6HPkPu6HpZL0X4ahMvsW8ESWMBXnxkQ40p06PGH1PBkcPXRViXiM";

function ProductCard({ product }: { product: ApiProduct }) {
  const imageUrl =
    product.asset?.[0]?.url ?? product.category?.asset?.[0]?.url ?? PLACEHOLDER_IMAGE;

  return (
    <div className="group bg-slate-50 rounded-[40px] p-4 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-100">
      <div className="aspect-square rounded-[32px] overflow-hidden bg-white mb-8">
        <img
          alt={product.title}
          className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
          src={imageUrl}
        />
      </div>
      <div className="px-6 pb-6 text-center">
        {product.category?.title && (
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
            {product.category.title}
          </p>
        )}
        <h3 className="text-2xl font-bold mb-3 font-display">{product.title}</h3>
        <p className="text-slate-500 text-sm mb-8 line-clamp-2 min-h-[2.5rem]">
          {product.shortDesc || "Quality product from MRG."}
        </p>
        {product.price?.amount > 0 && (
          <p className="text-slate-700 font-bold mb-4">
            {product.price.currency} {product.price.amount.toLocaleString()}
          </p>
        )}
        <button
          type="button"
          className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary transition-colors group/btn"
        >
          View Details{" "}
          <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-0.5 transition-transform">
            arrow_outward
          </span>
        </button>
      </div>
    </div>
  );
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<ApiProduct[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetchProductList(0, 50);
        if (!cancelled) {
          setProducts(res.data?.products ?? []);
          setTotal(res.data?.total ?? 0);
        }
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Failed to load products");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <main className="pt-24 pb-24">
        <section className="py-12 sm:py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs mb-4">
              Catalog
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-950 mb-4">
              All <span className="text-primary">Products</span>
            </h1>
            <p className="text-slate-500 max-w-2xl">
              Industry-leading electrical equipment manufactured with the highest
              quality raw materials for Indian agricultural applications.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading && (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <span className="material-symbols-outlined text-5xl text-primary animate-pulse">
                  progress_activity
                </span>
                <p className="text-slate-500 font-medium">Loading products…</p>
              </div>
            )}

            {error && (
              <div className="rounded-2xl bg-red-50 border border-red-100 p-8 text-center">
                <span className="material-symbols-outlined text-4xl text-red-500 mb-2">
                  error
                </span>
                <p className="text-red-700 font-medium">{error}</p>
                <p className="text-slate-600 text-sm mt-1">
                  Please check your connection and try again.
                </p>
              </div>
            )}

            {!loading && !error && products.length === 0 && (
              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-12 text-center">
                <span className="material-symbols-outlined text-5xl text-slate-300 mb-4">
                  inventory_2
                </span>
                <p className="text-slate-600 font-medium">No products found.</p>
              </div>
            )}

            {!loading && !error && products.length > 0 && (
              <>
                <p className="text-slate-500 mb-10">
                  Showing {products.length} of {total} products
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductsPage;
