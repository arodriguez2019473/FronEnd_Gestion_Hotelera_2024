import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { agregarReserva as agregarReservaRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useReservation = () => {
    const [isLoading, setIsLoading] = useState(false); 

    const navigate = useNavigate();

    const addReservation = async (dateStart, dateFinish, huespedes, listService) => {
        setIsLoading(true);

        try {
            const response = await agregarReservaRequest({
                dateStart,
                dateFinish,
                huespedes,
                listService
            });

            setIsLoading(false);

            if (response.error) {
                return toast.error(
                    response.message || 'Ocurrió un error al guardar la reservación'
                );
            }

            toast.success('Reservación guardada con éxito');
            navigate('/');
        } catch (error) {
            setIsLoading(false);
            console.error('Error al agregar reservación:', error.message);
            toast.error('Ocurrió un error al guardar la reservación');
        }
    };

    return {
        addReservation,
        isLoading
    };
};