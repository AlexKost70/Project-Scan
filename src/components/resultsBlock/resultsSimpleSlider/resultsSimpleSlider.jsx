import React from "react";
import "./resultsSimpleSlider.css";
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';
import arrow from '../../whyBlock/simpleSlider/arrow.png';

SwiperCore.use([Navigation]);

const ResultsSimpleSlider = () => {
    const slides = [
        {
            id: 1,
            date: "11.09.2021",
            total: 5,
            risks: 0
        },
        {
            id: 2,
            date: "12.09.2021",
            total: 5,
            risks: 0
        },
        {
            id: 3,
            date: "13.09.2021",
            total: 5,
            risks: 0
        },
        {
            id: 4,
            date: "14.09.2021",
            total: 5,
            risks: 0
        },
        {
            id: 5,
            date: "15.09.2021",
            total: 5,
            risks: 0
        },
        {
            id: 6,
            date: "16.09.2021",
            total: 5,
            risks: 0
        },
        {
            id: 7,
            date: "17.09.2021",
            total: 5,
            risks: 0
        },
        {
            id: 8,
            date: "18.09.2021",
            total: 5,
            risks: 0
        },
        {
            id: 8,
            date: "18.09.2021",
            total: 5,
            risks: 0
        }
    ];

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
                    {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <tr className="slide">
                            <td>{slide.date}</td>
                            <td>{slide.total}</td>
                            <td>{slide.risks}</td>
                        </tr>
                    </SwiperSlide>
                    ))}
                </Swiper>
                <div className="custom-button-prev"><img src={arrow} alt="Кнопка для показа предыдущего слайда" onClick={goPrev} /></div>
                <div className="custom-button-next"><img src={arrow} alt="Кнопка для показа следующего слайда" onClick={goNext} /></div>
            </div>
    );
};

export default ResultsSimpleSlider;