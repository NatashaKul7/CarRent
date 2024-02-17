import { SearchStyled } from "./Search.styled";

import Select from "react-select";

const carModels = [
  { value: "Buick", label: "Buick" },
  { value: "Volvo", label: "Volvo" },
  { value: "HUMMER", label: "HUMMER" },
  { value: "Subaru", label: "Subaru" },
  { value: "Mitsubishi", label: "Mitsubishi" },
  { value: "Nissan", label: "Nissan" },
  { value: "Lincoln", label: "Lincoln" },
  { value: "GMC", label: "GMC" },
  { value: "Hyundai", label: "Hyundai" },
  { value: "MINI", label: "MINI" },
  { value: "Bentley", label: "Bentley" },
  { value: "Mercedes-Benz", label: "Mercedes-Benz" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "Pontiac", label: "Pontiac" },
  { value: "Lamborghini", label: "Lamborghini" },
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "Chevrolet", label: "Chevrolet" },
  { value: "Chrysler", label: "Chrysler" },
  { value: "kia", label: "Kia" },
  { value: "Land", label: "Land" },
];

const Search = () => {
  return (
    <SearchStyled>
      <label>
        Car brand
        <Select placeholder="Enter the text" options={carModels} />
      </label>
      <label>
        Price 1/hour
        <select name="hour-price" id="">
          <option value="">To $</option>
        </select>
      </label>
      <button className="button-search">Search</button>
    </SearchStyled>
  );
};

export default Search;
