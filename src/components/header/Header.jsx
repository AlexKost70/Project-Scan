import React from "react";
import logo from "./header-logo.svg";
import loading from "./loading.svg";
import mobileLogo from "./../footer/footer-logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header>
            <div className="wrapper">
                <img src={logo} alt="Логотип компании СКАН" />
                <div className="right-side">
                    <nav class="hide-mobile">
                        <Link to="/">Главная</Link>
                        <a href="#">Тарифы</a>
                        <a href="#">FAQ</a>
                    </nav>
                    { true ?
                        (
                        <div className="profile hide-mobile">
                            <a href="#" className="signup">Зарегистрироваться</a>
                            <span className="divider"></span>
                            <Link to="/login">Войти</Link>
                        </div>
                        ) :
                        (
                        <div className="profile profile-signedup">
                            <div className="stats">
                                <p>Использовано компаний <span>34</span></p>
                                <p>Лимит по компаниям <span>100</span></p>
                                {/* <img src={loading} /> */}
                            </div>
                            <div className="info hide-mobile">
                                <div>
                                    <p>Алексей А.</p>
                                    <a href="#">Выйти</a>
                                </div>
                                <img src="./userpic.png" alt="Фото профиля" />
                            </div>
                        </div>
                        )
                    }
                </div>
                <input id="menu-toggle" type="checkbox" />
                <label class="menu-button-container" for="menu-toggle">
                    <div class='menu-button'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </label>
                <div class="menu">
                    <div className="menu-header">
                        <img src={mobileLogo} alt="" />
                        <label class="menu-button-container" for="menu-toggle">
                            <div class='menu-button'>
                                <span></span>
                                <span></span>
                            </div>
                        </label>
                    </div>
                    <nav className="menu-nav">
                        <ul>
                            <li><Link to="/">Главная</Link></li>
                            <li><a href="">Тарифы</a></li>
                            <li><a href="">FAQ</a></li>
                        </ul>
                    </nav>
                    <div className="menu-profile">
                        { false ? 
                            (
                                <div className="profile-mobile">
                                    <a href="#">Зарегистрироваться</a>
                                    <Link to="/login" className="signin">Войти</Link>
                                </div>
                            ) :
                            (
                                <div className="profile-mobile">
                                    <div className="info">
                                        <div>
                                            <p>Алексей А.</p>
                                            <a href="#">Выйти</a>
                                        </div>
                                        <img src="./userpic.png" alt="Фото профиля" />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}