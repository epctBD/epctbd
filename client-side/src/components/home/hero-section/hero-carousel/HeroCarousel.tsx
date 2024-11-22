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

const HeroCarousel: React.FC<HeroCarouselProps> = ({ updateBackground }) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    swipeToSlide: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    beforeChange: (oldIndex: number, newIndex: number) => {
      const newBackgroundData = carouselData[newIndex % carouselData.length];
      updateBackground(newBackgroundData);
    },
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {carouselData.map((item) => (
          <div key={item.id} className={styles["carousel-container"]}>
            <Image
              src={item.imageId}
              alt={item.title}
              className={styles["carousel-image"]}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
