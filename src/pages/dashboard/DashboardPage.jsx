import './dashboardPage.css';
import imagenCiudad from '../../assets/img/ciudad.jpg';
import imageEdificios from '../../assets/img/hotel-7885138_1280.jpg';
import imagenHAbitacion from '../../assets/img/habitacion.jpg'
import imagenBahia from '../../assets/img/Bahia.jpg'
import imagenCampo from '../../assets/img/campo-mobile.jpg'
import { Navbar } from '../../components/Navbar';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const DashboardPage = () => {

    const [userEmail, setUserEmail] = useState("");

    const location = useLocation();
    console.log('usuario',userEmail)
    useEffect(() => {
        const { state } = location;
        if (state && state.email) {
            setUserEmail(state.email);
        } else {
            const storedEmail = localStorage.getItem('userEmail');
            if (storedEmail) {
                setUserEmail(storedEmail);
            }
        }
    }, [location]);

    console.log('usuario',userEmail)

    return (
        <div className="dashboard-container">
            <Navbar userEmail={userEmail} />
            <ul>
                <li>
                    <img src={imagenCiudad} alt="" />
                </li>
                <li>
                    <img src={imageEdificios} alt="" />
                </li>
                <li>
                    <img src={imagenHAbitacion} alt="" />
                </li>
                <li>
                    <img src={imagenBahia} alt="" />
                </li>
                <li>
                    <img src={imagenCampo} alt="" />
                </li>
            </ul>
        </div>
    )
}

export default DashboardPage;