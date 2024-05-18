import './hotelPage.css';

export const HotelPage = () => {
    return (
        <div>
            <header>
                <div className="logo">
                    <img src="../../assets/img/Escudo.png" alt="KinalStay" />
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Pon tu hotel</a></li>
                        <li><a href="#">Experiencias</a></li>
                        <li><a href="#">Contáctanos</a></li>
                    </ul>
                </nav>
                <div className="user">
                    <a href="#"><img src="user-icon.png" alt="User" /></a>
                </div>
            </header>
            <main>
                <section className="hotel-info">
                    <h1>Barceló Hotel</h1>
                    <p>Ubicado en la costa tropical, el Hotel Sol y Mar ofrece vistas panorámicas al océano, habitaciones decoradas con elegancia y un ambiente relajado. Disfruta de sus playas privadas, piscinas infinitas y gastronomía gourmet en sus restaurantes frente al mar.</p>
                    <div className="images">
                        <img src="image1.jpg" alt="Hotel Image 1" />
                        <img src="image2.jpg" alt="Hotel Image 2" />
                        <img src="image3.jpg" alt="Hotel Image 3" />
                        <img src="image4.jpg" alt="Hotel Image 4" />
                    </div>
                    <div className="buttons">
                        <button className="event-button">Planificar Evento</button>
                        <button className="reserve-button">Reservar</button>
                    </div>
                </section>
            </main>
        </div>
    );
}

//export default HotelPage;
