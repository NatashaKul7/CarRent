import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { requestAdverts } from "../redux/adverts/operations";
import CatalogList from "../components/Catalog/CatalogList";
import {
  getAdverts,
  getIsError,
  getIsLoading,
} from "../redux/adverts/selectors";
import { useSelector } from "react-redux";
import Search from "../components/Search/Search";
import Loader from "../components/Loader/Loader";
import { ContainerStyled } from "./pageStyle/Catalog.styled";
import LoadMore from "../components/LoadMore/LoadMore";

const CatalogPage = () => {
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getIsError);
  const adverts = useSelector(getAdverts);

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (adverts.length === 0) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }
  }, [adverts]);

  useEffect(() => {
    dispatch(requestAdverts(page));
  }, [dispatch, page]);

  const onLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <ContainerStyled className="container">
      {isLoading && <Loader />}
      {isError && <div>Error</div>}

      <Search />
      <CatalogList />

      {hasMore && <LoadMore onLoadMore={onLoadMore} />}
    </ContainerStyled>
  );
};

export default CatalogPage;
