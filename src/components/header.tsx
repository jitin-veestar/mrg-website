import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="fixed w-full z-50 bg-white shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-white fill-icon text-2xl">
                bolt
              </span>
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-brand-red group-hover:text-red-700 transition-colors">
              MRG
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-10">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "nav-link text-primary border-b-2 border-primary pb-1"
                  : "nav-link"
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/our-story"
              className={({ isActive }) =>
                isActive
                  ? "nav-link text-primary border-b-2 border-primary pb-1"
                  : "nav-link"
              }
            >
              Our Story
            </NavLink>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                isActive
                  ? "nav-link text-primary border-b-2 border-primary pb-1"
                  : "nav-link"
              }
            >
              Support
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-2 text-slate-700">
              <span className="material-symbols-outlined text-primary">
                call
              </span>
              <span className="text-sm font-bold">+91 9811230094</span>
            </div>
            <a
              className="bg-brand-red hover:bg-red-700 text-white px-6 py-3 rounded-lg text-sm font-bold transition-all shadow-md hover:shadow-lg active:scale-95"
              href="#"
            >
              Become a Distributor
            </a>
          </div>

          <button className="lg:hidden p-2 text-slate-600">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
