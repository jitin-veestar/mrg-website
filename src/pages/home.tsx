import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Features from "../components/features";
import Products from "../components/products";
import Heritage from "../components/heritage";
import Testimonials from "../components/testimonials";
import Stats from "../components/stats";
import Footer from "../components/footer";

const HomePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Products />
        <Heritage />
        <Testimonials />
        <Stats />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

