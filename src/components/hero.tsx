import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt="Green agricultural field with irrigation system"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoufZQm5MbuxJIJtk6Mn5FEMt5f2ZfexOTq9h8CHzv0JzZjM-oJF5icTBeO-15OuEXh4xGj2B4IOsNg-pnnREAgEmxyhtjlPupiZCRx_H5Y8xOHAcBFaqHLudYPonlF3ePuw0jfp8ujv2HRRPwGbNrJKGAz05Zj8VWAMsNkNuYaSYDv8dr5aYbXTXO6r4coiz9xt0Nf0QkZZSfa-J-3XtoTUbsG_alzREA_kgkUc9l0X1kmCGOnFAHdkudd71gyveFoRtI53zXJzc"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Trusted by 50,000+ Indian Farmers
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
            Powering India&apos;s Farms with{" "}
            <span className="text-primary">Reliable</span> Solutions
          </h1>

          <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-2xl font-light">
            Manufacturer of premium submersible cables, motor starters, and
            advanced control panels engineered for the world&apos;s most
            demanding environments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary hover:bg-green-700 text-white px-10 py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-green-900/40 group">
              Explore Products
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all hover:border-white/50">
              Our Impact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
