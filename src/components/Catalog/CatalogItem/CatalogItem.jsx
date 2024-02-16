import { useState } from "react";
import { CarCardStyled } from "./CatalogItem.styled";
import Modal from "../../Modal/Modal";

const CatalogItem = ({ advert }) => {
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  const {
    // id,
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
    <>
      <CarCardStyled>
        <div>
          <img src={img} alt={make} className="card-image" />
          {/* <button>
          <svg className="icon-heart" width="16px" height="16px">
            <use href="icon-heart"></use>
          </svg>
        </button> */}

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
              {address.split(" ").slice(-2).join(" ").replace(",", " |")}
              <span className="span-line"> | </span>
              {rentalCompany}
            </p>
            {/* <p>{rentalCompany}</p>
        <p>{type}</p> */}
            <p>
              {type}
              <span className="span-line"> | </span>
              {model}
              <span className="span-line"> | </span>
              {mileage}
              <span className="span-line"> | </span>
              {functionalities[0]}
            </p>
            {/* <p>{mileage}</p>
        <p>{functionalities[0]}</p> */}
          </div>
        </div>

        <button className="button-card" onClick={() => setOpenModal(true)}>
          Learn more
        </button>
        <Modal
          open={openModal}
          closeModal={closeModal}
          advert={advert}
          // id={id}
        />
      </CarCardStyled>
    </>
  );
};

export default CatalogItem;
