import React from "react";
import "./ResultsBlock.css";
import Title from "../title/Title";
import mainImage from "./resultspage.png";
import ResultsSimpleSlider from "./resultsSimpleSlider/resultsSimpleSlider";
import ResultCard from "./resultCard/ResultCard";
import Button from "../button/Button";
import MobileResultsSimpleSlider from "./mobileResultsSimpleSlider/mobileResultsSimpleSlider";
const cards = [
    {   
        "date": "13.09.2021",
        "source": {
            "sourceName": "Комсомольская правда KP.RU",
            "sourceURL": "https://kp.ru/test/"
        },
        "title": "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
        "imgURL": "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f",
        "description": "SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях. Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.",
        "buttonURL": "https://skillfactory.ru/",
        "attributes": {
            "isTechNews": true,
            "isAnnouncement": false,
            "isDigest": false,
            "influence": 352.0,
            "wordCount": 9654756759,
            "coverage": {
                "value": 1402211.0,
                "state": "hasData"
            }
        }
    },
    {   
        "date": "13.09.2021",
        "source": {
            "sourceName": "Комсомольская правда KP.RU",
            "sourceURL": "https://kp.ru/test/"
        },
        "title": "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
        "imgURL": "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f",
        "description": "SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях. Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.",
        "buttonURL": "https://skillfactory.ru/",
        "attributes": {
            "isTechNews": false,
            "isAnnouncement": false,
            "isDigest": false,
            "influence": 352.0,
            "wordCount": 99,
            "coverage": {
                "value": 1402211.0,
                "state": "hasData"
            }
        }
    },
    {   
        "date": "13.09.2021",
        "source": {
            "sourceName": "Комсомольская правда KP.RU",
            "sourceURL": "https://kp.ru/test/"
        },
        "title": "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
        "imgURL": "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f",
        "description": "SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях. Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.",
        "buttonURL": "https://skillfactory.ru/",
        "attributes": {
            "isTechNews": true,
            "isAnnouncement": false,
            "isDigest": false,
            "influence": 352.0,
            "wordCount": 99,
            "coverage": {
                "value": 1402211.0,
                "state": "hasData"
            }
        }
    },
    {   
        "date": "13.09.2021",
        "source": {
            "sourceName": "Комсомольская правда KP.RU",
            "sourceURL": "https://kp.ru/test/"
        },
        "title": "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
        "imgURL": "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f",
        "description": "SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях. Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.",
        "buttonURL": "https://skillfactory.ru/",
        "attributes": {
            "isTechNews": false,
            "isAnnouncement": true,
            "isDigest": false,
            "influence": 352.0,
            "wordCount": 99,
            "coverage": {
                "value": 1402211.0,
                "state": "hasData"
            }
        }
    },
    {   
        "date": "13.09.2021",
        "source": {
            "sourceName": "Комсомольская правда KP.RU",
            "sourceURL": "https://kp.ru/test/"
        },
        "title": "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
        "imgURL": "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f",
        "description": "SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях. Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.",
        "buttonURL": "https://skillfactory.ru/",
        "attributes": {
            "isTechNews": false,
            "isAnnouncement": false,
            "isDigest": true,
            "influence": 352.0,
            "wordCount": 99,
            "coverage": {
                "value": 1402211.0,
                "state": "hasData"
            }
        }
    },
    {   
        "date": "13.09.2021",
        "source": {
            "sourceName": "Комсомольская правда KP.RU",
            "sourceURL": "https://kp.ru/test/"
        },
        "title": "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
        "imgURL": "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f",
        "description": "SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях. Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.",
        "buttonURL": "https://skillfactory.ru/",
        "attributes": {
            "isTechNews": true,
            "isAnnouncement": true,
            "isDigest": true,
            "influence": 352.0,
            "wordCount": 99,
            "coverage": {
                "value": 1402211.0,
                "state": "hasData"
            }
        }
    },
    {   
        "date": "13.09.2021",
        "source": {
            "sourceName": "Комсомольская правда KP.RU",
            "sourceURL": "https://kp.ru/test/"
        },
        "title": "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
        "imgURL": "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f",
        "description": "SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях. Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.",
        "buttonURL": "https://skillfactory.ru/",
        "attributes": {
            "isTechNews": false,
            "isAnnouncement": false,
            "isDigest": false,
            "influence": 352.0,
            "wordCount": 99,
            "coverage": {
                "value": 1402211.0,
                "state": "hasData"
            }
        }
    },
    {   
        "date": "13.09.2021",
        "source": {
            "sourceName": "Комсомольская правда KP.RU",
            "sourceURL": "https://kp.ru/test/"
        },
        "title": "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
        "imgURL": "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f",
        "description": "SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях. Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.",
        "buttonURL": "https://skillfactory.ru/",
        "attributes": {
            "isTechNews": false,
            "isAnnouncement": false,
            "isDigest": false,
            "influence": 352.0,
            "wordCount": 99,
            "coverage": {
                "value": 1402211.0,
                "state": "hasData"
            }
        }
    },
    {   
        "date": "13.09.2021",
        "source": {
            "sourceName": "Комсомольская правда KP.RU",
            "sourceURL": "https://kp.ru/test/"
        },
        "title": "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
        "imgURL": "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f",
        "description": "SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях. Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.",
        "buttonURL": "https://skillfactory.ru/",
        "attributes": {
            "isTechNews": false,
            "isAnnouncement": false,
            "isDigest": false,
            "influence": 352.0,
            "wordCount": 99,
            "coverage": {
                "value": 1402211.0,
                "state": "hasData"
            }
        }
    },
    {   
        "date": "13.09.2021",
        "source": {
            "sourceName": "Комсомольская правда KP.RU",
            "sourceURL": "https://kp.ru/test/"
        },
        "title": "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
        "imgURL": "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000000964/811461b8d1cacf1f2da791b478dccfe2a55457780364c3d5a95fbfcdd4c3086f",
        "description": "SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях. Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.",
        "buttonURL": "https://skillfactory.ru/",
        "attributes": {
            "isTechNews": false,
            "isAnnouncement": false,
            "isDigest": false,
            "influence": 352.0,
            "wordCount": 99,
            "coverage": {
                "value": 1402211.0,
                "state": "hasData"
            }
        }
    },
];

export default function ResultsPage() {
    return(
        <main className="resultspage">
            <div className="wrapper">
                <div className="information-block">
                    <div className="left-side">
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
                    <p>Найдено {"4221".toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} вариантов</p>
                    <ResultsSimpleSlider />
                    <MobileResultsSimpleSlider />
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
                                return <ResultCard item={item} />
                            })
                        }
                            <Button
                                type="button"
                                stylization="primary"
                                disabled={false}
                            >Показать больше</Button>
                    </div>
                </div>
            </div>
        </main>
    )
}