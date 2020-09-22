import React from 'react';
import tooth from './img/tooth.png';
import connections from './img/connections.jpg';
import Roman from './img/Roman.jpg';
import mail from './img/mail.jpg';

const App = () => {
    return (
        <>
            <header className="header">
                <img className="logo" src={tooth} />
                <h1>Cтоматологія в CityCentre</h1>
            </header>

            <div className="connections-shedule">
                <div className="connections">
                    <span>Консультація та запис на прийом:</span>
                    <div className='connections-container'>
                        <a title="Telegram" href="tg://resolve?domain=@RomanM1989">
                            <img className="connections__img"
                                src={connections} alt="images"
                            />
                        </a>
                        <a className="connections__phone" href="tel:+380937357835">+38093 735 78 35 - Роман</a>
                    </div>

                </div>

                <div className="shedule">
                    <span className="shedule__header">Працюємо:</span>
                    <span className="shedule__text">ПН-ПТ з 10:00 до 18:00, СБ з 11:00 до 15:00</span>
                    <span className="necessary">При необхідності, можливий запис на інші години, обговорюєтся індивідуально.</span>
                </div>
            </div>
            <span>Адреса: м. Стрий, вулиця Поштова 16, кабінет 1</span>
            <hr />
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.9327594157767!2d23.851860815688607!3d49.258720379328764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473a69f5e25db0a7%3A0xae10aef16ebb5fb7!2z0LLRg9C70LjRhtGPINCf0L7RiNGC0L7QstCwLCAxNiwg0KHRgtGA0LjQuSwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA4MjQwMA!5e0!3m2!1suk!2sua!4v1600612802336!5m2!1suk!2sua"
                width="80%" height="350" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false"
            ></iframe>
            <hr />
            <div className="about">
                <span className="about__header">Лікарі:</span>
                <div className="doctors">
                    <div className="photo">
                        <img className="photo__img" src={Roman} alt="photo" />
                        <span className="photo__text">Марченко Роман Олегович, лікар-стоматолог з 2012 року.</span>
                    </div>
                    <div className="photo">
                        <img className="photo__img" src={tooth} alt="photo" />
                        <span className="photo__text">Марченко Наталія Іванівна, зубний лікар з 1986 року.</span>
                    </div>
                </div>
                <span>Виконуємо широкий спектр якісних стоматологічних послуг за доступними цінами. Із запитаннями звертайтесь, будь ласка, у зручний для вас спосіб :)</span>
            </div>
            <hr />
            <footer>
                <div className="container">
                    <img className="footer-img" src={mail} alt="image" />
                    <a className="footer-text" href="mailto:stryidentistry@gmail.com">stryidentistry@gmail.com</a>
                </div>
            </footer>

        </>
    )
}

export default App;