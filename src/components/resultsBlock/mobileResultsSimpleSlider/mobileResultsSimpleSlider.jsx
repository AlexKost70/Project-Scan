import React from "react";
import "./mobileResultsSimpleSlider.css";
import loading from "../../header/loading.svg";
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';
import arrow from '../../whyBlock/simpleSlider/arrow.png';
import { formatDate } from "../resultsSimpleSlider/resultsSimpleSlider";

SwiperCore.use([Navigation]);

const MobileResultsSimpleSlider = (props) => {
    const { results } = props;

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
                >
                    {results !== "loading" ? results[0].data.map((result, index) => (
                        <SwiperSlide key={index + 1}>
                            <table className="slide">
                                <tr>
                                    <td>Период</td>
                                    <td>Всего</td>
                                    <td>Риски</td>
                                </tr>
                                <tr>
                                    <td>{formatDate(result.date)}</td>
                                    <td>{result.value + results[1].data[index].value}</td>
                                    <td>{results[1].data[index].value}</td>
                                </tr>
                            </table>
                        </SwiperSlide>
                    )) :
                        <SwiperSlide className="loading">
                            <img src={loading} alt="" />
                        </SwiperSlide>
                }
                </Swiper>
                <div className="custom-button-prev"><img src={arrow} alt="Кнопка для показа предыдущего слайда" onClick={goPrev} /></div>
                <div className="custom-button-next"><img src={arrow} alt="Кнопка для показа следующего слайда" onClick={goNext} /></div>
            </div>
    );
};

export default MobileResultsSimpleSlider;