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
      <label>
        Car brand
        <Select
          placeholder="Enter the text"
          options={carModels}
          onChange={handleCarSelect}
        />
      </label>
      <button className="button-search" onClick={handleSearch}>
        Search
      </button>
    </SearchStyled>
  );
};

export default Search;
