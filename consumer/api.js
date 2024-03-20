import axios from "axios";

const getToken = async () => {
  const payload = { email: "marcell@gmail.com" };
  const { data } = await axios.post("http://localhost:3000/token", payload);
  return data;
};

export const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});
