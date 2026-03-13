import React from "react";
import { Link } from "react-router-dom";

const Products: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Best Selling <span className="text-primary">Products</span>
            </h2>
            <p className="text-lg text-slate-500">
              Industry-leading electrical equipment manufactured with the
              highest quality raw materials for Indian agricultural
              applications.
            </p>
          </div>
          <Link
            className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group"
            to="/products"
          >
            View All Catalog{" "}
            <span className="material-symbols-outlined">trending_flat</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="group bg-slate-50 rounded-[40px] p-4 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-100">
            <div className="aspect-square rounded-[32px] overflow-hidden bg-white mb-8">
              <img
                alt="Submersible Cable"
                className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyO6GpMo2zBG3Gq7_VePEfSY-DExKGwJrt_suVXaSv62gBHcsYNDxPr35shKjOLJq2IQ5dalJBC7oWiWU62nUyhJehiXYx0SvKteaBtZgkA7owhAep4YiLNiqp-DChHJK_21oOG4yYCHU8dGoMtKL-J4hlS5eZmOK62YDbGuQe9VM5Y4NbbcGiQEEmdKB_OWmtGplW5pccnWdXgoVi3jVJKEs6HPkPu6HpZL0X4ahMvsW8ESWMBXnxkQ40p06PGH1PBkcPXRViXiM"
              />
            </div>
            <div className="px-6 pb-6 text-center">
              <h3 className="text-2xl font-bold mb-3 font-display">
                Submersible Cables
              </h3>
              <p className="text-slate-500 text-sm mb-8 line-clamp-2">
                Multi-core flexible cables with proprietary insulation for
                long-term underwater reliability.
              </p>
              <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary transition-colors group">
                View Details{" "}
                <span className="material-symbols-outlined text-lg">
                  arrow_outward
                </span>
              </button>
            </div>
          </div>

          <div className="group bg-slate-50 rounded-[40px] p-4 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-100">
            <div className="aspect-square rounded-[32px] overflow-hidden bg-white mb-8">
              <img
                alt="Motor Starter"
                className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEwFFLi3NbB1YgM6dnfQEAIXZ2v99JQvRrF3c2wFFXSXDKwgu5I7boCRzSRScxRiBDYw_46_2rFvQDISoHD7rTXiinz5Tot1Bgy_ULA4-jDIFLbVfDCo5RmHTsvvUTsmqoQzhO7NHMAnHeAjHKpFj9Y0VDVQXp9OAWGOiil-uOjp60LXuIgC9uV2YTReUZqeHQG7oInW7fYa_6zGzo71V3Ds3Zf49T_kAqKRhcOLLJTmW1E9G4Q7VOymaHm1_gkXXyZo296FhMo8s"
              />
            </div>
            <div className="px-6 pb-6 text-center">
              <h3 className="text-2xl font-bold mb-3 font-display">
                Motor Starters
              </h3>
              <p className="text-slate-500 text-sm mb-8 line-clamp-2">
                Protect your assets with automatic voltage sensing and advanced
                thermal overload protection.
              </p>
              <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary transition-colors group">
                View Details{" "}
                <span className="material-symbols-outlined text-lg">
                  arrow_outward
                </span>
              </button>
            </div>
          </div>

          <div className="group bg-slate-50 rounded-[40px] p-4 hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-100">
            <div className="aspect-square rounded-[32px] overflow-hidden bg-white mb-8">
              <img
                alt="Control Panel"
                className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM7JOmVPTz8qlWPumzJJNAh0fVlOMRusrnTylU1iHN8xXu3gzmX1HcukjUP9SyFFmNKy24GiUigEgdm7m1uJOnFwK4fTAwZRIb2UYCHe5eVWyt8NL4xRobsoX5QrX7iOFb4fxFLIi5gN_jP-ztoJdwuej6FcN0r_byF8KAdVHGMAKEyrV-aX7QRLqW4zvxGRdqpalm4I4ELX7RvF3w0pBKMd8VteC8hBAEX76qwrEnfxItEDtKwRQLdX0kTA9yScYtNlkm89dUQJw"
              />
            </div>
            <div className="px-6 pb-6 text-center">
              <h3 className="text-2xl font-bold mb-3 font-display">
                Control Panels
              </h3>
              <p className="text-slate-500 text-sm mb-8 line-clamp-2">
                Integrated solutions for complex irrigation setups, offering
                total control and safety.
              </p>
              <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary transition-colors group">
                View Details{" "}
                <span className="material-symbols-outlined text-lg">
                  arrow_outward
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
