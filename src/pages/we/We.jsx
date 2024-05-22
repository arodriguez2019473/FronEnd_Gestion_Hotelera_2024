import React from 'react';
import './aboutUsPage.css';

export const We = () => {
    return (
        <div>
            <header>
                <nav className='navContainer'> 
                    <ul>
                        <li><a href="#">Home</a></li>
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
                <section className="about-us">
                    <h1>Sobre Nosotros</h1>
                    <p>Bienvenidos a nuestro sitio web de reservas de hoteles. Nuestro objetivo es ofrecerte la mejor experiencia de búsqueda y reserva de alojamiento, brindándote una amplia variedad de opciones y un servicio de atención al cliente de primera.</p>
                    <h2>Nuestro Equipo</h2>
                    <div className="team">
                        <div className="team-member">
                            <img src="./developer1.jpg" alt="Developer 1" />
                            <h3>Juan Pérez</h3>
                            <p>Desarrollador Front-End apasionado por crear interfaces de usuario intuitivas y atractivas.</p>
                        </div>
                        <div className="team-member">
                            <img src="./developer2.jpg" alt="Developer 2" />
                            <h3>María García</h3>
                            <p>Desarrolladora Back-End especializada en la creación de aplicaciones robustas y escalables.</p>
                        </div>
                        <div className="team-member">
                            <img src="./developer3.jpg" alt="Developer 3" />
                            <h3>Carlos López</h3>
                            <p>Diseñador UX/UI enfocado en mejorar la experiencia del usuario a través de diseños efectivos y atractivos.</p>
                        </div>
                    </div>
                    <h2>Nuestra Misión</h2>
                    <p>Nuestra misión es facilitar el proceso de búsqueda y reserva de hoteles, asegurándonos de que cada usuario encuentre el alojamiento perfecto para sus necesidades. Nos esforzamos por ofrecer una plataforma segura, rápida y fácil de usar.</p>
                    <h2>Contacto</h2>
                    <p>Si tienes alguna pregunta o necesitas asistencia, no dudes en <a href="#">contactarnos</a>. Estamos aquí para ayudarte.</p>
                </section>
            </main>
        </div>
    );
}

export default We;
