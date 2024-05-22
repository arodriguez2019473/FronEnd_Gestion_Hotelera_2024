import React, { useEffect, useState } from 'react';
import './Grafica.css';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Grafica = () => {
    const [data, setData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/gestorHoteles/v1/grafica');
            const result = await response.json();

            const labels = result.map(room => room.description);
            const reservationCounts = result.map(room => room.reservationCount);

            setData({
                labels,
                datasets: [
                    {
                        label: 'Reservas por habitación',
                        data: reservationCounts,
                        backgroundColor: 'rgba(75, 192, 192, 0.5)'
                    }
                ]
            });
        };

        fetchData();
    }, []);

    return (
        <div>
            <header>
                <nav className='navContainer'> 
                    <ul>
                        <li><Link to="/">Home</Link></li>
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
                <section className="graphs">
                    <h1>Estadísticas de Reservas</h1>
                    <div className="chart-container">
                        <Bar data={data} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Reservas por Habitación' } } }} />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Grafica;
