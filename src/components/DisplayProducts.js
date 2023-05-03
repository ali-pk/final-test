import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMovies } from "../state/actions";
import ProductCards from "./ProductCards";
import { useNavigate } from "react-router-dom";
import "../styles/DisplayProducts.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function DisplayProducts() {
  const [movieData, setMoviesData] = useState([]);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      console.log(result);

      dispatch(getMovies(result));
      setMoviesData(result);
    };
    fetchMovies();
  }, [dispatch]);

  return (
    <>
      <Navbar className="navbar" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">WELCOME TO J.</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">SIGN IN 🏴󠁧󠁢󠁥󠁮󠁧󠁿</Nav.Link>
              <NavDropdown title="PKR ▽" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">AUD</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">GBP</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">CAD</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">EUR</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                className="mylist-button"
                onClick={() => navigate("/wishlist")}
              >
                💖
              </Nav.Link>
              <Nav.Link
                className="mylist-button cart-button"
                onClick={() => navigate("/cart")}
              >
                🛒
              </Nav.Link>
              <Nav.Link className="mylist-button search-button">
                🔍 Search
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <h1 className="website-brand">J.</h1>
      <div className="display-movies-container">
        {movieData.map((movie) => (
          <ProductCards movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
}
