import React from "react";
import Title from "../title/Title";
import Button from "../button/Button";
import "./MainBlock.css";
import { Link } from "react-router-dom";

export default function MainBlock() {
    return(
        <main className="mainpage">
            <div className="wrapper">
                <div className="left-side">
                    <Title 
                        type="h1" 
                        fontSize="60px" 
                        lineHeight="72px" 
                    >сервис по поиску публикаций <br /> о компании <br /> по его ИНН</Title>
                    <p className="desc">Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
                    <Link to="/search">
                        <Button type="button" disabled={false} stylization="primary">Запросить данные</Button>
                    </Link>
                </div>
            </div> 
        </main>
    )
}