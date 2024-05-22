import React from 'react';
import './We.css';
import { Link } from 'react-router-dom';

export const We = () => {
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
                <section className="about-us">
                    <h1>Sobre Nosotros</h1>
                    <p>Bienvenidos a nuestro sitio web de reservas de hoteles. Nuestro objetivo es ofrecerte la 
                        mejor experiencia de búsqueda y reserva de alojamiento, brindándote una amplia variedad de 
                        opciones y un servicio de atención al cliente de primera. Al igual que permitirte volver tu espacio
                        tu propio hotel para que puedas generar un recusro economico extra.</p>
                    <h2>Nuestro Equipo</h2>
                    <div className="team">
                        <div className="team-member">
                            <img src="https://github.com/jjimenez2022152/Laboratorio-2-Api-Mascotas/blob/main/models/xetululYo2.jpg?raw=true" alt="Developer 1" />
                            <h3>José Jiménez-2022152</h3>
                            <p>Desarrollador el cual apoyo en Front-End 
                                y Backe-End, apoyando mayoritariamente en la logica de entidades
                                como el Login y Register, Hoteles, Cuartos, etc</p>
                        </div>
                        <div className="team-member">
                            <img src="https://raw.githubusercontent.com/jjimenez2022152/Laboratorio-2-Api-Mascotas/608298fb82315862189565dad8422e5730f971c2/models/Yhohan.jpeg" alt="Developer 2" />
                            <h3>Yojhan Garcia.</h3>
                            <p>Desarrolladora Back-End especializada en la creación de aplicaciones robustas y escalables,
                                tambien brindo sus conocimientos en el area Front-End como en el apartado de "Reservacion" entre otros.</p>
                        </div>
                        <div className="team-member">
                            <img src="https://raw.githubusercontent.com/jjimenez2022152/Laboratorio-2-Api-Mascotas/732cac938a54834047b394c0010a41fc73f4014f/models/Gary.jpeg" alt="Developer 3" />
                            <h3>Gary Galindo</h3>
                            <p>Programador de alto rendimiento, mayormente orientado a la aprte de Back-End, brindo sus conocimentos emplenado
                                su logica en areas como, "Reseña, Servicios" y su apoyo en Front-End con algunos componentes
                            </p>
                        </div>
                        <div className="team-member">
                            <img src="https://raw.githubusercontent.com/jjimenez2022152/Laboratorio-2-Api-Mascotas/df0062f6a75292eb66cb39992950375a5d4a8091/models/pelos.jpeg" alt="Developer 4" />
                            <h3>Auke Sey</h3>
                            <p>Scrum Master de este proyecto, empleando sus conocimientos sobre esta metodologia para crear la mejor
                                experiencia posible tanto para el equipo de trabajo como los usuarios, dando sus conocimientos en el area de
                                Front-End
                            </p>
                        </div>
                        <div className="team-member">
                            <img src="https://raw.githubusercontent.com/jjimenez2022152/Laboratorio-2-Api-Mascotas/df0062f6a75292eb66cb39992950375a5d4a8091/models/herlin.jpg" alt="Developer 5" />
                            <h3>Herlin Gomez</h3>
                            <p>Gran diseñador, el cual implmenta muy bien caracteristicas para que el usuario se sienta comodo
                                con el uso del aplicativo, brindo suapoyo con css y muchos mas apartados del lado Front-End.
                            </p>
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
