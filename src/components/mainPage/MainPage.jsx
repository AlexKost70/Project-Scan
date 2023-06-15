import React from "react";
import Title from "../title/Title";
import Button from "../button/Button";
import "./MainPage.css";

export default function Main() {
    return(
        <div className="wrapper">
            <main>
                <div className="left-side">
                    <Title 
                        type="h1" 
                        fontSize="60px" 
                        lineHeight="72px" 
                    >сервис по поиску публикаций <br /> о компании <br /> по его ИНН</Title>
                    <p className="desc">Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
                    <Button type="button" disabled={false} stylization="primary">Запросить данные</Button>
                </div>
            </main> 
        </div>
    )
}