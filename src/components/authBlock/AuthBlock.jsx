import React from "react"
import "./AuthBlock.css";
import Title from "../title/Title";
import image from "./authblock.png";
import Button from "../button/Button";
import lockImg from "./lock.svg";
import googleLogo from "./google.png";
import facebookLogo from "./facebook.png";
import yandexLogo from "./yandex.png";

export default function AuthBlock(props) {
    return(
        <main className="authpage">
            <div className="wrapper">
                <div className="left-side">
                    <Title 
                        type="h1" 
                        fontSize="40px" 
                        lineHeight="48px" 
                    >Для оформления подписки на тариф, необходимо авторизоваться.</Title>
                    <img src={image} alt="Изображение для страницы авторизации" />
                </div>
                <Title 
                        type="h1" 
                        fontSize="40px" 
                        lineHeight="48px" 
                    >Для оформления подписки<br /> на тариф, необходимо авторизоваться.</Title>
                <form action="">
                    <div className="decor">
                        <img src={lockImg} alt="" className="lock" />
                    </div>
                    <div className="tabs">
                        <a href="#" className="tab tab-active">Войти</a>
                        <a href="#" className="tab">Зарегистрироваться</a>
                    </div>
                    <label htmlFor="login">
                        Логин или номер телефона:
                        <input type="tel" name="login" id="login" required />
                    </label>
                    <label htmlFor="password">
                        Пароль:
                        <input type="password" name="password" id="password" required />
                    </label>
                    <Button
                        type="submit"
                        stylization="primary"
                        disabled={true}
                    >Войти</Button>
                    <a href="#" className="recovery">Восстановить пароль</a>
                    <div className="loginwith">
                        <p>Войти через:</p>
                        <div className="services">
                            <a href="#"><img src={googleLogo} alt="" /></a>
                            <a href="#"><img src={facebookLogo} alt="" /></a>
                            <a href="#"><img src={yandexLogo} alt="" /></a>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}