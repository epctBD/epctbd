import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./HeroCarousel.module.scss";

import Image, { StaticImageData } from "next/image";
import { carouselData } from "./CarouselData";

interface CarouselItem {
  id: number;
  imageId: StaticImageData;
  title: string;
  projectType: string;
  projectIntro: string;
}

interface HeroCarouselProps {
  updateBackground: (item: CarouselItem) => void; // Updated type
}

const HeroCarousel = ({ updateBackground }: HeroCarouselProps) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    beforeChange: (oldIndex: number, newIndex: number) => {
      const newBackgroundData = carouselData[newIndex % carouselData.length];
      updateBackground(newBackgroundData);
    },
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`slider-container carousel-wrapper ${styles.heroCarousel}`}>
      <Slider {...settings}>
        {carouselData.map((item) => (
          <div key={item.id} className={styles.carouselContainer}>
            <Image
              src={item.imageId}
              alt={item.title}
              className={styles.carouselImage}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
