import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { fetchProductDetail } from "../api/products";
import type { ApiProduct } from "../types/product";
import { Seo } from "../components/Seo";

const PLACEHOLDER_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAyO6GpMo2zBG3Gq7_VePEfSY-DExKGwJrt_suVXaSv62gBHcsYNDxPr35shKjOLJq2IQ5dalJBC7oWiWU62nUyhJehiXYx0SvKteaBtZgkA7owhAep4YiLNiqp-DChHJK_21oOG4yYCHU8dGoMtKL-J4hlS5eZmOK62YDbGuQe9VM5Y4NbbcGiQEEmdKB_OWmtGplW5pccnWdXgoVi3jVJKEs6HPkPu6HpZL0X4ahMvsW8ESWMBXnxkQ40p06PGH1PBkcPXRViXiM";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [product, setProduct] = useState<ApiProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    // Ensure we always start at the top when opening a product
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

    if (!id) {
      setError("Missing product id");
      setLoading(false);
      return;
    }

    const productId = id;
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetchProductDetail(productId);
        if (!cancelled) {
          setProduct(res.data);
        }
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Failed to load product");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [id]);

  return (
    <div className="bg-white min-h-screen">
      {product && (
        <Seo
          title={`${product.title} | MRG Cables`}
          description={
            product.shortDesc ||
            "High quality submersible and agricultural pump cable from MRG Cables in India."
          }
          path={`/products/${product.id || product._id}`}
          type="product"
          jsonLd={[
            {
              "@context": "https://schema.org",
              "@type": "Product",
              name: product.title,
              description:
                product.shortDesc ||
                "High quality submersible and agricultural pump cable.",
              brand: {
                "@type": "Brand",
                name: "MRG Cables",
              },
              image:
                product.asset?.[0]?.url ||
                product.category?.asset?.[0]?.url ||
                PLACEHOLDER_IMAGE,
            },
          ]}
        />
      )}
      <Header />

      <main className="pt-24 pb-24">
        <section className="py-6 bg-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-sm text-slate-500">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-1 text-slate-500 hover:text-primary"
            >
              <span className="material-symbols-outlined text-base">
                arrow_back
              </span>
              Back
            </button>
            <span className="mx-1 text-slate-300">/</span>
            <Link
              to="/products"
              className="hover:text-primary font-medium text-slate-600"
            >
              Products
            </Link>
            {product && (
              <>
                <span className="mx-1 text-slate-300">/</span>
                <span className="text-slate-500 line-clamp-1">
                  {product.title}
                </span>
              </>
            )}
          </div>
        </section>

        <section className="py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading && (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <span className="material-symbols-outlined text-5xl text-primary animate-pulse">
                  progress_activity
                </span>
                <p className="text-slate-500 font-medium">
                  Loading product details…
                </p>
              </div>
            )}

            {error && !loading && (
              <div className="rounded-2xl bg-red-50 border border-red-100 p-8 text-center">
                <span className="material-symbols-outlined text-4xl text-red-500 mb-2">
                  error
                </span>
                <p className="text-red-700 font-medium">{error}</p>
                <p className="text-slate-600 text-sm mt-1">
                  Please go back to the catalog and try again.
                </p>
                <div className="mt-6">
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white hover:bg-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-base">
                      inventory_2
                    </span>
                    Back to products
                  </Link>
                </div>
              </div>
            )}

            {!loading && !error && product && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                <div className="space-y-4 sm:space-y-6">
                  {(() => {
                    const assetImages = product.asset ?? [];
                    const fallbackCategoryImages = product.category?.asset ?? [];
                    const imageSources =
                      assetImages.length > 0
                        ? assetImages.map((a) => a.url)
                        : fallbackCategoryImages.length > 0
                        ? fallbackCategoryImages.map((a) => a.url)
                        : [PLACEHOLDER_IMAGE];
                    const currentImage =
                      imageSources[selectedImageIndex] ?? imageSources[0];

                    return (
                      <>
                        <div className="rounded-[40px] bg-slate-50 border border-slate-100 p-4 sm:p-6 lg:p-8">
                          <div
                            className="aspect-square rounded-[32px] overflow-hidden bg-white flex items-center justify-center cursor-zoom-in"
                            onMouseEnter={() => setIsZoomed(true)}
                            onMouseLeave={() => setIsZoomed(false)}
                            onMouseMove={(event) => {
                              const rect =
                                event.currentTarget.getBoundingClientRect();
                              const x =
                                ((event.clientX - rect.left) / rect.width) *
                                100;
                              const y =
                                ((event.clientY - rect.top) / rect.height) *
                                100;
                              setZoomPos({
                                x: Math.min(100, Math.max(0, x)),
                                y: Math.min(100, Math.max(0, y)),
                              });
                            }}
                          >
                            <img
                              src={currentImage}
                              alt={product.title}
                              className="w-full h-full object-contain p-6 md:p-10 transition-transform duration-200 ease-out"
                              style={
                                isZoomed
                                  ? {
                                      transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                                      transform: "scale(1.6)",
                                    }
                                  : { transform: "scale(1)" }
                              }
                            />
                          </div>
                        </div>

                        {imageSources.length > 1 && (
                          <div className="flex gap-3 overflow-x-auto pb-1">
                            {imageSources.map((src, index) => (
                              <button
                                key={`${src}-${index}`}
                                type="button"
                                onClick={() => {
                                  setSelectedImageIndex(index);
                                  setIsZoomed(false);
                                }}
                                className={`flex-shrink-0 h-16 w-16 rounded-2xl border bg-white flex items-center justify-center transition-all ${
                                  index === selectedImageIndex
                                    ? "border-primary ring-2 ring-primary/40"
                                    : "border-slate-200 hover:border-primary/60"
                                }`}
                              >
                                <img
                                  src={src}
                                  alt={`${product.title} thumbnail ${index + 1}`}
                                  className="h-full w-full object-contain p-2"
                                />
                              </button>
                            ))}
                          </div>
                        )}
                      </>
                    );
                  })()}
                </div>

                <div className="space-y-6">
                  {product.category?.title && (
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                      {product.category.title}
                    </p>
                  )}
                  <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-950">
                    {product.title}
                  </h1>
                  {product.shortDesc && (
                    <p className="text-base text-slate-600">
                      {product.shortDesc}
                    </p>
                  )}

                  {product.price?.amount > 0 && (
                    <p className="text-2xl font-display font-bold text-primary">
                      ₹ {product.price.amount.toLocaleString("en-IN")}
                    </p>
                  )}

                  {product.attributes && product.attributes.length > 0 && (
                    <div className="border border-slate-100 rounded-2xl bg-slate-50 p-4 sm:p-5">
                      <h2 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-[0.18em]">
                        Specifications
                      </h2>
                      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                        {product.attributes.map((attr) => (
                          <div key={attr.key} className="flex flex-col">
                            <dt className="text-slate-500 text-xs uppercase tracking-[0.18em]">
                              {attr.label}
                            </dt>
                            <dd className="text-slate-900 font-medium">
                              {attr.value}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  )}

                  {product.longDesc && (
                    <div className="prose prose-sm sm:prose base text-slate-700 max-w-none">
                      <h2 className="text-base font-semibold text-slate-900 mb-2">
                        Product Description
                      </h2>
                      <div
                        className="[&_p]:mb-3 [&_p:last-child]:mb-0"
                        dangerouslySetInnerHTML={{ __html: product.longDesc }}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;

