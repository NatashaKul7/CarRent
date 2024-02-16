import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { requestAdverts } from "../redux/adverts/operations";
import CatalogList from "../components/Catalog/CatalogList";
import { getIsLoading } from "../redux/adverts/selectors";
import { useSelector } from "react-redux";
import Search from "../components/Search/Search";
import LoadMore from "../components/LoadMore/LoadMore";

const CatalogPage = () => {
  const isLoading = useSelector(getIsLoading);
  // const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  // const onLoadMore = () => {
  //   setPage((prev) => prev + 1);
  // };

  // useEffect(() => {
  //   dispatch(requestAdverts(page));
  // }, [dispatch, page]);

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
          <LoadMore
          // onLoadMore={onLoadMore}
          />
        </>
      )}
    </div>
  );
};

export default CatalogPage;
