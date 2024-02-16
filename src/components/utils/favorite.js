//useFavorites

// import { useState, useEffect } from "react";

// const useFavorites = () => {
//   const [favorite, setFavorite] = useState(
//     () => JSON.parse(localStorage.getItem("favorite")) ?? []
//   );

//   useEffect(() => {
//     localStorage.setItem("favorite", JSON.stringify(favorite));
//   }, [favorite]);

//   const addFavorite = (advert) => {
//     setFavorite((prevFavorite) => [...prevFavorite, advert]);
//   };

//   const removeFavorite = (id) => {
//     setFavorite((prevFavorite) =>
//       prevFavorite.filter((item) => item.id !== id)
//     );
//   };

//   return { favorite, addFavorite, removeFavorite };
// };

// export default useFavorites;
