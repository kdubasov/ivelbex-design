import React from 'react';
import "./FooterBottom.css";
import {Link} from "react-router-dom";

const FooterBottom = () => {
    return (
        <footer className={"FooterBottom"}>
            <div className="top-block">

                <div className="left">
                    <div className="about">
                        <h6 className="opac">
                            О компании
                        </h6>
                        <nav>
                            <Link to={"/"}>Партнёрская программа</Link>
                            <Link to={"/"}>Вакансии</Link>
                        </nav>
                    </div>

                    <div className="menu">
                        <h6 className="opac">
                            Меню
                        </h6>
                        <nav>
                            <Link to={"/"}>Расчёт стоимости</Link>
                            <Link to={"/"}>Услуги</Link>
                            <Link to={"/"}>Виджеты</Link>
                            <Link to={"/"}>Интеграции</Link>
                            <Link to={"/"}>Наши клиенты</Link>
                        </nav>
                        <nav>
                            <Link to={"/"}>Кейсы</Link>
                            <Link to={"/"}>Благодарственные письма</Link>
                            <Link to={"/"}>Сертификаты</Link>
                            <Link to={"/"}>Блог на Youtube</Link>
                            <Link to={"/"}>Вопрос / Ответ</Link>
                        </nav>
                    </div>
                </div>

                <div className="right">
                    <h6 className="opac">
                        Контакты
                    </h6>

                    <Link to={"/"}>+7 555 555-55-55</Link>

                    <div className="images">
                        <img src="/tg.svg" alt=""/>
                        <img src="/phone.svg" alt=""/>
                        <img src="/ws.svg" alt=""/>
                    </div>

                    <p>Москва, Путевой проезд 3с1, к 902</p>
                </div>
            </div>

            <div className="bottom-block">
                <div className="content">
                    <p className="opac">©WELBEX 2022. Все права защищены.</p>
                    <Link className="opac" to={"/"}>Политика конфиденциальности</Link>
                </div>
            </div>
        </footer>
    );
};

export default FooterBottom;
