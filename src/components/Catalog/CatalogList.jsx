import { useSelector } from "react-redux";
import { getAdverts } from "../../redux/adverts/selectors";
import CatalogItem from "./CatalogItem/CatalogItem";
import { CarBoxStyled } from "./CatalogList.styled";

const CatalogList = () => {
  const adverts = useSelector(getAdverts);

  return (
    <CarBoxStyled>
      <ul className="card-list">
        {adverts?.map((advert) => (
          <CatalogItem key={advert.id} id={advert.id} advert={advert} />
        ))}
      </ul>
      <button className="button-load-more">Load more</button>
    </CarBoxStyled>
  );
};

export default CatalogList;
