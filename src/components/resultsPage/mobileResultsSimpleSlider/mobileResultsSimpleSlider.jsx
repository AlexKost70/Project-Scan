import React from "react";
import "./mobileResultsSimpleSlider.css";
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';
import arrow from '../../whyPage/simpleSlider/arrow.png';

SwiperCore.use([Navigation]);

const MobileResultsSimpleSlider = () => {
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
            <div className="relative-wrapper mobile-relative-wrapper">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={false}
                    className="mobileResultsSlider"
                    ref={swiperRef}
                    breakpoints={{}}
                >
                    {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <table className="slide">
                            <tr>
                                <td>Период</td>
                                <td>Всего</td>
                                <td>Риски</td>
                            </tr>
                            <tr>
                                <td>{slide.date}</td>
                                <td>{slide.total}</td>
                                <td>{slide.risks}</td>
                            </tr>
                        </table>
                    </SwiperSlide>
                    ))}
                </Swiper>
                <div className="custom-button-prev"><img src={arrow} alt="Кнопка для показа предыдущего слайда" onClick={goPrev} /></div>
                <div className="custom-button-next"><img src={arrow} alt="Кнопка для показа следующего слайда" onClick={goNext} /></div>
            </div>
    );
};

export default MobileResultsSimpleSlider;