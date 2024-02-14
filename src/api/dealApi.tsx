import { PanoramaFishEyeSharp } from "@mui/icons-material";
import axios, { CancelToken } from "axios";

interface Params {
  searchKeyword: string;
}

interface CancelToken {
    token : object
}

const BASE_URL = "http://localhost:3000/api";

export const dealsApiData = async (cancelTokenSource:CancelToken,params?: Params,) => {

    
  const data = await axios.get(`${BASE_URL}/deal/deals`, {
    params: {
      ...params,
    },
    cancelToken: cancelTokenSource.token,
  });
  return data;
};

export const dealInDetailApiData = async (dealName: string) => {
  const data = await axios.get(`${BASE_URL}/deal/slug-or-id/${dealName}`);
  return data;
};
