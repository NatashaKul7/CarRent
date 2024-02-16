import { useEffect, useState } from "react";
import CatalogItem from "../components/Catalog/CatalogItem/CatalogItem";
import { CarBoxStyled } from "../components/Catalog/CatalogList.styled";
import Search from "../components/Search/Search";

const FavoritesPage = () => {
  const [favorite, setFavorite] = useState(
    () => JSON.parse(localStorage.getItem("favorite")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  const isFavorite = (id) => favorite.some((item) => item.id === id);

  const removeFavorite = (id) => {
    setFavorite((prevFavorite) =>
      prevFavorite.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="container">
      <Search />
      <CarBoxStyled>
        {favorite.map((advert) => (
          <CatalogItem
            key={advert.id}
            advert={advert}
            setFavorite={setFavorite}
            isFavorite={isFavorite(advert.id)}
            removeFavorite={removeFavorite}
          />
        ))}
      </CarBoxStyled>
    </div>
  );
};

export default FavoritesPage;
