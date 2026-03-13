import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Voices From The <span className="text-primary">Field</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Real stories from the people who keep India growing. Their trust is
            our biggest achievement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/40 relative">
            <span className="material-symbols-outlined text-primary/10 text-8xl absolute top-6 right-8 select-none">
              format_quote
            </span>
            <p className="text-slate-700 italic text-lg leading-relaxed mb-10 relative z-10">
              &quot;MRG cables have been running in my 500ft deep borewell for 5
              years without a single issue. The copper quality is unmatched in
              this price range.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                <img
                  alt="Rajesh Kumar"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfUTqI_K2toNFme_fV5slCj_iOlM5qoI9JbJPIDRICoYrzIl7hrmVqqNuMQA7gp4Zy1XROg-OKHjoYJsxZ87cyFTaNsgL-qmXub_VN11wyjtj5_B7_PIOeUIPHf3ifOoARGj6wVbLq5rmx10SWiKsE2wD46ydJNHLeBv9MNJS7yCw0d7Dsap2I8z3aWzocdY4qdpsw2Tt4ZWtB8C9JfABTQFYaBOahIjSRG8vFgOl6uDdL9kcddVYkj4wBWj_6NHc-TCnxWYCxQeg"
                />
              </div>
              <div>
                <p className="font-bold text-slate-900">Rajesh Kumar</p>
                <p className="text-sm text-slate-500">Farmer, Punjab</p>
              </div>
            </div>
          </div>

          <div className="bg-primary text-white p-10 rounded-[2.5rem] shadow-xl shadow-green-900/20 relative">
            <span className="material-symbols-outlined text-white/10 text-8xl absolute top-6 right-8 select-none">
              format_quote
            </span>
            <p className="text-white/90 italic text-lg leading-relaxed mb-10 relative z-10">
              &quot;As a distributor, MRG is my most reliable partner. Their
              product availability and service support are exceptional. My
              customers specifically ask for MRG.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/20">
                <img
                  alt="Amit Shah"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpW5W8giFxpd-TU5HCx708raOlfoxhTQaUtTNqqbWz7CfEj1zYtCk_NJyaXXSNnF2mCvo8MdSC3hilkOB0VxcTO0eqczyGzCVg8X8fvE3RHkuJ_PKrtAoZMilxv8IRS7N1F5i3oHKYrGfmM1984w2bBsIgniLdHcVCzM1xsO6wHxYZoj5rRWDu3gArEjkrTVEvfPT2xPRTy8wvL3Kb3bk-RaLG2v5Ar-2kR8UO-csBHjXG-r_b61Mief4qrjt-5_nHtzViHUzjgCw"
                />
              </div>
              <div>
                <p className="font-bold">Amit Shah</p>
                <p className="text-sm text-white/70">
                  Electrical Trader, Gujarat
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-100 p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/40 relative">
            <span className="material-symbols-outlined text-primary/10 text-8xl absolute top-6 right-8 select-none">
              format_quote
            </span>
            <p className="text-slate-700 italic text-lg leading-relaxed mb-10 relative z-10">
              &quot;The dry-run protection in their motor starters saved my pump
              thrice this season. It&apos;s a small investment that saves lakhs
              in repairs.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                <img
                  alt="S. Venkatesh"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLSc1b5gONcoJJOnTOlLNlgJxVOXIOmw5BPJAh-LFFO3PIosghZvu97N6T6Eoa0uNoNSfdLnsoGcl9bpltG7LfG63nvDl3uAOexYyNh0qYWKs-Pnu2TN-zQuf5LRCs3trLImgn6FVULDUxD1c26S-K4bLxpxokkuawN2IJyULQr9giZt-6mwvpnsomkqIZtQllADRdTQhQDfKLADn36ObKDoGH3XnBH5GuULLssHs9BhE5vEle50EejwepbPGuXuX5fig158JRbCU"
                />
              </div>
              <div>
                <p className="font-bold text-slate-900">S. Venkatesh</p>
                <p className="text-sm text-slate-500">
                  Farmer, Andhra Pradesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
