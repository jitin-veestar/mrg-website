import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-sm fill-icon">
                  bolt
                </span>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-brand-red">
                MRG
              </span>
            </div>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Pioneering agricultural electrical solutions since 1990. Committed
              to quality, durability, and the success of the Indian farmer.
            </p>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-red hover:text-white transition-all"
                href="#"
              >
                <span className="material-symbols-outlined">public</span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-brand-red hover:text-white transition-all"
                href="#"
              >
                <span className="material-symbols-outlined">share</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-8 uppercase tracking-widest text-xs">
              Quick Links
            </h4>
            <ul className="space-y-4 text-slate-500">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Product Catalog
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Company History
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Dealer Network
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Quality Certifications
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Career Opportunities
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-8 uppercase tracking-widest text-xs">
              Our Products
            </h4>
            <ul className="space-y-4 text-slate-500">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Submersible Cables
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Motor Starters
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Control Panels
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Copper Windings
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Industrial Starters
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-8 uppercase tracking-widest text-xs">
              Contact Information
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">
                  location_on
                </span>
                <p className="text-slate-500 text-sm">
                  Mundhra Electrical Industries,
                  <br />
                  Wazirpur Industrial Area,
                  <br />
                  New Delhi - 110052
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">
                  phone
                </span>
                <p className="text-slate-500 text-sm">+91 9811230094</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary">
                  mail
                </span>
                <p className="text-slate-500 text-sm">
                  mrgproducts.india@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm">
            © 2024 MRG Products. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-400">
            <a className="hover:text-primary" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-primary" href="#">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
