import React from "react"
import "./TariffsPage.css";
import TariffCard from "./tariffCard/TariffCard";
import Title from "../title/Title";

const TarrifCards = [
    {
        color: "#FFB64F",
        title: "Beginner",
        titleDesc: "Для небольшого исследования",
        imgName: "card1",
        badgeText: "Текущий тариф",
        price: 799,
        oldPrice: 1200,
        installments: 150,
        includesArr: [
            "Безлимитная история запросов",
            "Безопасная сделка",
            "Поддержка 24/7"
        ],
        isPrimary: false
    },
    {
        color: "#7CE3E1",
        title: "Pro",
        titleDesc: "Для небольшого исследования",
        imgName: "card2",
        price: 1299,
        oldPrice: 2600,
        installments: 279,
        includesArr: [
            "Все пункты тарифа Beginner",
            "Экспорт истории",
            "Рекомендации по приоритетам"
        ],
        isPrimary: true
    },
    {
        color: "#000000",
        headerTextColor: "#ffffff",
        title: "Business",
        titleDesc: "Для корпоративных клиентов",
        imgName: "card3",
        price: 2379,
        oldPrice: 3700,
        includesArr: [
            "Все пункты тарифа Pro",
            "Безлимитное количество запросов",
            "Приоритетная поддержка"
        ],
        isPrimary: true
    }
]

export default function TariffsPage() {
    return(
        <div className="tariffsblock">
            <div className="wrapper">
                <Title 
                    type="h2"
                    fontSize="45px" 
                    lineHeight="54px" 
                >наши тарифы</Title>
                <div className="cards">
                    {
                        TarrifCards.map((card) => {
                            return(
                                <TariffCard
                                color={card.color}
                                title={card.title}
                                titleDesc={card.titleDesc}
                                imgName={card.imgName}
                                badgeText={card.badgeText}
                                price={card.price}
                                oldPrice={card.oldPrice}
                                installments={card.installments}
                                includesArr={card.includesArr}
                                isPrimary={card.isPrimary}
                                headerTextColor={card.headerTextColor}
                            />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}