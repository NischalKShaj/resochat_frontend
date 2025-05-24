// <========================= file to create the axios interceptors =====================>

// importing the required modules
import axios from "axios";

// creating the instance
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// adding the interceptors

// add the token to the request and find the proper error messages and status
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    throw error;
  }
);

export default axiosInstance;
