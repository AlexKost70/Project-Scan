import React, { useRef, useState, useEffect } from "react";
import axios from "../../api/axios";
import "./SearchBlock.css";
import Title from "../title/Title";
import Button from "../button/Button";
import mainImage from "./searchblock.png";
import documentImage from "./document.png";
import foldersImage from "./folders.png";
import validateInn from "./validateInn";

export default function SearchBlock() {
    const LOGIN_URL = "/objectsearch/histograms";
    const innRef = useRef();

    const [inn, setInn] = useState("");
    const [amount, setAmount] = useState("");
    const [startWith, setStartWith] = useState("");
    const [endWith, setEndWith] = useState("");
    const [tonality, setTonality] = useState("any");
    const [maxSign, setMaxSign] = useState(true);
    const [mentionBusiness, setMentionBusiness] = useState(true);
    const [mainRole, setMainRole] = useState(true);
    const [riskOnly, setRiskOnly] = useState(false);
    const [techMarketNews, setTechMarketNews] = useState(false);
    const [announces, setAnnounces] = useState(true);
    const [newsBulletins, setNewsBulletins] = useState(false);

    const [innErr, setInnErr] = useState("");
    const [amountErr, setAmountErr] = useState("");
    const [rangeErr, setRangeErr] = useState("");

    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        innRef.current.focus();
    }, []);

    const handleInputInn = (e) => {
        setInn(e.target.value);
        let error = {};
        if (!validateInn(e.target.value, error)) {
            setInnErr("Введите корректные данные");
        } else {
            setInnErr("");
        }
    }

    const handleInputAmount = (e) => {
        setAmount(e.target.value);
        if (e.target.value < 1 || e.target.value > 1000) {
            setAmountErr("Введите корректные данные")
        } else {
            setAmountErr("");
        }
    }

    const handleInputStartWith = (e) => {
        setStartWith(e.target.value);
        let date = new Date(e.target.value);
        let currentDate = new Date();
        let endWithDate = new Date(endWith);
        if (date.getTime() < endWithDate.getTime() && date.getTime() < currentDate.getTime()) {
            setRangeErr("");
        } else {
            setRangeErr("Введите корректные данные");
        }
    }

    const handleInputEndWith = (e) => {
        setEndWith(e.target.value);
        let date = new Date(e.target.value);
        let currentDate = new Date();
        let startWithDate = new Date(startWith);
        if (date.getTime() > startWithDate.getTime() && date.getTime() < currentDate.getTime()) {
            setRangeErr("");
        } else {
            setRangeErr("Введите корректные данные");
        }
    }

    const handleInputTonality = (e) => {
        setTonality(e.target.value);
    }

    const handleCheckMaxSign = (e) => {
        if (maxSign) {
            setMaxSign(false);
        } else {
            setMaxSign(true);
        }
    }

    const handleCheckMentionBusiness = (e) => {
        if (mentionBusiness) {
            setMentionBusiness(false);
        } else {
            setMentionBusiness(true);
        }
    }

    const handleCheckMainRole = (e) => {
        if (mainRole) {
            setMainRole(false);
        } else {
            setMainRole(true);
        }
    }

    const handleCheckRiskOnly = (e) => {
        if (riskOnly) {
            setRiskOnly(false);
        } else {
            setRiskOnly(true);
        }
    }

    const handleCheckTechMarketNews = (e) => {
        if (techMarketNews) {
            setTechMarketNews(false);
        } else {
            setTechMarketNews(true);
        }
    }

    const handleCheckAnnounces = (e) => {
        if (announces) {
            setAnnounces(false);
        } else {
            setAnnounces(true);
        }
    }

    const handleCheckNewsBulletins = (e) => {
        if (newsBulletins) {
            setNewsBulletins(false);
        } else {
            setNewsBulletins(true);
        }
    }

    const handleBlurSubmit = () => {
        const noErrors = (innErr === "") && (amountErr === "") && (rangeErr === "");
        const notEmpty = (inn.length > 0) && (amount.length > 0) && (startWith.length > 0) && (endWith.length > 0)
        if (noErrors && notEmpty) {
            setFormValid(true);
        } else {
            setFormValid(false);
        }
    }

    const makeRequest = () => {
        const startWithDate = new Date(startWith);
        const endWithDate = new Date(endWith);
        return {
            "issueDateInterval": {
                "startDate": startWithDate,
                "endDate": endWithDate
            },
            "searchContext": {
                "targetSearchEntitiesContext": {
                    "targetSearchEntities": [
                        {
                        "type": "company",
                        "sparkId": null,
                        "entityId": null,
                        "inn": inn,
                        "maxFullness": maxSign,
                        "inBusinessNews": mentionBusiness
                        }
                    ],
                    "onlyMainRole": mainRole,
                    "tonality": tonality,
                    "onlyWithRiskFactors": riskOnly,
                    "riskFactors": {
                        "and": [],
                        "or": [],
                        "not": []
                    },
                    "themes": {
                        "and": [],
                        "or": [],
                        "not": []
                    }
                },
                "themesFilter": {
                    "and": [],
                    "or": [],
                    "not": []
                }
            },
            "searchArea": {
                "includedSources": [],
                "excludedSources": [],
                "includedSourceGroups": [],
                "excludedSourceGroups": []
            },
            "attributeFilters": {
                "excludeTechNews": !techMarketNews,
                "excludeAnnouncements": !announces,
                "excludeDigests": !newsBulletins
            },
            "similarMode": "duplicates",
            "limit": amount,
            "sortType": "sourceInfluence",
            "sortDirectionType": "desc",
            "intervalType": "month",
            "histogramTypes": [
                "totalDocuments",
                "riskFactors"
            ]
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify(makeRequest()));
            console.log(response.data.data[0]);
        } catch (err) { 
            console.log(err);
        }
    }

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
                        <form onSubmit={handleSubmit} onBlur={handleBlurSubmit}>
                            <div className="left-side">
                                <label htmlFor="inn">
                                    ИНН компании<sup className={innErr ? "error" : null}>*</sup>
                                    <input 
                                        type="number" 
                                        id="inn" 
                                        placeholder="10 цифр" 
                                        required
                                        onChange={handleInputInn}
                                        value={inn}
                                        ref={innRef} 
                                        className={innErr ? "error" : null} 
                                    />
                                </label>
                                <p className="errMsg">{innErr}</p>
                                <label htmlFor="tonality">
                                    Тональность
                                    <select 
                                        id="tonality" 
                                        defaultValue="any" 
                                        required 
                                        onChange={handleInputTonality}
                                    >
                                        <option value="positive">Позитивная</option>
                                        <option value="negative">Негативная</option>
                                        <option value="any">Любая</option>
                                    </select>
                                </label>
                                <label htmlFor="amount">
                                    Количество документов в выдаче<sup className={amountErr ? "error" : null}>*</sup>
                                    <input 
                                        type="number" 
                                        id="amount" 
                                        min="1" 
                                        max="1000" 
                                        placeholder="От 1 до 1000" 
                                        required
                                        onChange={handleInputAmount}
                                        value={amount} 
                                        className={amountErr ? "error" : null} 
                                    />
                                </label>
                                <p className="errMsg">{amountErr}</p>
                                <div className="range">
                                    <label>Диапазон поиска<sup>*</sup></label>
                                    <div className="range-inputs">
                                        <input
                                            type="text" 
                                            id="startwith" 
                                            placeholder="Дата начала" 
                                            required
                                            onChange={handleInputStartWith}
                                            value={startWith}
                                            className={rangeErr ? "error" : null}
                                            onFocus={(e) => (e.target.type = "date")}
                                            onBlur={(e) => (e.target.type = "text")}
                                        />
                                        <input 
                                            type="text" 
                                            id="endwith" 
                                            placeholder="Дата конца" 
                                            required
                                            onChange={handleInputEndWith}
                                            value={endWith}
                                            className={rangeErr ? "error" : null}
                                            onFocus={(e) => (e.target.type = "date")}
                                            onBlur={(e) => (e.target.type = "text")}
                                        />
                                    </div>
                                </div>
                                <p className="errMsg">{rangeErr}</p>
                            </div>
                            <div className="right-side">
                                <div className="checkbox">
                                    <input 
                                        type="checkbox" 
                                        id="maxsign" 
                                        defaultChecked={true} 
                                        checked={maxSign}
                                        onChange={handleCheckMaxSign}
                                    />
                                    <label htmlFor="maxsign">Признак максимальной полноты</label>
                                </div>
                                <div className="checkbox">
                                    <input 
                                        type="checkbox" 
                                        id="mentionbusiness" 
                                        defaultChecked={true}
                                        checked={mentionBusiness}
                                        onChange={handleCheckMentionBusiness} 
                                    />
                                    <label htmlFor="mentionbusiness">Упоминания в бизнес-контексте</label>
                                </div>
                                <div className="checkbox">
                                    <input 
                                        type="checkbox" 
                                        id="mainrole" 
                                        defaultChecked={true} 
                                        checked={mainRole}
                                        onChange={handleCheckMainRole}
                                    />
                                    <label htmlFor="mainrole">Главная роль в публикации</label>
                                </div>
                                <div className="checkbox">
                                    <input 
                                        type="checkbox" 
                                        id="riskonly"
                                        checked={riskOnly}
                                        onChange={handleCheckRiskOnly} 
                                    />
                                    <label htmlFor="riskonly">Публикации только с риск-факторами</label>
                                </div>
                                <div className="checkbox">
                                    <input 
                                        type="checkbox" 
                                        id="techmarketnews" 
                                        checked={techMarketNews}
                                        onChange={handleCheckTechMarketNews}
                                    />
                                    <label htmlFor="techmarketnews">Включать технические новости рынков</label>
                                </div>
                                <div className="checkbox">
                                    <input 
                                        type="checkbox" 
                                        id="announces" 
                                        defaultChecked={true} 
                                        checked={announces}
                                        onChange={handleCheckAnnounces}
                                    />
                                    <label htmlFor="announces">Включать анонсы и календари</label>
                                </div>
                                <div className="checkbox">
                                    <input 
                                        type="checkbox" 
                                        id="newsbulletins"
                                        checked={newsBulletins}
                                        onChange={handleCheckNewsBulletins} 
                                    />
                                    <label htmlFor="newsbulletins">Включать сводки новостей</label>
                                </div>
                                <Button
                                    type="submit"
                                    stylization="primary"
                                    disabled={!formValid}
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