import axios from "axios";

export const search = async (searchTerm) => {
  const url = `${process.env.API_BASE_URL}/?s=${searchTerm}&apikey=${process.env.API_KEY}`;
  const response = await axios.get(url);
  return response.data;
}