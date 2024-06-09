import React from "react";
import Context from "./feature/context/Context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/Login/LoginPage";
import Footer from "./UI/Footer";
import Header from "./UI/Header";
import JeweleryProducts from "./pages/Category/JeweleryProducts";
import ElectronicsProducts from "./pages/Category/ElectronicsProducts";
import MensClothingProducts from "./pages/Category/MensClothingProducts";
import WomensClothingProducts from "./pages/Category/WomensClothingProducts";
import Product from "./pages/Product";
import ShoppingCart from "./pages/ShoppingCart";
import About from "./pages/About";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <Context>
        <QueryClientProvider client={queryClient}>
          <Header />
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/Jewelery" element={<JeweleryProducts />} />
            <Route path="/Electronics" element={<ElectronicsProducts />} />
            <Route path="/MensClothing" element={<MensClothingProducts />} />
            <Route
              path="/WomensClothing"
              element={<WomensClothingProducts />}
            />
            <Route path="/Product" element={<Product />} />
            <Route path="/ShoppingCart" element={<ShoppingCart />} />
            <Route path="About" element={<About />} />
          </Routes>
          <Footer />
        </QueryClientProvider>
      </Context>
    </BrowserRouter>
  );
}

export default App;
