import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './css/RoomCard.css';
import {Reservation} from '../pages/reservation/Reservation.jsx'
const RoomCard = ({ hotel, imgUrl, address, description, peopleCapacity, priceRoom, typeRoom }) => {
    const [showAddReservation, setShowAddReservation] = useState(false);
    const navigate = useNavigate();

    const handleToggleAddReservation = () => {
        setShowAddReservation(!showAddReservation); 
    };

    return (
        <div className="room-card">
            <div className="room-info">
                <div className="image-container">
                    <img src={imgUrl} alt={`${address}`} className="room-image" />
                </div>
                <h2 className="room-name">{hotel}</h2>
                <p className="room-address">{address}</p>
                <p className="room-description">{description}</p>
                <p className="room-people-capacity">Capacidad: {peopleCapacity} personas</p>
                <p className="room-price">Precio: ${priceRoom} por noche</p>
                <p className="room-type">Tipo: {typeRoom}</p>
                {!showAddReservation && (
                    <button className="add-task-btn" onClick={handleToggleAddReservation}>
                        Agregar reserva
                    </button>
                )}
                {showAddReservation && (
                    <div>
                        <Reservation/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RoomCard;
