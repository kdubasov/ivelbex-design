import React from 'react';
import "./NavbarTop.css";
import {data} from "./data.js";
import {Link} from "react-router-dom";


const NavbarTop = () => {
    return (
        <div className={"NavbarTop"}>
            <div className="left">
                <div className={"logo"}>
                    <img src="/logo.svg" alt="logo"/>
                    <p className="small">
                        крупный интегратор CRM в Росcии и ещё 8 странах
                    </p>
                </div>

                <nav>
                    {
                        data.map(link => (
                            <Link key={link.id} to={link.link}>
                                {link.text}
                            </Link>
                        ))
                    }
                </nav>
            </div>

            <div className="contacts">
                <h6>+7 555 555-55-55</h6>
                <img src="/tg.svg" alt=""/>
                <img src="/phone.svg" alt=""/>
                <img src="/ws.svg" alt=""/>
            </div>
        </div>
    );
};

export default NavbarTop;
