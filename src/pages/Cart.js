import React from "react";
import { useSelector } from "react-redux";
import ProductCards from "../components/ProductCards";
import "../styles/DisplayProducts.css";

export default function Favorites() {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <div className="mylist-body">
        {cart.map((movie) => (
          <ProductCards movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
