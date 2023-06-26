import React from "react";
import "./SearchBlock.css";
import Title from "../title/Title";
import Button from "../button/Button";
import mainImage from "./searchblock.png";
import documentImage from "./document.png";
import foldersImage from "./folders.png";

export default function SearchBlock() {
    return(
        <main className="searchpage">
            <div className="wrapper">
                <div className="left-side">
                        <Title 
                            type="h1" 
                            fontSize="40px" 
                            lineHeight="48px" 
                        >Найдите необходимые данные в пару кликов.</Title>
                        <p>
                            Задайте параметры поиска.<br /> Чем больше заполните, тем точнее поиск
                        </p>
                        <form action="">
                            <div className="left-side">
                                <label htmlFor="inn">
                                    ИНН компании<sup>*</sup>
                                    <input type="number" name="inn" id="inn" placeholder="10 цифр" required />
                                </label>
                                <label htmlFor="tonality">
                                    Тональность
                                    <select name="tonality" id="tonality" required>
                                        <option value="positive">Позитивная</option>
                                        <option value="negative">Негативная</option>
                                        <option value="any" selected="any">Любая</option>
                                    </select>
                                </label>
                                <label htmlFor="amount">
                                    Количество документов в выдаче<sup>*</sup>
                                    <input type="number" name="amount" id="amount" min="1" max="1000" placeholder="От 1 до 1000" required />
                                </label>
                                <div className="range">
                                    <label>Диапазон поиска<sup>*</sup></label>
                                    <div className="range-inputs">
                                        <input
                                            type="text" 
                                            name="startswith" 
                                            id="startswith" 
                                            placeholder="Дата начала" 
                                            required 
                                            onFocus={(e) => (e.target.type = "date")}
                                            onBlur={(e) => (e.target.type = "text")}
                                        />
                                        <input 
                                            type="text" 
                                            name="endswith" 
                                            id="endswith" 
                                            placeholder="Дата конца" 
                                            required 
                                            onFocus={(e) => (e.target.type = "date")}
                                            onBlur={(e) => (e.target.type = "text")}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="right-side">
                                <div className="checkbox">
                                    <input type="checkbox" name="maxsign" id="maxsign" defaultChecked={true} />
                                    <label htmlFor="maxsign">Признак максимальной полноты</label>
                                </div>
                                <div className="checkbox">
                                    <input type="checkbox" name="mentionbusiness" id="mentionbusiness" defaultChecked={true} />
                                    <label htmlFor="mentionbusiness">Упоминания в бизнес-контексте</label>
                                </div>
                                <div className="checkbox">
                                    <input type="checkbox" name="mainrole" id="mainrole" defaultChecked={true} />
                                    <label htmlFor="mainrole">Главная роль в публикации</label>
                                </div>
                                <div className="checkbox">
                                    <input type="checkbox" name="riskonly" id="riskonly" />
                                    <label htmlFor="riskonly">Публикации только с риск-факторами</label>
                                </div>
                                <div className="checkbox">
                                    <input type="checkbox" name="techmarketnews" id="techmarketnews" />
                                    <label htmlFor="techmarketnews">Включать технические новости рынков</label>
                                </div>
                                <div className="checkbox">
                                    <input type="checkbox" name="announces" id="announces" defaultChecked={true} />
                                    <label htmlFor="announces">Включать анонсы и календари</label>
                                </div>
                                <div className="checkbox">
                                    <input type="checkbox" name="newsbulletins" id="newsbulletins" />
                                    <label htmlFor="newsbulletins">Включать сводки новостей</label>
                                </div>
                                <Button
                                    type="submit"
                                    stylization="primary"
                                    disabled={true}
                                >Поиск</Button>
                                <p>* Обязательные к заполнению поля</p>
                            </div>
                        </form>
                </div>
                <div className="images">
                    <div className="images-line">
                        <img src={documentImage} alt="" />
                        <img src={foldersImage} alt="" />
                    </div>
                    <img className="mainImage" src={mainImage} alt="" />
                </div>
            </div>
        </main>
    )
}