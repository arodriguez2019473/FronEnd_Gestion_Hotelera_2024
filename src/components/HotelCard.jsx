import React from 'react';
import './css/HotelCard.css';

const HotelCard = ({ nameHotel, address, description, imagen }) => {
    return (
        <div className="hotel-card">
            <img src={imagen} alt={`${nameHotel}`} className="hotel-image" />
            <div className="hotel-info">
                <h2 className="hotel-name">{nameHotel}</h2>
                <p className="hotel-address">{address}</p>
                <p className="hotel-description">{description}</p>
            </div>
        </div>
    );
};

export default HotelCard;
