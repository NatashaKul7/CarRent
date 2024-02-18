import { useState } from "react";
import { useSelector } from "react-redux";
import CatalogList from "../components/Catalog/CatalogList";
import { getIsError, getIsLoading } from "../redux/adverts/selectors";
import Search from "../components/Search/Search";
import Loader from "../components/Loader/Loader";
import { ContainerStyled } from "./pageStyle/Catalog.styled";

const CatalogPage = () => {
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getIsError);
  const [selectedCar, setSelectedCar] = useState("");

  const handleSearch = (carModel) => {
    setSelectedCar(carModel);
  };

  return (
    <ContainerStyled className="container">
      {isError && <div>Error</div>}
      <Search onSearch={handleSearch} />
      <CatalogList selectedCar={selectedCar} />
      {isLoading && <Loader />}
    </ContainerStyled>
  );
};

export default CatalogPage;
