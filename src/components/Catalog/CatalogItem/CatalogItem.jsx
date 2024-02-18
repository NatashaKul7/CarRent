import { useState } from "react";
import { CarCardStyled } from "./CatalogItem.styled";
import Modal from "../../Modal/Modal";
import Icon from "../../Icon";

const CatalogItem = ({ advert, addFavorite, removeFavorite, isFavorite }) => {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
    document.body.style.overflow = "auto";
  };

  const onOpenModal = () => {
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  };

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

  const shortAdress = address.split(" ");

  return (
    <>
      <CarCardStyled>
        <div className="img-box">
          <img src={img} alt={make} className="card-image" />
          {!isFavorite ? (
            <button
              className="button-heart"
              onClick={() => addFavorite(advert.id)}
            >
              <Icon className="icon-heart" id="heart" />
            </button>
          ) : (
            <button
              className="button-heart"
              onClick={() => removeFavorite(advert.id)}
            >
              <Icon className="favorite" id="heart" />
            </button>
          )}
          <div className="car-info">
            <h2>
              {make}
              <span>
                <span className="custom-nbsp">&nbsp;</span> {model},
              </span>
              <span className="custom-nbsp">&nbsp;</span> {year}
            </h2>

            <h2>{rentalPrice}</h2>
          </div>
          <div className="car-details">
            <p>
              {shortAdress[3]}
              <span className="span-line"> | </span>
              {shortAdress[4]}
              <span className="span-line"> | </span>
              {rentalCompany}
              <span className="span-line"> | </span>
              Premium
            </p>
            <p>
              {type}
              <span className="span-line"> | </span>
              {model}
              <span className="span-line"> | </span>
              {mileage}
              <span className="span-line"> | </span>
              {functionalities[0]}
            </p>
          </div>
        </div>

        <button className="button-card" onClick={onOpenModal}>
          Learn more
        </button>
        <Modal open={openModal} closeModal={closeModal} advert={advert} />
      </CarCardStyled>
    </>
  );
};

export default CatalogItem;
