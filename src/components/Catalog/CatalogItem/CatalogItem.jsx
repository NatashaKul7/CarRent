const CatalogItem = ({ advert }) => {
  const {
    make,
    model,
    year,
    img,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
  } = advert;
  return (
    <li>
      <img src={img} alt={make} />
      <h2>
        {make} <span>{model}</span>
      </h2>
      <h2>{year}</h2>
      <h2>{rentalPrice}</h2>
      <p>{address}</p>
      <p>{rentalCompany}</p>
      <p>{type}</p>
      <p>{model}</p>
      <p>{mileage}</p>
      <p>{functionalities}</p>
    </li>
  );
};

export default CatalogItem;
