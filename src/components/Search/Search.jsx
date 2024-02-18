import Select from "react-select";
import { SearchStyled } from "./Search.styled";
import { useState } from "react";
import { carModels } from "../utils/models";

const Search = ({ onSearch }) => {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarSelect = (selectedOption) => {
    setSelectedCar(selectedOption.value);
  };

  const handleSearch = () => {
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
            dropdownIndicator: (baseStyles) => ({
              ...baseStyles,
              color: "#121417",
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
