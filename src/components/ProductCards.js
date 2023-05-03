import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { addToWishList } from "../state/actions";
import { addToCartList } from "../state/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/ProductCards.css";

export default function ProductCards({ movie }) {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const addToWish = (movie) => {
    dispatch(addToWishList(movie));
  };
  const addToCart = (movie) => {
    dispatch(addToCartList(movie));
  };

  return (
    <>
      <Container className="card-container">
        <Card>
          <div className="card-img">
            <Card.Img src={`${movie.image}`} alt="product-thumbnail" />
          </div>

          <div className="card-content">
            <Link
              to="/moviedetails"
              state={movie}
              key={movie.id}
              className="movie-link"
            >
              <h6 className="card-text">{movie.title}</h6>
            </Link>
            <div>
              <h5 className="card-pricem,">{movie.price}</h5>
            </div>
            <div className="btn" onClick={() => addToCart(movie)}>
              <Button variant="light" onClick={() => navigate("/cart")}>
                ADD TO CART
              </Button>
            </div>

            <div className="btn-wishlist" onClick={() => addToWish(movie)}>
              <Button variant="light" onClick={() => navigate("/wishlist")}>
                Add to Wishlist
              </Button>
            </div>

            {/* <div className="btn">
              <Button variant="light" onClick={() => navigate("/details")}>
                View Details
              </Button>
            </div> */}
            {/* <Card.Text className="cardtextclass">{movie.overview}</Card.Text> */}
          </div>
        </Card>
      </Container>
    </>
  );
}
