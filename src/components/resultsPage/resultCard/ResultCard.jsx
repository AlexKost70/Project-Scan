import React from "react";
import "./ResultCard.css";
import Button from "../../button/Button";

export default function ResultCard(props) {
    const { item } = props;
    return(
        <div className="resultcard">
            <div className="card-info">
                <time>{item.date}</time>
                <a href={item.source.sourceURL}>{item.source.sourceName}</a>
            </div>
            <p className="card-title">{item.title}</p>
            <div className="card-badges">
                { item.attributes.isTechNews ? <div className="card-badge">Технические новости</div> : null }
                { item.attributes.isAnnouncement ? <div className="card-badge">Анонсы и события</div> : null }
                { item.attributes.isDigest ? <div className="card-badge">Сводки новостей</div> : null }
            </div>
            <img src={item.imgURL} alt={item.title} className="card-img" />
            <p className="card-description">{item.description}</p>
            <div className="card-footer">
                <a href={item.source.sourceURL}>
                    <Button
                        type="button"
                        stylization="resultcardbutton"
                        disabled={false}
                    >Читать в источнике</Button>
                </a>
                <p className="words">{item.attributes.wordCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} слова</p>
            </div>
        </div>
    )
}