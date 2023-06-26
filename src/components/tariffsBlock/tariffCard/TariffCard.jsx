import React from "react"
import "./TariffCard.css";
import Button from "../../button/Button";

export default function TariffCard(props) {
    const { color, title, titleDesc, imgName, badgeText, price, oldPrice, installments, includesArr, isPrimary } = props;
    let { headerTextColor } = props;
    if (headerTextColor === undefined) {
        headerTextColor = "#000000";
    }

    return(
        <div className="card">
            <div className="card-header" style={{backgroundColor: color, color: headerTextColor}}>
                <div className="left">
                    <p className="card-title">{title}</p>
                    <p className="card-description">{titleDesc}</p>
                </div>
                <img src={require(`./../${imgName}.png`)} alt="Изображение карточки" />
            </div>
            <div className="card-main">
                { badgeText !== undefined ? <p className="badge">{badgeText}</p> : null }
                <p className="price">{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽ <span>{oldPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽</span></p>
                { installments !== undefined ? <p className="installments">или {installments} ₽/мес. при рассрочке на 24 мес.</p> : null }
                <p className="includes">В тариф входит:</p>
                <ul className="includes-list">
                    { includesArr.map((item) => {
                        return <li>{item}</li>
                    })}
                </ul>
                { isPrimary ? <Button type="button" stylization="primary" disabled={false}>Подробнее</Button> 
                : <Button type="button" stylization="secondary" disabled={false}>Перейти в личный кабинет</Button> }
            </div>
        </div>
    )
}