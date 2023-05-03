// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// export default function Details() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { product } = useSelector((state) => state.moviesReducer);
//   useEffect(() => {
//     dispatch({ type: "PRODUCT", id });
//   }, [id]);

//   return (
//     <div className="container mt-100">
//       <div className="row">
//         <div className="col-6">
//           <div className="details__image">
//             <img src={`/images/${product.image}`} alt="" />
//           </div>
//         </div>
//         <div className="col-6">
//           <div className="details__name"></div>
//           <div className="details__prices"></div>
//           <div className="details__info"></div>
//         </div>
//       </div>
//     </div>
//   );
// }
