import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import SupportPage from "./pages/support";
import ProductsPage from "./pages/products";
import ProductDetailPage from "./pages/product-detail";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="scroll-smooth">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-story" element={<AboutPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

