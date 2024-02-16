import { SearchStyled } from "./Search.styled";

const Search = () => {
  return (
    <SearchStyled>
      <label>
        Car brand
        <select name="car-model" id="">
          <option value="">Enter the text</option>
          <option value="dog">Buick</option>
          <option value="cat">Volvo</option>
          <option value="hamster">Subaru</option>
          <option value="parrot">Mitsubishi</option>
          <option value="spider">Nissan</option>
          <option value="goldfish">Lincoln</option>
        </select>
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

//   "GMC",
//   "Hyundai",
//   "MINI",
//   "Bentley",
//   "Mercedes-Benz",
//   "Aston Martin",
//   "Pontiac",
//   "Lamborghini",
//   "Audi",
//   "BMW",
//   "Chevrolet",
//   "Mercedes-Benz",
//   "Chrysler",
//   "Kia",
//   "Land";

export default Search;
