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
            try {
                const token = JSON.parse(userDetails).token
                config.headers.Authorization = `Bearer ${token}`
            } catch(error) {
                console.log('error getting user from localStorage', error);
            }
            
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
    console.log('register')
    try {
        return await apiClient.post('/auth/signUp', {
            correo: data.correo,
            password: data.password,
            nombre: data.username,
        })
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
        console.log('getHotels - response', response);
        console.log('getHotels - response data', response.data);
        return response.data;
    } catch (error) {
        console.log('error', error)
        if (error.response) {
            console.log('getHotels - error response', error.response);
            return {
                error: true,
                message: error.response.data.message || 'Error al obtener los hoteles'
            };
        } else if (error.request) {
            console.log('getHotels - error request', error.request);
            return {
                error: true,
                message: 'No se recibió respuesta del servidor'
            };
        } else {
            console.log('getHotels - error message', error.message);
            return {
                error: true,
                message: error.message || 'Error al realizar la solicitud'
            };
        }
    }
};


export const getRooms = async (hotelId) => {
    console.log(hotelId)
    try {
        const response = await apiClient.get(`/room/rooms/${hotelId}`);
        return response.data;
    } catch (error) {
        return { error: true, message: error.message };
    }
};

export const getEventsByDate = async (date) => {
    try {
        const response = await apiClient.get('/event', {
            params: { date }
        });
        return response.data;
    } catch (error) {
        return { error: true, message: error.message };
    }
};
