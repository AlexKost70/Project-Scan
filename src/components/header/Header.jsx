import React, { useEffect, useState, useRef } from "react";
import { useContext } from "react";
import { AuthContext } from "../../hoc/AuthProvider";
import axios from "../../api/axios";
import logo from "./header-logo.svg";
import loading from "./loading.svg";
import mobileLogo from "./../footer/footer-logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
    const { auth, setAuth } = useContext(AuthContext);
    const mobileMenuCheckbox = useRef();

    const [login, setLogin] = useState(true);
    const [data, setData] = useState(false);
    const [companyCount, setCompanyCount] = useState(0);
    const [companyLimit, setCompanyLimit] = useState(0);

    const logout = (e) => {
        e.preventDefault();
        setAuth({});
        localStorage.removeItem("login");
        localStorage.removeItem("token");
        localStorage.removeItem("expire");
    }

    const getBalance = async () => {
        const LOGIN_URL = "/account/info";
        try {
            const response = await axios.get(LOGIN_URL);
            setCompanyCount(response?.data?.eventFiltersInfo.usedCompanyCount);
            setCompanyLimit(response?.data?.eventFiltersInfo.companyLimit);
            return true;
        } catch (err) {
            return false;
        }
    }

    const closeMobileMenu = (e) => {
        e.preventDefault();
        mobileMenuCheckbox.current.checked = false;
    }

    useEffect(() => {
        if(auth.login) {
            setLogin(true);
            if(getBalance()) {
                setData(true);
            }
        } else {
            setLogin(false);
        }
    })

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
                    { !login ?
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
                                {
                                    data ? 
                                    <React.Fragment>
                                        <p>Использовано компаний <span>{companyCount}</span></p>
                                        <p>Лимит по компаниям <span>{companyLimit}</span></p>
                                    </React.Fragment> :
                                    <img src={loading} />
                                }
                            </div>
                            <div className="info hide-mobile">
                                <div>
                                    <p>{auth.login}</p>
                                    <a href="#" onClick={logout}>Выйти</a>
                                </div>
                                <img src="./userpic.png" alt="Фото профиля" />
                            </div>
                        </div>
                        )
                    }
                </div>
                <input id="menu-toggle" ref={mobileMenuCheckbox} type="checkbox" />
                <label class="menu-button-container" htmlFor="menu-toggle">
                    <div class='menu-button'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </label>
                <div class="menu">
                    <div className="menu-header">
                        <img src={mobileLogo} alt="" />
                        <label class="menu-button-container" htmlFor="menu-toggle">
                            <div class='menu-button'>
                                <span></span>
                                <span></span>
                            </div>
                        </label>
                    </div>
                    <nav className="menu-nav">
                        <ul onClick={closeMobileMenu}>
                            <li><Link to="/">Главная</Link></li>
                            <li><a href="">Тарифы</a></li>
                            <li><a href="">FAQ</a></li>
                        </ul>
                    </nav>
                    <div className="menu-profile">
                        { !login ? 
                            (
                                <div className="profile-mobile" onClick={closeMobileMenu}>
                                    <a href="#">Зарегистрироваться</a>
                                    <Link to="/login" className="signin">Войти</Link>
                                </div>
                            ) :
                            (
                                <div className="profile-mobile">
                                    <div className="info">
                                        <div>
                                            <p>{auth.login}</p>
                                            <a 
                                                href="#" 
                                                onClick={(e) => 
                                                    {
                                                        logout(e); 
                                                        closeMobileMenu(e);
                                                    }
                                                }
                                            >Выйти</a>
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