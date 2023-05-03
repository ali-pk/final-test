const initialState = {
  movies: [],
  wish: [],
  cart: [],
  categories: [],
  // product: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return { ...state, movies: [...action.payload] };

    case "ADD_TO_WISH":
      return { ...state, wish: [...state.wish, action.payload] };

    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };

    case "GET_CATEGORIES":
      return { ...state, cart: [...state.categories, action.payload] };

    default:
      return state;
  }
};

export default moviesReducer;
// case "GET_PRODUCT":
//   return {
//     ...state,
//     product: state.product.find(
//       (product) => product.id === parseInt(action.id)
//     ),
//   };
