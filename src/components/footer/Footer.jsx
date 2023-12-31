import React from "react";
import logo from "./footer-logo.svg";
import "./Footer.css";

export default function Footer() {
    return(
        <footer>
            <div className="wrapper">
                <img src={logo} alt="Логотип компании СКАН" />
                <div className="right-side">
                    <address>
                        г. Москва, Цветной б-р, 40 <br />
                        <a href="tel:+74957712111">+7 495 771 21 11</a><br />
                        <a href="mailto:info@skan.ru">info@skan.ru</a>
                    </address>
                    <p>Copyright. 2023</p>
                </div>
            </div>
        </footer>
    )
}