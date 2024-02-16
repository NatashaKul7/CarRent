import { useSelector } from "react-redux";
import { getAdverts } from "../../redux/adverts/selectors";
import CatalogItem from "./CatalogItem/CatalogItem";
import { CarBoxStyled } from "./CatalogList.styled";
import { useEffect, useState } from "react";
// import { addFavorite, removeFavorite } from "../utils/favorite";

const CatalogList = () => {
  const adverts = useSelector(getAdverts);

  const [favorite, setFavorite] = useState(
    () => JSON.parse(localStorage.getItem("favorite")) ?? []
  );
  const isFavorite = (id) => favorite.some((item) => item.id === id);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  const addFavorite = (id) => {
    const carToAdd = adverts.find((car) => car.id === id);
    if (carToAdd) {
      setFavorite((prevFavorite) => [...prevFavorite, carToAdd]);
    }
  };

  const removeFavorite = (id) => {
    setFavorite((prevFavorite) =>
      prevFavorite.filter((item) => item.id !== id)
    );
  };

  // for loadMore
  // const [newAdverts, setNewAdverts] = useState([]);

  // useEffect(() => {
  //   if (adverts) {
  //     setNewAdverts((prev) => [...prev, ...adverts]);
  //   }
  // }, [adverts]);

  return (
    <CarBoxStyled>
      {adverts?.map((advert) => (
        <CatalogItem
          key={advert.id}
          advert={advert}
          addFavorite={addFavorite}
          setFavorite={setFavorite}
          isFavorite={isFavorite(advert.id)}
          removeFavorite={removeFavorite}
        />
      ))}
    </CarBoxStyled>
  );
};

export default CatalogList;
