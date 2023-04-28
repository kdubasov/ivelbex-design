import React from 'react';
import "./Preview.css";
import {data} from "./data.js";

const Preview = () => {
    return (
        <div className={"Preview"}>
            <div className="left">
                <h1>
                    Зарабатывайте больше
                    <span>с WELBEX</span>
                </h1>

                <h5>Развиваем и контролируем продажи за вас</h5>
            </div>

            <div className="right">
                <h5>
                    Вместе с
                    <span>бесплатной консультацией</span>
                    мы дарим:
                </h5>

                <div className="blocks-container">
                    {
                        data.map(elem => (
                            <div className={"block"} key={elem.id}>
                                <h4>
                                    <div className="line" />
                                    {elem.title}
                                </h4>
                                <p>{elem.text}</p>
                            </div>
                        ))
                    }
                </div>

                <button>Получить консультацию</button>
            </div>
        </div>
    );
};

export default Preview;
