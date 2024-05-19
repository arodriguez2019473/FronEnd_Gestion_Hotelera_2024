import React from 'react';
import './hotelPage.css';
import useHotels from '../../shared/hooks/useHotel';

import {useState, useEffect} from "react";
export const HotelPage = () => {
    const { hotels, loading, error } = useHotels();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading hotels: {error.message}</p>;


        
    return (
        <div>
            <header>
                <nav className='navContainter'> 
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Pon tu hotel</a></li>
                        <li><a href="#">Experiencias</a></li>
                        <li><a href="#">Contáctanos</a></li>
                    </ul>
                </nav>
                <div className="user">
                    <img src="./1.jpg" alt="User" />
                </div>
            </header>
            <main>
                <section className="hotel-info">
                    <h1>Hoteles Disponibles</h1>
                    <div className="images">
                        {hotels.length > 0 ? (
                            hotels.map(hotel => (
                                <div key={hotel.uid} className="hotel-item">
                                    <h2>{hotel.nameHotel}</h2>
                                    <p>{hotel.address}</p>
                                    <p>{hotel.description}</p>
                                </div>
                            ))
                        ) : (
                            <p>No hotels available</p>
                        )}
                    </div>
                    <div className="buttons">
                        <button className="event-button">Planificar Evento</button>
                        <button className="reserve-button">Reservar</button>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default HotelPage;
