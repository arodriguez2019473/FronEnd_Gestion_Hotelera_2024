import axios from "axios";
//import { logout } from "../shared/hooks";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/gestorHoteles/v1',
    timeout: 5000
});

apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem('user');
        if (userDetails) {
            const token = JSON.parse(userDetails).token;
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (e) => {
        return Promise.reject(e);
    }
);

export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login', data);
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

export const register = async (data) => {
    try {
        return await apiClient.post('/auth/register', data);
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

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

export const getRooms = async (hotelId) => {
    console.log(hotelId);
    try {
        const response = await apiClient.get(`/room/rooms/${hotelId}`);
        return response.data;
    } catch (error) {
        return { error: true, message: error.message };
    }
};

export const getEvents = async () => {
    try {
        const response = await apiClient.get('/events');
        return response.data;
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

export const getEventById = async (eventId) => {
    try {
        const response = await apiClient.get(`/events/${eventId}`);
        return response.data;
    } catch (e) {
        return {
            error: true,
            e
        };
    }
};

