import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import img1 from "../../../../public/Carousel/1.png";
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
    imageId: img1,
    title: "Baytus Salam Jame Mosque, Beanibazar",
    projectType: "Healthcare Industry",
    projectIntro:
      "This 9-story center integrates labs, consultation rooms, and offices, providing a streamlined space for high-quality healthcare services.",
  });

  const updateBackground = (newData: CarouselItem) => {
    setBackgroundData(newData);
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <Image
          src={backgroundData.imageId}
          alt="Building Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Content Section */}
      <div className={styles.heroContent}>
        <div>
          <div>
            <p className={styles.heroProjectType}>
              {backgroundData.projectType}
            </p>
          </div>
          <p className={styles.heroTitle}>{backgroundData.title}</p>
          <p style={{ color: "#D4D6D8" }}>{backgroundData.projectIntro}</p>
          <div>
            <Button type="primary">See Projects</Button>
            <Button variant="outlined">Contact us</Button>
          </div>
        </div>
      </div>
      <div className={styles.carouselContent}>
        <HeroCarousel updateBackground={updateBackground} />
      </div>
    </section>
  );
};

export default HeroSection;
