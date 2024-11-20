import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    autoplaySpeed: 5000,
    cssEase: "linear",
    beforeChange: (oldIndex: number, newIndex: number) => {
      const newBackgroundData = carouselData[newIndex % carouselData.length];
      updateBackground(newBackgroundData); // Pass the entire object
    },
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {carouselData.map((item) => (
          <div key={item.id} className="carousel-container">
            <Image
              style={{ borderRadius: "15px" }}
              src={item.imageId}
              alt={item.title}
              width={256}
              height={180}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
