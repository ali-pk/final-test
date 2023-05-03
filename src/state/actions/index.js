export const getMovies = (moviesData) => {
  return {
    type: "GET_MOVIES",
    payload: moviesData,
  };
};

export const addToWishList = (movie) => {
  return {
    type: "ADD_TO_WISH",
    payload: movie,
  };
};

export const addToCartList = (movie) => {
  return {
    type: "ADD_TO_CART",
    payload: movie,
  };
};

// export const getProduct = (movie) => {
//   return {
//     type: "GET_PRODUCT",
//     payload: movie,
//   };
// };

export const getCategories = (categoriesData) => {
  return {
    type: "GET_CATEGORIES",
    payload: categoriesData,
  };
};
