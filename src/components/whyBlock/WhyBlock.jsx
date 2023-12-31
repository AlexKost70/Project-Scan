import React from "react";
import Title from "../title/Title";
import "./WhyBlock.css";
import SimpleSlider from "./simpleSlider/SimpleSlider";
import image from "./whyblock.png";

export default function WhyBlock() {
    return(
        <div className="whyblock">
            <div className="wrapper">
                <Title 
                    type="h2" 
                    fontSize="45px" 
                    lineHeight="54px" 
                >Почему именно мы</Title>
                <SimpleSlider />
                <img src={image} alt="Иллюстрация раздела" />
            </div>
        </div>
    )
}