import axios from "axios";

const BASE_URL = "https://www.dealbuddy.co.nz/api";

export const getData = async (
  url?: string,
  params?: object,
  cityName?: string | null
) => {
  const data = await axios.get(`${BASE_URL}/${url}`, {
    params: {
      ...params,
    },
    headers: {
      City: cityName,
    },
  });

  return data;
};

export const getRelatedProductData = async (params: object) => {
  const data = await axios.get(`${BASE_URL}/deal/similar/deals`, {
    params: {
      ...params,
    },
  });
  return data;
};
