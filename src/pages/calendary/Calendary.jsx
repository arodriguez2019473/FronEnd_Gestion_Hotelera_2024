import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import './calendary.css';

export const Calendary = () => {
    // Inicializa la fecha con la fecha actual
    const [fecha, setFecha] = useState(new Date());

    const onChange = date => {
        setFecha(date);
    };

    const mostrarFecha = date => {
        alert(date);
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
                    />
                    <br />
                    <br />
                    <input 
                        type="button" 
                        value='Mostrar fecha' 
                        className='btn btn-primary' 
                        onClick={() => mostrarFecha(fecha)} 
                    />
                </div>
            </div>
        </div>
    );
};

export default Calendary;
