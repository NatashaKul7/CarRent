import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { requestAdverts } from "../redux/adverts/operations";
import CatalogList from "../components/Catalog/CatalogList";
import { getIsLoading } from "../redux/adverts/selectors";
import { useSelector } from "react-redux";
import Search from "../components/Search/Search";

const CatalogPage = () => {
  const isLoading = useSelector(getIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestAdverts());
  }, [dispatch]);

  return (
    <div className="container">
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <>
          <Search />
          <CatalogList />
        </>
      )}
    </div>
  );
};

export default CatalogPage;
