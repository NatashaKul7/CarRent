import axios from "axios";

axios.defaults.baseURL = `https://65ccb0d7dd519126b83f48a1.mockapi.io/api/v1`;

export const fetchCatalog = async ({ page = 1, selectedCar = "" }) => {
  console.log(selectedCar === "All");
  const { data } = await axios.get(
    `/adverts?p=${page}&l=12&search=${selectedCar}`
  );

  return data;
};
