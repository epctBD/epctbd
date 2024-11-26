import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import demo_img from "../../../../public/Carousel/demo.png";
import HeroCarousel from "./hero-carousel/HeroCarousel";
import styles from "./Hero.module.scss";
import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import { motion } from "framer-motion";

interface CarouselItem {
  id: number;
  imageId: StaticImageData;
  projectType: string;
  title: string;
  projectIntro: string;
}

const HeroSection = () => {
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
      </div>
      <div className={styles.heroContentWrapper}>
        <div className={styles.heroContent}>
          <div className={styles.heroProjectTypeWrapper}>
            <motion.p
              className={styles.heroProjectType}
              key={backgroundData.projectType}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {backgroundData.projectType}
            </motion.p>
          </div>
          <motion.p
            className={styles.heroTitle}
            key={backgroundData.title} // Re-trigger animation on title change
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {backgroundData.title}
          </motion.p>
          <motion.p
            className={styles.heroIntro}
            key={backgroundData.projectIntro}
            initial={{ clipPath: "inset(0 50% 0 50%)", opacity: 0 }}
            animate={{
              clipPath: "inset(0 0% 0 0%)",
              opacity: 1,
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            }}
          >
            {backgroundData.projectIntro}
          </motion.p>

          <div className={styles.heroButtonWrapper}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <CoreButton text="See Projects" type="primary" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <CoreButton text="Contact Us" type="secondary" />
            </motion.div>
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
