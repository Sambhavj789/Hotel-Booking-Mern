import axios from "axios";
const baseURL = "http://localhost:4400/api/v1"
const api = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    headers: { "Content-Type": "application/json" }
})

export default api;
// npm i axios
