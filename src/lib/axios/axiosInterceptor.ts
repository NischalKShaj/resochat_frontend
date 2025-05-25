// <========================= file to create the axios interceptors =====================>

// importing the required modules
import axios from "axios";

// creating the instance
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// adding the interceptors

// Add auth token to requests
axiosInstance.interceptors.request.use(
  (config) => {
    // Define endpoints that don't need authentication
    const publicEndpoints = ["/user/login", "/user/signup"];

    // Check if the request URL is a public endpoint
    const isPublicEndpoint = publicEndpoints.some((endpoint) =>
      config.url?.includes(endpoint)
    );

    // Only add token for non-public endpoints
    if (!isPublicEndpoint) {
      // Get token from localStorage
      const token = localStorage.getItem("token");
      if (token) {
        // Add token to Authorization header
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response and errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Extract the most useful error information
    let errorMessage = "An unexpected error occurred";
    let statusCode = 500;

    if (error.response) {
      // The server responded with an error status
      statusCode = error.response.status;

      // Try to get a meaningful error message from the response
      if (error.response.data) {
        if (typeof error.response.data === "string") {
          errorMessage = error.response.data;
        } else if (error.response.data.message) {
          errorMessage = error.response.data.message;
        } else if (error.response.data.error) {
          errorMessage = error.response.data.error;
        }
      }
    } else if (error.request) {
      // Request was made but no response received
      errorMessage = "No response received from server";
      statusCode = 0;
    } else {
      // Something happened in setting up the request
      errorMessage = error.message || "Request setup failed";
    }

    // Enhance the error object with useful properties
    const enhancedError = {
      ...error,
      statusCode,
      message: errorMessage,
    };

    return Promise.reject(enhancedError);
  }
);

export default axiosInstance;
