import React from "react";

const Stats: React.FC = () => {
  return (
    <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 100 100">
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#fff" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-display font-bold mb-8">
              Growing Across India
            </h2>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              With a robust network spanning the length and breadth of the
              country, MRG products ensure that reliable power is accessible to
              every farmer, no matter how remote their field.
            </p>

            <div className="grid grid-cols-2 gap-y-12 gap-x-8">
              <div>
                <p className="text-5xl font-display font-bold text-primary mb-2">
                  18+
                </p>
                <p className="text-slate-400 font-medium tracking-wide uppercase text-sm">
                  States Covered
                </p>
              </div>
              <div>
                <p className="text-5xl font-display font-bold text-primary mb-2">
                  500+
                </p>
                <p className="text-slate-400 font-medium tracking-wide uppercase text-sm">
                  Service Points
                </p>
              </div>
              <div>
                <p className="text-5xl font-display font-bold text-primary mb-2">
                  1M+
                </p>
                <p className="text-slate-400 font-medium tracking-wide uppercase text-sm">
                  Meters Sold Monthly
                </p>
              </div>
              <div>
                <p className="text-5xl font-display font-bold text-primary mb-2">
                  24/7
                </p>
                <p className="text-slate-400 font-medium tracking-wide uppercase text-sm">
                  Farmer Support
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-[3rem] p-6 border border-white/10 aspect-square flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-primary text-5xl">
                  map
                </span>
              </div>
              <p className="text-2xl font-display font-bold text-white mb-2">
                Interactive Distribution Map
              </p>
              <p className="text-slate-400">
                Click to locate your nearest MRG dealer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
