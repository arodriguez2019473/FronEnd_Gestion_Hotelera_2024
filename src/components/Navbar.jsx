import { useNavigate } from "react-router-dom";
import './css/Navbar.css';
import logoImg from "../assets/img/Logo.png";
import routes from "../routes";

export const Navbar = () => {
    const navigate = useNavigate();

    const handleNavigateAboutOut = () => {
        navigate('/we'); 
    };

    const handleNavigateLogin = () => {
        navigate('/auth');
    };

    const handleNavigateHoteles = () => {
        navigate('/hoteles');
    };

    return (
        <div className="nav-container">
            <img src={logoImg} alt="Logo" className="logo"/>
            <button className='nav-button' onClick={handleNavigateAboutOut}>About Us</button>
            <button className='nav-button' onClick={handleNavigateLogin}>Login</button>
            <button className='nav-button' onClick={handleNavigateHoteles}>Hoteles</button>
        </div>
    );
}
