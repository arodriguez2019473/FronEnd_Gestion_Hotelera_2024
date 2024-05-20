import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRooms } from '../../services/api';
import './RoomPage.css';
import RoomCard from '../../components/RoomCard';

const RoomPage = () => {
    const { hotelId } = useParams();
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log('Fetching rooms for hotel:', hotelId);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const result = await getRooms(hotelId);
                console.log('API result:', result);
                if (result.error) {
                    setError(result.message);
                } else {
                    setRooms(result.rooms || []);
                    console.log('Rooms set:', result.rooms || []);
                }
            } catch (error) {
                console.error('Error fetching rooms:', error);
                setError('Error interno del servidor');
            } finally {
                setLoading(false);
            }
        };

        fetchRooms();
    }, [hotelId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (rooms.length === 0) return <p>No hay habitaciones disponibles para este hotel.</p>;

    return (
        <div>
            <header>
                <nav className='navContainer'>
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
                <section className="room-info">
                    <h1>Rooms For This Hotel</h1>
                    <div className="room-list">
                    {rooms.map(room => (
                            <RoomCard
                                key={room._id}
                                hotelId={room.hotel}
                                imgUrl={room.imgUrl}
                                address={room.address}
                                description={room.description}
                                peopleCapacity={room.peopleCapacity}
                                priceRoom={room.priceRoom}
                                typeRoom={room.typeRoom}
                            />
                        ))}

                    </div>
                </section>
            </main>
        </div>
    );
};

export default RoomPage;
