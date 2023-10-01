import axios from "axios";

export const getUser = async (input) => {
  const request = await axios.get(`https://api.github.com/users/${input}`);
  return request;
};
