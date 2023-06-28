import React, { useState, useRef, useEffect, useContext } from "react";
import {AuthContext} from "../../hoc/AuthProvider";
import axios from "../../api/axios";
import "./AuthBlock.css";
import Title from "../title/Title";
import image from "./authblock.png";
import Button from "../button/Button";
import lockImg from "./lock.svg";
import googleLogo from "./google.png";
import facebookLogo from "./facebook.png";
import yandexLogo from "./yandex.png";

const LOGIN_URL = "/account/login";

export default function AuthBlock(props) {
    const { setAuth } = useContext(AuthContext);
    const loginRef = useRef();
    const pwdRef = useRef();

    const [login, setLogin] = useState('');
    const [pwd, setPwd] = useState('');
    const [loginValid, setLoginValid] = useState(true);
    const [pwdValid, setPwdValid] = useState(false);
    const [loginErr, setLoginErr] = useState(false);
    const [pwdErr, setPwdErr] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {
        loginRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg("");
    }, [login, pwd]);

    const handleInputLogin = (e) => {
        setLogin(e.target.value);
        if (e.target.value.length < 1) {
            setLoginValid(false);
            setLoginErr(true);
        } else {
            setLoginValid(true);
            setLoginErr(false);
        }
    }

    const handleInputPwd = (e) => {
        setPwd(e.target.value);
        if (e.target.value.length >= 4) {
            setPwdValid(true);
            setPwdErr(false);
        } else {
            setPwdValid(false);
            setPwdErr(false);
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({login, password: pwd}),
                {
                    headers: { "Authorization": "Bearer YOUR_TOKEN" }
                }
            );
            const accessToken = response?.data?.accessToken;
            const expire = response?.data?.expire;
            setAuth({login, pwd, accessToken, expire});
            localStorage.setItem("login", login);
            localStorage.setItem("pwd", pwd);
            localStorage.setItem("token", accessToken);
            localStorage.setItem("expire", expire);
            setLogin('');
            setPwd('');
        } catch (err) {
            if(!err?.response) {
                setErrMsg("Нет ответа от сервера");
            } else if (err.response?.status === 400) {
                setErrMsg("Отсутствует логин или пароль");
            } else if (err.response?.status === 401) {
                setErrMsg("Неправильный пароль");
            } else {
                setErrMsg("Произошла ошибка");
            }
            setPwdErr(true);
            pwdRef.current.focus();
        }
    }

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
                <form onSubmit={handleSubmit}>
                    <div className="decor">
                        <img src={lockImg} alt="" className="lock" />
                    </div>
                    <div className="tabs">
                        <a href="#" className="tab tab-active">Войти</a>
                        <a href="#" className="tab">Зарегистрироваться</a>
                    </div>
                    <label htmlFor="login">
                        Логин или номер телефона:
                        <input 
                            type="tel" 
                            id="login"
                            ref={loginRef}
                            onChange={handleInputLogin} 
                            value={login}
                            className={loginErr ? "error" : null}
                            required 
                        />
                    </label>
                    {
                        loginErr ? <p className="errMsg errLogin">Введите корректные данные</p> : null
                    }
                    <label htmlFor="password">
                        Пароль:
                        <input 
                            type="password" 
                            id="password"
                            ref={pwdRef}
                            onChange={handleInputPwd}
                            value={pwd} 
                            className={pwdErr ? "error" : null} 
                            required 
                        />
                    </label>
                    <p className="errMsg errPwd">{errMsg}</p>
                    <Button
                        type="submit"
                        stylization="primary"
                        disabled={!(loginValid && pwdValid)}
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