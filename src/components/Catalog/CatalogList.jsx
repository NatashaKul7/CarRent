import { useSelector, useDispatch } from "react-redux";
import { getAdverts } from "../../redux/adverts/selectors";
import CatalogItem from "./CatalogItem/CatalogItem";
import { CarBoxStyled } from "./CatalogList.styled";
import { useEffect, useState } from "react";
import LoadMore from "../LoadMore/LoadMore";
import { requestAdverts } from "../../redux/adverts/operations";

const CatalogList = ({ selectedCar }) => {
  const adverts = useSelector(getAdverts);
  const [displayedAdverts, setDisplayedAdverts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [favorite, setFavorite] = useState(
    () => JSON.parse(localStorage.getItem("favorite")) ?? []
  );

  const dispatch = useDispatch();

  const isFavorite = (id) => favorite.some((item) => item.id === id);

  useEffect(() => {
    if (adverts.length === 0 || selectedCar) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }

    if (selectedCar === "All") {
      setHasMore(true);
    }
  }, [adverts, selectedCar]);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(
        requestAdverts({
          page,
          selectedCar: selectedCar === "All" ? "" : selectedCar,
        })
      )
        .unwrap()
        .then((data) => {
          if (selectedCar) {
            setDisplayedAdverts([]);
          }
          setDisplayedAdverts((prevAdverts) => [...prevAdverts, ...data]);
        });
    };

    fetchData();
  }, [dispatch, page, selectedCar]);

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

  const onLoadMore = async () => {
    await dispatch(requestAdverts(page + 1))
      .unwrap()
      .then((data) => {
        setDisplayedAdverts((prevAdverts) => [...prevAdverts, ...data]);
        setPage((prevPage) => prevPage + 1);
      });
  };
  return (
    <>
      <CarBoxStyled>
        {displayedAdverts.map((advert) => (
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
      {hasMore && <LoadMore onLoadMore={onLoadMore} />}
    </>
  );
};

export default CatalogList;
