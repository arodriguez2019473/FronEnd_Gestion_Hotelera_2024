import { useState, useEffect } from 'react';
import { getRooms } from '../../services/api';

const useRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const result = await getRooms();
                if (result.error) {
                    setError(result.message);
                } else {
                    setRooms(result.rooms || []);
                }
            } catch (error) {
                setError('Error interno del servidor');
            } finally {
                setLoading(false);
            }
        };

        fetchRooms();
    }, []);

    return { rooms, loading, error };
};

export default useRooms;
