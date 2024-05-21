import { useState, useEffect } from 'react';
import { getHotels } from '../../services/api';

const useHotel = () => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHotels = async () => {
            const result = await getHotels();
            if (result.error) {
                setError(result.e);
                setLoading(false);
            } else {
                setHotels(result.hoteles || []);
                setLoading(false);
                console.log('Hoteles obtenidos con éxito:', result.hoteles);
            }
        };

        fetchHotels();
    }, []);

    return { hotels, loading, error };
};

export default useHotel;
