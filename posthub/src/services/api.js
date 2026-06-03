import axios from "axios";

const API = axios.create({
  console.log("API URL =", process.env.REACT_APP_API_URL);
});
export default API;
