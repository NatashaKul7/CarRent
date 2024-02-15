import axios from "axios";

axios.defaults.baseURL = `https://65ccb0d7dd519126b83f48a1.mockapi.io/api/v1`;

export const fetchCatalog = async () => {
  const { data } = await axios.get(`/adverts`);
  return data;
};
