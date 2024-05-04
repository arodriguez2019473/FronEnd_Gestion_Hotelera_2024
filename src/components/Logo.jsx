import logo from '../assets/img/Logo.png'
import '../pages/auth/authPage.css'

export const Logo = ({ text }) => {
    return (
        <div className='auth-form-logo-container'>
            <img src={logo} alt="Logo" />
            <span>{text}</span>
        </div>
    )
}