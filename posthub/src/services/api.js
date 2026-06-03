import axios from "axios";

const API = axios.create({
  baseURL: "https://social-hub-5fk0.onrender.com/api",
});
export default API;
