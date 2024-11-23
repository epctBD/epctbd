import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import demo_img from "../../../../public/Carousel/demo.png";
import HeroCarousel from "./hero-carousel/HeroCarousel";
import styles from "./Hero.module.css";
import { Button } from "antd";

interface CarouselItem {
  id: number;
  imageId: StaticImageData;
  projectType: string;
  title: string;
  projectIntro: string;
}

const HeroSection: React.FC = () => {
  const [backgroundData, setBackgroundData] = useState<CarouselItem>({
    id: 1,
    imageId: demo_img,
    title: "Baytus Salam Jame Mosque, Beanibazar",
    projectType: "Healthcare Industry",
    projectIntro:
      "This 9-story center integrates labs, consultation rooms, and offices, providing a streamlined space for high-quality healthcare services.",
  });

  const updateBackground = (newData: CarouselItem) => {
    setBackgroundData(newData);
  };

  return (
    <div className={styles.heroSection}>
      <div className={styles.backgroundImageWrapper}>
        <Image
          src={backgroundData.imageId}
          alt="backgroundImage"
          className={styles.backgroundImage}
        />
        asdasdas
      </div>
      <div className={styles.heroContentWrapper}>
        <div className={styles.heroContent}>
          <div className={styles.heroProjectTypeWrapper}>
            <p className={styles.heroProjectType}>
              {backgroundData.projectType}
            </p>
          </div>
          <p className={styles.heroTitle}>{backgroundData.title}</p>
          <p className={styles.heroIntro}>{backgroundData.projectIntro}</p>
          <div className={styles.heroButtonWrapper}>
            <Button type="primary">See Projects</Button>
            <Button variant="outlined">Contact us</Button>
          </div>
        </div>
        <div className={styles.carouselContent}>
          <HeroCarousel updateBackground={updateBackground} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
