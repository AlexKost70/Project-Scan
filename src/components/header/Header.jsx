import React from "react";
import logo from "./header-logo.svg";
import loading from "./loading.svg";
import "./Header.css";

export default function Header() {
    return(
        <div className="wrapper">
            <header>
                <img src={logo} />
                <div className="right-side">
                    <nav>
                        <a href="#">Главная</a>
                        <a href="#">Тарифы</a>
                        <a href="#">FAQ</a>
                    </nav>
                    { false ?
                        (
                        <div className="profile">
                            <a href="#" className="signup">Зарегистрироваться</a>
                            <span className="divider"></span>
                            <a href="#" className="signin">Войти</a>
                        </div>
                        ) :
                        (
                        <div className="profile profile-signedup">
                            <div className="stats">
                                <p>Использовано компаний <span>34</span></p>
                                <p>Лимит по компаниям <span>100</span></p>
                                {/* <img src={loading} /> */}
                            </div>
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
            </header>
        </div>
    )
}