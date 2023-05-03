import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
//import Details from "./components/Details";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/details/:id" exact component={Details} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
