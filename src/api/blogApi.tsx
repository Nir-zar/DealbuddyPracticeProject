import axios from "axios";





const BASE_URL = import.meta.env.VITE_RAPID_BASE_URL
const url = "blog?v=1705410150066&where%5Bstatus%5D=active&where%5BisShowOnHome%5D=true&take=999";

export const getBlogData = async () =>
{
   const data = await axios.get(`${BASE_URL}/${url}`);
    return data;
}