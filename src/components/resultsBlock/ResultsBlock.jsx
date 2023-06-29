import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import "./ResultsBlock.css";
import Title from "../title/Title";
import mainImage from "./resultspage.png";
import ResultsSimpleSlider, { formatDate } from "./resultsSimpleSlider/resultsSimpleSlider";
import ResultCard from "./resultCard/ResultCard";
import Button from "../button/Button";
import MobileResultsSimpleSlider from "./mobileResultsSimpleSlider/mobileResultsSimpleSlider";

export default function ResultsPage() {
    const [results, setResults] = useState("loading");
    const [totalResults, setTotalResults] = useState(0);
    const [loadedResults, setLoadedResults] = useState(false);
    const [loadedCards, setLoadedCards] = useState(false);
    const [cardsIds, setCardsIds] = useState([]);
    const [totalCards, setTotalCards] = useState(0);
    const [index, setIndex] = useState(0);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const results = JSON.parse(localStorage.getItem("results"));
        setResults(results);

        let counter = 0;
        results[0].data.forEach(element => {
            counter += element.value;
        });
        results[1].data.forEach(element => {
            counter += element.value;
        });
        setTotalResults(counter);

        searchPublications();
    }, []);

    useEffect(() => {
        setTotalCards(cardsIds.length);
    }, [cardsIds]);

    useEffect(() => {
        addCards();
    }, [totalCards]);

    const searchPublications = async () => {
        const request = localStorage.getItem("request");
        try {
            const LOGIN_URL = "/objectsearch";
            const response = await axios.post(LOGIN_URL, request);
            setCardsIds(response.data.items);
        } catch (err) {
            console.log(err);
        }
    }

    const addCards = async () => {
        const cardsArr = [];
        cardsArr.push(...cards);
        let localIndex = index;
        if (totalCards !== 0) {
            for (let counter = 0; counter < 10; counter++) {
                if (localIndex < totalCards) {
                    try {
                        const LOGIN_URL = "/documents";
                        const request = {
                            ids: [cardsIds[localIndex].encodedId]
                        }
                        const response = await axios.post(LOGIN_URL, request);
                        cardsArr.push(response.data[0].ok)
                        localIndex++;
                    } catch (err) {
                        console.log(err);
                    }
                }
            }
        }
        setIndex(localIndex);
        setCards(cardsArr);
        setLoadedResults(true);
        setLoadedCards(true);
    }


    return(
        <main className="resultspage">
            <div className="wrapper">
                <div className="information-block">
                    <div className={loadedResults && loadedCards ? "left-side invisible" : "left-side"}>
                        <Title 
                            type="h1" 
                            fontSize="40px" 
                            lineHeight="48px" 
                        >Ищем. Скоро будут результаты</Title>
                        <p>Поиск может занять некоторое время, просим сохранять терпение.</p>
                    </div>
                    <img src={mainImage} alt="" />
                </div>
                <div className="summary-block">
                    <Title 
                        type="h2" 
                        fontSize="30px" 
                        lineHeight="36px" 
                    >Общая сводка</Title>
                    <p>Найдено {totalResults.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} вариантов</p>
                    <ResultsSimpleSlider results={results} />
                    <MobileResultsSimpleSlider results={results} />
                </div>
                <div className="resultsblock">
                    <Title 
                        type="h2" 
                        fontSize="30px" 
                        lineHeight="36px" 
                    >Список документов</Title>
                    <div className="resultslist">
                        {
                            cards.map((item) => {
                                return <ResultCard
                                    title={JSON.stringify(item.title.text).replaceAll('\\"', '"').slice(1).slice(0, -1)}
                                    issueDate={formatDate(item.issueDate)}
                                    sourceName={item.source.name}
                                    sourceURL={item.url}
                                    isTechNews={item.attributes.isTechNews}
                                    isAnnouncement={item.attributes.isAnnouncement}
                                    isDigest={item.attributes.isDigest}
                                    description={item.content.markup}
                                    wordCount={item.attributes.wordCount}
                                />
                            })
                        }
                            {
                                index < totalCards ?
                                <a href="#" 
                                    onClick={ async (e) => {
                                        e.preventDefault();
                                        addCards();
                                    }}
                                >
                                    <Button
                                        type="button"
                                        stylization="primary"
                                        disabled={false}
                                    >Показать больше</Button>
                                </a>
                                : null
                            }
                    </div>
                </div>
            </div>
        </main>
    )
}