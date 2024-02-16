import React, { useEffect } from "react";
import { OverlayStyled } from "./Modal.styled";

const Modal = ({ open, closeModal, advert }) => {
  if (!open) {
    return null;
  }
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal(false);
    }
  };

  //   if (open) {
  //     document.body.classList.add("active-modal");
  //   } else {
  //     document.body.classList.remove("active-modal");
  //   }

  const {
    id,
    make,
    model,
    year,
    img,
    rentalPrice,
    address,
    rentalCompany,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
  } = advert;

  return (
    <OverlayStyled onClick={handleBackdropClick}>
      <div className="modal-container">
        <button onClick={closeModal} className="button-close">
          Close
        </button>
        <img src={img} alt={make} className="modal-image" />

        <h2 className="car-modal-title">
          {make}
          <span>
            <span className="custom-nbsp">&nbsp;</span> {model},
          </span>
          <span className="custom-nbsp">&nbsp;</span> {year}
        </h2>

        <div className="modal-car-details ">
          <p>
            {address.split(" ").slice(-2).join(" ").replace(",", " |")}
            <span className="span-line"> | </span>
            Id: {id}
            <span className="span-line"> | </span>
            Year: {year}
            <span className="span-line"> | </span>
            Type: {type}
            <span className="span-line"> | </span>
            {rentalCompany}
          </p>
          <p>
            FuelConsumption: {fuelConsumption}
            <span className="span-line"> | </span>
            EngineSize: {engineSize}
          </p>
        </div>
        <p className="car-description">{description}</p>
        <h3 className="accessories-title">Accessories and functionalities:</h3>
        <div className="accessories-box">
          <p>{accessories && accessories.join(" | ")}</p>
          <p> {functionalities && functionalities.join(" | ")}</p>
        </div>
        <h3 className="rental-cond-title">Rental Conditions:</h3>

        <div className="rental-cond-box">
          {rentalConditions &&
            rentalConditions.split("\n").map((condition, index) => {
              const parts = condition.split(":");
              const label = parts[0].trim();
              const value = parts.length > 1 ? parts[1].trim() : "";

              return (
                <p key={index} className="condition">
                  {index === 0 ? `${label}: ` : label}
                  {index === 0 ? (
                    <span className="special">{value}</span>
                  ) : (
                    value
                  )}
                </p>
              );
            })}
          {/* <p className="condition"> {rentalConditions.split("\n")}</p> */}
          {/* <p className="condition"> {rentalConditions.slice(1, 2)}</p>
          <p className="condition"> {rentalConditions.slice(2, 3)}</p> */}
          <p className="condition">
            Mileage:{" "}
            <span className="span-numbers">
              {new Intl.NumberFormat("en").format(mileage)}
            </span>
          </p>
          <p className="condition">
            Price: <span className="span-numbers">{rentalPrice.slice(1)}$</span>
          </p>
        </div>
        <a href="tel:+380730000000" className="rental-button">
          Rental car
        </a>
      </div>
    </OverlayStyled>
  );
};

export default Modal;
