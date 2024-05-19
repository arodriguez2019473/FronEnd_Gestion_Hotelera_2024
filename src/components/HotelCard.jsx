import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/HotelCard.css';

const HotelCard = ({hotelId, nameHotel, address, description }) => {

    const navigate = useNavigate();

    const handleDetailsClick = () => {
        console.log('hotel',hotelId)
        navigate(`/room/rooms/${hotelId}`);
    };

    return (
        <div className="hotel-card">
            <div className="hotel-info">
                <h2 className="hotel-name">{nameHotel}</h2>
                <p className="hotel-address">{address}</p>
                <p className="hotel-description">{description}</p>
                <button onClick={handleDetailsClick} className='detalles'>Ver detalles</button>
            </div>
        </div>
    );
};

export default HotelCard;
