import Select from "react-select";
import { SearchStyled } from "./Search.styled";
import { useState } from "react";
import { carModels } from "../utils/models";
import { toast } from "react-toastify";

const Search = ({ onSearch }) => {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarSelect = (selectedOption) => {
    setSelectedCar(selectedOption.value);
  };

  const handleSearch = () => {
    if (!selectedCar) {
      toast.error("Please select a model");
      return;
    }
    onSearch(selectedCar);
  };

  return (
    <SearchStyled>
      <label className="select-label">
        Car brand
        <Select
          placeholder="Enter the text"
          options={carModels}
          onChange={handleCarSelect}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              height: "44px",
              width: "224px",
              borderRadius: "14px",
              color: "121417",
              backgroundColor: "#f7f7fb",
              border: "none",
            }),
            singleValue: (baseStyles) => ({
              ...baseStyles,
              color: "#3470ff",
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              height: "150px",
              overflowY: "hidden",
              backgroundColor: "#D7E3FF",
              color: "#3470ff",
              borderRadius: "14px",
            }),
            indicatorSeparator: (baseStyles) => ({
              ...baseStyles,
              display: "none",
              color: "#121417",
            }),
            dropdownIndicator: (provided, state) => ({
              ...provided,
              color: "#121417",
              transform: state.selectProps.menuIsOpen
                ? "rotate(180deg)"
                : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }),
            placeholder: (baseStyles) => ({
              ...baseStyles,
              color: "#121417",
            }),
          }}
        />
      </label>
      <button className="button-search" onClick={handleSearch}>
        Search
      </button>
    </SearchStyled>
  );
};

export default Search;
