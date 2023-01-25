import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState, useRef } from "react";
import Slider from "react-slick";

import avoidPlastic from "../../../assets/images/slider/avoid_plastic.png";
import chooseOrganic from "../../../assets/images/slider/choose_organic.png";
import plantTrees from "../../../assets/images/slider/plant_trees.png";
import saveEnergy from "../../../assets/images/slider/save_energy.png";
import saveWater from "../../../assets/images/slider/save_water.png";

import { ReactComponent as ArrowRight } from "../../../assets/images/icons/arrow_right.svg";
import { ReactComponent as ArrowRLeft } from "../../../assets/images/icons/arrow_left.svg";

import styles from "./SliderSection.module.scss";

const sliders = [
  { url: saveWater, width: 100 },
  { url: plantTrees, width: 100 },
  { url: saveEnergy, width: 100 },
  { url: avoidPlastic, width: 100 },
  { url: chooseOrganic, width: 100 },
];

const SliderSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const slider = useRef();

  const renderArrows = () => {
    return (
      <div className={styles.arrowsWrapper}>
        <ArrowRight
          className={styles.arrowRight}
          onClick={() => slider.current?.slickPrev()}
        />
        <div className={styles.pagination}>
          {currentSlide}
          <div className={styles.paginationSlideDevider}>/</div>
          <span>{sliders.length}</span>
        </div>
        <ArrowRLeft
          className={styles.arrowLeft}
          onClick={() => slider.current?.slickNext()}
        />
      </div>
    );
  };

  const settings = {
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    overflow: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "300px",
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          centerPadding: "250px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "180px",
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex + 1);
    },
    arrows: false,
    centerMode: true,
    draggable: true,
    centerPadding: "160px",
    className: `${styles.slider} ${styles.variableWidth}`,
  };

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <Slider {...settings} ref={slider}>
          {sliders.map((slider) => (
            <div
              key={slider}
              className={styles.sliderImgWrapper}
              style={{ width: slider.width }}
            >
              <div>
                <img src={slider.url} alt={`${slider.url}`} />
              </div>
            </div>
          ))}
        </Slider>
        {renderArrows()}
      </div>
    </div>
  );
};

export default SliderSection;
