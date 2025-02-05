import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./HeroCarousel.module.scss";

import Image from "next/image";
import { IProject } from "@/models/project.model";

interface HeroCarouselProps {
  projects: IProject[];
  updateBackground: (project: IProject) => void;
}

const HeroCarousel = ({ projects, updateBackground }: HeroCarouselProps) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: projects.length < 3 ? projects.length : 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    beforeChange: (oldIndex: number, newIndex: number) => {
      const newBackgroundData = projects[newIndex % projects.length];
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
        {projects.map((project) => (
          <div
            key={project._id}
            className={styles.carouselContainer}
            onClick={() => updateBackground(project)}
            style={{ cursor: "pointer", outline: "none" }}
          >
            <Image
              src={project.projectImages?.[0] || "/fallback-image.png"}
              alt={project.name}
              className={styles.carouselImage}
              width={500}
              height={300}
            />
            <div className={styles.carouselContent}>
              <h3 className={styles.projectName}>{project.name}</h3>
              <p className={styles.projectType}>{project.serviceType}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
