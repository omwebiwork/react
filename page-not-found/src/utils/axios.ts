import axios from "axios";
import { API_BASE_URL } from "./config";

const Instance = axios?.create({
    baseURL: API_BASE_URL, // Replace with your actual API
    timeout: 10000,
});

Instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token"); // or use cookies or context
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

Instance.interceptors.response.use(
    (response) => {
        // You can modify the response here if needed
        return response;
    },
    (error) => {
        // Example: Token expired or unauthorized
        if (error.response?.status === 401) {
            // e.g., logout(), navigate('/login')
        }

        return Promise.reject(error);
    }
);

export default Instance;
