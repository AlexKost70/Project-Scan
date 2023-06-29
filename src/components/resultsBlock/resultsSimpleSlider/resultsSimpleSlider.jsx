import React from "react";
import "./resultsSimpleSlider.css";
import loading from "../../header/loading.svg";
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';
import arrow from '../../whyBlock/simpleSlider/arrow.png';

SwiperCore.use([Navigation]);

export function formatDate(str) {
    let date = new Date(str);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (day < 10) {
    day = "0" + day;
    }
    if (month < 10) {
    month = "0" + month;
    }
    return day + "." + month + "." + year;
}

const ResultsSimpleSlider = (props) => {
    const {results} = props;

    const swiperRef = React.useRef(null);

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
            <div className="relative-wrapper">
                <Swiper
                    spaceBetween={7}
                    slidesPerView={9}
                    navigation={false}
                    className="resultsSlider"
                    ref={swiperRef}
                    breakpoints={{
                        1245: {
                            slidesPerView: 8
                        },
                        1105: {
                            slidesPerView: 7
                        },
                        958: {
                            slidesPerView: 6
                        },
                        815: {
                            slidesPerView: 5
                        },
                        670: {
                            slidesPerView: 4
                        },
                        520: {
                            slidesPerView: 3
                        }
                    }}
                >
                    <SwiperSlide key={0}>
                        <tr className="slide">
                            <td>Период</td>
                            <td>Всего</td>
                            <td>Риски</td>
                        </tr>
                    </SwiperSlide>
                    { results !== "loading" ? results[0].data.map((result, index) => (
                        <SwiperSlide key={index + 1}>
                            <tr className="slide">
                                <td>{formatDate(result.date)}</td>
                                <td>{result.value + results[1].data[index].value}</td>
                                <td>{results[1].data[index].value}</td>
                            </tr>
                        </SwiperSlide>
                    )) :
                        <SwiperSlide className="loading">
                            <div>
                                <img src={loading} alt="" />
                                <span>Загружаем данные</span>
                            </div>
                        </SwiperSlide>
                    }
                </Swiper>
                <div className="custom-button-prev"><img src={arrow} alt="Кнопка для показа предыдущего слайда" onClick={goPrev} /></div>
                <div className="custom-button-next"><img src={arrow} alt="Кнопка для показа следующего слайда" onClick={goNext} /></div>
            </div>
    );
};

export default ResultsSimpleSlider;