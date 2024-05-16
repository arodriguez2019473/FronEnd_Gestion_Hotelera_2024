import { useNavigate } from "react-router-dom";
import './css/Navbar.css'
import logoImg from "../assets/img/Logo.png";

export const Navbar = () => {

    const navigate = useNavigate()

    const handleNavigateAboutOut = () => {
        navigate('/we')
    }

    const handleNavigateLogin = () => {
        console.log('/auth')
        navigate('/auth')
    }

    return(
        <div className="nav-container">
            <img src={logoImg} alt="" className="logo"/>
            <button className='nav-button' text='' onClick={handleNavigateAboutOut}>about us</button>
            <button className='nav-button' text='' onClick={handleNavigateLogin}>Login</button>
        </div>
    )
}