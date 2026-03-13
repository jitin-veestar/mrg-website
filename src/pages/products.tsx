import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { fetchProductList } from "../api/products";
import type { ApiProduct } from "../types/product";
import { Seo } from "../components/Seo";

const PLACEHOLDER_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAyO6GpMo2zBG3Gq7_VePEfSY-DExKGwJrt_suVXaSv62gBHcsYNDxPr35shKjOLJq2IQ5dalJBC7oWiWU62nUyhJehiXYx0SvKteaBtZgkA7owhAep4YiLNiqp-DChHJK_21oOG4yYCHU8dGoMtKL-J4hlS5eZmOK62YDbGuQe9VM5Y4NbbcGiQEEmdKB_OWmtGplW5pccnWdXgoVi3jVJKEs6HPkPu6HpZL0X4ahMvsW8ESWMBXnxkQ40p06PGH1PBkcPXRViXiM";

function ProductCard({
  product,
  onView,
}: {
  product: ApiProduct;
  onView: () => void;
}) {
  const imageUrl =
    product.asset?.[0]?.url ?? product.category?.asset?.[0]?.url ?? PLACEHOLDER_IMAGE;

  return (
    <div className="group bg-slate-50 rounded-[40px] p-4 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-100 h-full flex flex-col">
      <div className="aspect-square rounded-[32px] overflow-hidden bg-white mb-6">
        <img
          alt={product.title}
          className="w-full h-full object-contain p-6 md:p-8 group-hover:scale-110 transition-transform duration-500"
          src={imageUrl}
        />
      </div>
      <div className="px-6 pb-6 text-center flex flex-col flex-1">
        {product.category?.title && (
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
            {product.category.title}
          </p>
        )}
        <h3 className="text-xl md:text-2xl font-bold mb-2 font-display">
          {product.title}
        </h3>
        <p className="text-slate-500 text-sm mb-6 line-clamp-2 min-h-[2.25rem]">
          {product.shortDesc || "Quality product from MRG."}
        </p>
        {product.price?.amount > 0 && (
          <p className="text-slate-700 font-bold mb-4">
            ₹ {product.price.amount.toLocaleString("en-IN")}
          </p>
        )}
        <button
          type="button"
          className="mt-auto w-full py-3.5 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary transition-colors group/btn"
          onClick={onView}
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
  const navigate = useNavigate();
  const [products, setProducts] = useState<ApiProduct[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState<"grid" | "list">("grid");

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
      <Seo
        title="MRG Cables Product Catalog | Submersible & Agricultural Pump Cables"
        description="Browse the complete MRG Cables catalog of flat submersible pump cables, agricultural pump cables and borewell pump cables engineered for Indian farming conditions."
        path="/products"
        type="website"
      />
      <Header />

      <main className="pt-24 pb-24">
        <section className="py-12 sm:py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-brand-red font-bold uppercase tracking-[0.2em] text-xs mb-4">
                  Catalog
                </p>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-950 mb-4">
                  All <span className="text-primary">Products</span>
                </h1>
                <p className="text-slate-500 max-w-2xl">
                  Explore the complete MRG catalog of cables, starters, panels,
                  and irrigation accessories designed for demanding Indian
                  agricultural and industrial applications.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 self-start md:self-auto bg-white rounded-full border border-slate-200 px-2 py-1 shadow-sm">
                {/* <span className="hidden text-xs font-medium text-slate-500 sm:inline">
                  View:
                </span> */}
                <button
                  type="button"
                  onClick={() => setView("grid")}
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                    view === "grid"
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">
                    view_module
                  </span>
                  Grid
                </button>
                <button
                  type="button"
                  onClick={() => setView("list")}
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                    view === "list"
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">
                    view_list
                  </span>
                  List
                </button>
              </div>
            </div>
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
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-8">
                  <p className="text-slate-500">
                    Showing {products.length} of {total} products
                  </p>
                  <p className="text-xs text-slate-400">
                    {view === "grid" ? "Grid view" : "List view"}
                  </p>
                </div>

                {view === "grid" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map((product) => {
                      const id = product.id || product._id;
                      return (
                        <ProductCard
                          key={product._id}
                          product={product}
                          onView={() => navigate(`/products/${id}`)}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white divide-y divide-slate-100">
                    {products.map((product) => {
                      const imageUrl =
                        product.asset?.[0]?.url ??
                        product.category?.asset?.[0]?.url ??
                        PLACEHOLDER_IMAGE;
                      const id = product.id || product._id;

                      return (
                        <button
                          key={product._id}
                          type="button"
                          className="w-full text-left flex flex-col sm:flex-row items-stretch gap-4 sm:gap-6 p-4 sm:p-5 hover:bg-slate-50 transition-colors"
                          onClick={() => navigate(`/products/${id}`)}
                        >
                          <div className="flex-shrink-0 w-full sm:w-40 md:w-48">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-50 border border-slate-100">
                              <img
                                src={imageUrl}
                                alt={product.title}
                                className="w-full h-full object-contain p-4"
                              />
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col justify-center gap-1">
                            {product.category?.title && (
                              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                                {product.category.title}
                              </p>
                            )}
                            <p className="text-base sm:text-lg font-display font-semibold text-slate-900">
                              {product.title}
                            </p>
                            <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 sm:line-clamp-3">
                              {product.shortDesc || "Quality product from MRG."}
                            </p>
                            {product.price?.amount > 0 && (
                              <p className="mt-2 text-sm font-bold text-slate-800">
                                ₹ {product.price.amount.toLocaleString("en-IN")}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center justify-end sm:justify-center sm:w-28 text-primary text-xs font-semibold gap-1">
                            <span className="hidden sm:inline">View details</span>
                            <span className="material-symbols-outlined text-base">
                              arrow_outward
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
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
