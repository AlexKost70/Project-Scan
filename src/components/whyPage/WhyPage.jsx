import React from "react";
import Title from "../title/Title";
import "./WhyPage.css";

export default function WhyPage() {
    return(
        <div className="wrapper">
            <div className="whyblock">
                <Title 
                type="h2" 
                fontSize="45px" 
                lineHeight="54px" 
                >Почему именно мы</Title>
            </div>
        </div>
    )
}