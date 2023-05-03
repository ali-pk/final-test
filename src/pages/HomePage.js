import React from "react";
import DisplayProducts from "../components/DisplayProducts";
import DisplayCategories from "../components/DisplayCategories";

export default function HomePage() {
  return (
    <div className="body">
      <DisplayCategories />
      <DisplayProducts />
    </div>
  );
}
