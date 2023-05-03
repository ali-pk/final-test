import React from "react";
import { useSelector } from "react-redux";
import ProductCards from "../components/ProductCards";
import "../styles/ProductCards.css";

export default function Wishlist() {
  const wish = useSelector((state) => state.wish);

  return (
    <div>
      <div>
        {wish.map((movie) => (
          <ProductCards movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
