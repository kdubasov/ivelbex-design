import React from 'react';
import {Container} from "react-bootstrap";
import NavbarTop from "./components/NavbarTop/NavbarTop.jsx";
import Preview from "./components/Preview/Preview.jsx";
import FooterBottom from "./components/FooterBottom/FooterBottom.jsx";


const App = () => {
    return (
        <div className={"App"}>
            <img className={"bgImg purpleBall"} src="/bg/purpleBall.svg" alt=""/>
            <img className={"bgImg purpleLight"} src="/bg/purpleLight.svg" alt=""/>
            <img className={"bgImg redBall"} src="/bg/redBall.svg" alt=""/>
            <img className={"bgImg redBallSecond"} src="/bg/redBall2.svg" alt=""/>
            <img className={"bgImg redLight"} src="/bg/redLight.svg" alt=""/>
            <img className={"bgImg purpleLightRight"} src="/bg/purpleLightRight.svg" alt=""/>

            <Container className={"containerMain"}>
                <NavbarTop />
                <Preview />
                <FooterBottom />
            </Container>
        </div>
    );
};

export default App;
