// Handles communication with backend via Axios or Fetch.
import axios from "axios";

const api = axios.create({
    baseURL: "http://backend:8000", // Use "backend" when inside Docker Compose
});

export default api;
