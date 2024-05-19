import React from 'react';
import './hotelPage.css';
import useHotels from '../../shared/hooks/useHotel';
import HotelCard from '../../components/HotelCard';
import SearchBar from '../../components/SearchBar';
import {useState, useEffect} from "react";
export const HotelPage = () => {
    const { hotels, loading, error } = useHotels();
    const [filteredHotels, setFilteredHotels] = useState([]);


    const handleSearch = (searchTerm) => {
        if (searchTerm.trim() === '') {
            setFilteredHotels(hotels);
        } else {
            const filtered = hotels.filter(hotel =>
                hotel.nameHotel.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredHotels(filtered);
        }
    };

    useEffect(() => {
        if (hotels.length > 0) {
            setFilteredHotels(hotels);
        }
    }, [hotels]);

    
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
                    <SearchBar onSearch={handleSearch} />
                    <div className="images">
                    <div className="hotel-list">
                        {filteredHotels.length > 0 ? (
                            filteredHotels.map(hotel => (
                                <HotelCard
                                    key={hotel._id}
                                    hotelId={hotel._id}
                                    nameHotel={hotel.nameHotel}
                                    address={hotel.address}
                                    description={hotel.description}
                                />
                            ))
                        ) : (
                            <p>No hotels available</p>
                        )}
                    </div>
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
