import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategories } from "../state/actions";
import { useSelector } from "react-redux";
import Nav from "react-bootstrap/Nav";
import "../styles/DisplayProducts.css";

export default function DisplayProducts() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const result = await response.json();
      console.log(result);

      dispatch(getCategories(result));
    };
    fetchCategories();
  }, [dispatch]);

  console.log(categories);

  return (
    <Nav className="navbar">
      <div>
        <ul className="navbar-nav ">
          {categories.map((category) => (
            <li className="navbar-item" key={category}>
              {category}
            </li>
          ))}
        </ul>
      </div>
    </Nav>
  );
}
