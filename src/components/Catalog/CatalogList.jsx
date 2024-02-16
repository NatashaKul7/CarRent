import { useSelector } from "react-redux";
import { getAdverts } from "../../redux/adverts/selectors";
import CatalogItem from "./CatalogItem/CatalogItem";
import { CarBoxStyled } from "./CatalogList.styled";
import { useEffect, useState } from "react";
// import { addFavorite, removeFavorite } from "../utils/favorite";

const CatalogList = () => {
  const adverts = useSelector(getAdverts);
  const [data, setNewData] = useState([]);

  const [favorite, setFavorite] = useState(
    () => JSON.parse(localStorage.getItem("favorite")) ?? []
  );
  const isFavorite = (id) => favorite.some((item) => item.id === id);

  useEffect(() => {
    if (adverts) {
      setNewData((prev) => [...prev, ...adverts]);
    }
  }, [adverts]);

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

  return (
    <CarBoxStyled>
      {data?.map((advert) => (
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
