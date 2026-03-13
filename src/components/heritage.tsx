import React from "react";

const Heritage: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                alt="Manufacturing excellence"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8TSxr9ZEFxdv4HlX8EERF8PeRetd7ijZnwLPfT4LRX3EIvPp6MQnuNbb_1HwYIhAVcZtnhSgCF9JJDEC8P-G3LxQaULM95bP7z5QIU4yH_CWF_kfhyw6m-CiAEhSe7dpllbI-vqonhcj82XQOqWthTHxCml3-sPWG0vkRIb4Awc-M7tmKcPM8cAFbdbUrcDdpaRBEVabx_yIr28RfQ-yTA0kGg32q0UR4hfTZYEOB-4Y4ZiU5CmQptskBPUqfQwuKKyvHsL8jOx8"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 flex items-center gap-6 max-w-xs">
              <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-2xl flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-primary">25+</span>
              </div>
              <div>
                <p className="font-display font-bold text-xl text-slate-900">
                  Years of Excellence
                </p>
                <p className="text-slate-500 text-sm">In Power Solutions</p>
              </div>
            </div>
          </div>

          <div>
            <span className="text-brand-red font-bold uppercase tracking-[0.2em] text-sm mb-6 block">
              Our Heritage
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-950 mb-8 leading-tight">
              Farmer-Focused Manufacturing Since 1990
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              At MRG, we believe that Indian agriculture deserves world-class
              electrical equipment. For over three decades, we have focused on
              one thing: building products that never fail in the field. Our
              manufacturing process combines high-grade raw materials with
              rigorous testing protocols.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-white fill-icon">
                    verified_user
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    Uncompromising Quality
                  </h4>
                  <p className="text-slate-500">
                    Every product undergoes 15+ stress tests to ensure
                    performance in fluctuating voltage and high heat.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-white fill-icon">
                    energy_savings_leaf
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">
                    Sustainable Growth
                  </h4>
                  <p className="text-slate-500">
                    Our efficient cable designs reduce energy consumption,
                    helping farmers save thousands in utility costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;
