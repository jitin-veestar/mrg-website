import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Features from "../components/features";
import Products from "../components/products";
import Heritage from "../components/heritage";
import Testimonials from "../components/testimonials";
import Stats from "../components/stats";
import Footer from "../components/footer";
import { Seo } from "../components/Seo";

const HomePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Seo
        title="Submersible Cable Manufacturer in India | MRG Cables"
        description="MRG Cables manufactures high quality submersible pump cables, flat submersible cables and agricultural pump cables trusted by farmers and OEMs across India since 1990."
        path="/"
        type="website"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MRG Cables",
            url: "https://www.mrgcables.com",
            logo: "/logo.png",
            sameAs: [],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              areaServed: "IN",
            },
          },
        ]}
      />
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

