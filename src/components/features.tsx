import React from "react";

const Features: React.FC = () => {
  return (
    <section className="relative -mt-20 z-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-10 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 group hover:-translate-y-2 transition-transform duration-300">
          <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-8">
            <span className="material-symbols-outlined text-primary text-4xl font-light">
              speed
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-4 font-display">
            Increasing Efficiency
          </h3>
          <p className="text-slate-500 leading-relaxed">
            Engineered with low-resistance copper to ensure maximum voltage
            delivery with minimum energy waste.
          </p>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 group hover:-translate-y-2 transition-transform duration-300">
          <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-8">
            <span className="material-symbols-outlined text-primary text-4xl font-light">
              trending_up
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-4 font-display">
            Maximum Productivity
          </h3>
          <p className="text-slate-500 leading-relaxed">
            Smart sensors and automated starters ensure your irrigation never
            stops, even during voltage fluctuations.
          </p>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 group hover:-translate-y-2 transition-transform duration-300">
          <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-8">
            <span className="material-symbols-outlined text-primary text-4xl font-light">
              account_balance_wallet
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-4 font-display">
            Cost-Effective
          </h3>
          <p className="text-slate-500 leading-relaxed">
            Durable outer sheathing provides double protection against chemicals
            and wear, reducing replacement costs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
