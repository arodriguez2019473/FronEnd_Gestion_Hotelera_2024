import logo from '../assets/img/Escudo.svg'

export const Logo = ({ text }) => {
    return (
        <div className='auth-form-logo-container'>
            <img src={logo} alt="Escudo" />
            <span>{text}</span>
        </div>
    )
}