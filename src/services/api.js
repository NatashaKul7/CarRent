import axios from "axios";

axios.defaults.baseURL = `https://65ccb0d7dd519126b83f48a1.mockapi.io/api/v1`;

export const fetchCatalog = async (page = 1) => {
  const { data } = await axios.get(`/adverts?p=${page}&l=12`);
  return data;
};

// export const fetchCatalog = async () => {
//   const { data } = await axios.get(`/adverts`);
//   return data;
// };
