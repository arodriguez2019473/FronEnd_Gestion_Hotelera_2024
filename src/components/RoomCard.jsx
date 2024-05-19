import React from 'react';
import './css/RoomCard.css';

const RoomCard = ({ hotel, address, description, peopleCapacity, priceRoom, typeRoom }) => {

    console.log(priceRoom);
    const verMas = () => {
        console.log('hi');
    };

    return (
        <div className="room-card">
            <div className="room-info">
                <h2 className="room-name">{hotel}</h2>
                <p className="room-address">{address}</p>
                <p className="room-description">{description}</p>
                <p className="room-people-capacity">Capacidad: {peopleCapacity} personas</p>
                <p className="room-price">Precio: ${priceRoom} por noche</p>
                <p className="room-type">Tipo: {typeRoom}</p>
                <button onClick={verMas} className='detalles'>Ver detalles</button>
            </div>
        </div>
    );
};

export default RoomCard;
