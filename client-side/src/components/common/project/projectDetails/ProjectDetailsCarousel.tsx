import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ProjectDetailsCarousel.module.scss";

import Image, { StaticImageData } from "next/image";

interface CarouselItem {
  id: number;
  imageId: StaticImageData;
}

interface ProjectDetailsCarouselProps {
  data: CarouselItem[];
}

const ProjectDetailsCarousel = ({ data }: ProjectDetailsCarouselProps) => {
  const [selectedItem, setSelectedItem] = useState<CarouselItem>(data[0]);

  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    beforeChange: (oldIndex: number, newIndex: number) => {
      const newSelectedItem = data[newIndex % data.length];
      setSelectedItem(newSelectedItem);
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
    <div
      className={`slider-container carousel-wrapper ${styles.projectDetailsCarousel}`}
    >
      <div className={styles.largeImageWrapper}>
        <Image
          src={selectedItem.imageId}
          alt="Project-images"
          className={styles.largeImage}
          objectFit="cover"
          priority
        />
      </div>

      {/* Carousel  */}
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className={styles.carouselContainer}>
            <Image
              src={item.imageId}
              alt="project-image"
              className={styles.carouselImage}
              objectFit="cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectDetailsCarousel;
