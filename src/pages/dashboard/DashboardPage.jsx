import './dashboardPage.css';
import imagenCiudad from '../../assets/img/ciudad.jpg';
import imageEdificios from '../../assets/img/hotel-7885138_1280.jpg';
import imagenHAbitacion from '../../assets/img/habitacion.jpg'
import imagenBahia from '../../assets/img/Bahia.jpg'
import imagenCampo from '../../assets/img/campo-mobile.jpg'

export const DashboardPage = () => {
    return (
        <div className="dashboard-container">
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
