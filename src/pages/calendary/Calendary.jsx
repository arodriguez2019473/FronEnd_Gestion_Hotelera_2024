import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './calendary.css';
import { getEventsByDate } from '../../services/api.jsx'; 

export const Calendary = () => {
    const [fecha, setFecha] = useState(new Date());
    const [eventos, setEventos] = useState([]);

    const onChange = date => {
        setFecha(date);
    };

    const mostrarFecha = async date => {
        const dateString = date.toISOString().split('T')[0]; 
        console.log('Fetching events for date:', dateString);
        const response = await getEventsByDate(dateString);
        console.log('Response from API:', response);
        
        if (response.error) {
            alert(response.message);
        } else {
            const eventosDelDia = response.eventos.filter(evento => {
                const eventoDate = new Date(evento.dateEvent);
                return eventoDate.toISOString().split('T')[0] === dateString;
            });
            setEventos(eventosDelDia); 
        }
    };

    const handleDayClick = async (date) => {
        await mostrarFecha(date);
    };

    return (
        <div className='container-calendary'>
            <div>
                <div className='center'>
                    <DatePicker 
                        className='calendary'
                        selected={fecha} 
                        onChange={onChange} 
                        inline
                        onClickDay={handleDayClick} 
                    />
                    <br />
                    <br />
                    <input 
                        type="button" 
                        value='Mostrar eventos' 
                        className='btn btn-primary' 
                        onClick={() => mostrarFecha(fecha)} 
                    />
                    <br />
                    <br />
                    {eventos.length > 0 ? (
                        <ul>
                            {eventos.map((evento, index) => (
                                <li key={index}>{evento.nameEvent}: {evento.description}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No hay eventos para esta fecha.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Calendary;

// import { getEventsByDate } from '../../services/api.jsx'; 
