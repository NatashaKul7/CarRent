import { useSelector } from "react-redux";
import { getAdverts } from "../../redux/adverts/selectors";
import CatalogItem from "./CatalogItem/CatalogItem";

const CatalogList = () => {
  const adverts = useSelector(getAdverts);

  console.log(adverts);
  return (
    <div>
      <p>Catalog</p>
      <ul>
        {adverts?.map((advert) => (
          <CatalogItem key={advert.id} advert={advert} />
        ))}
      </ul>
    </div>
  );
};

export default CatalogList;
