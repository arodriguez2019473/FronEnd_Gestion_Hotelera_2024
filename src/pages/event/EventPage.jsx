import React from 'react';
import useEvents from '../../shared/hooks/useEvent';
import EventCard from '../../components/EventCard';

const EventPage = () => {
    const { events, loading, error } = useEvents();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading events: {error.message}</p>;

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
                <section className="event-info">
                    <h1>Eventos Disponibles</h1>
                    <div className="event-list">
                        {events.length > 0 ? (
                            events.map(event => (
                                <EventCard
                                    key={event._id}
                                    eventId={event._id}
                                    nameEvent={event.nameEvent}
                                    description={event.description}
                                    dateEvent={event.dateEvent}
                                />
                            ))
                        ) : (
                            <p>No events available</p>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default EventPage;
