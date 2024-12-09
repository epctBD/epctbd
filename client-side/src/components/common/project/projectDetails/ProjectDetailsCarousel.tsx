import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ProjectDetailsCarousel.module.scss";

import Image from "next/image";

interface ProjectDetailsCarouselProps {
  data: string[];
}

const ProjectDetailsCarousel = ({ data }: ProjectDetailsCarouselProps) => {
  const [selectedItem, setSelectedItem] = useState(data[0]);

  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    swipeToSlide: true,
    autoplaySpeed: 2000,
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
          src={selectedItem}
          alt="Project-images"
          className={styles.largeImage}
          // objectFit="cover"
          // priority
          width={630}
          height={443}
        />
      </div>

      {/* Carousel  */}
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className={styles.carouselContainer}>
            <div className={styles.carouselImageWrapper}>
              <Image
                src={item}
                alt="project-image"
                className={styles.carouselImage}
                objectFit="cover"
                width={140}
                height={108}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectDetailsCarousel;
