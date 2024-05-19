import axios from "axios";
//import { logout } from "../shared/hooks";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/gestorHoteles/v1',
    timeout: 5000
})


apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem('user')

        if (userDetails) {
            const token = JSON.parse(userDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (e) => {
        return Promise.reject(e)
    }
)

export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const register = async (data) => {
    try {
        return await apiClient.post('/auth/register', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getHotels = async () => {
    try {
        const response = await apiClient.get('/hotel/');
        return response.data;
    } catch (e) {
        return {
            error: true,   
            e
        };
    }
};
