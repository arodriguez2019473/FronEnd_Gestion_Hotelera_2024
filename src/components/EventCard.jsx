import React from 'react';
import '../pages/event/EventPage.jsx';

const EventCard = ({ eventId, nameEvent, description, dateEvent }) => {
    return (
        <div className="event-card">
            <h2>{nameEvent}</h2>
            <p>{description}</p>
            <p>{new Date(dateEvent).toLocaleDateString()}</p>
        </div>
    );
};

export default EventCard;
