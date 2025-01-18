import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import demo_img from "../../../../public/Carousel/demo.png";
import HeroCarousel from "./hero-carousel/HeroCarousel";
import styles from "./Hero.module.scss";
import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { IProject } from "@/models/project.model";

interface HeroSectionProps {
  projects: IProject[];
}

const HeroSection = ({ projects }: HeroSectionProps) => {
  const router = useRouter();

  const featuredProjects = projects.filter((project) => project.isFeature);

  const [backgroundData, setBackgroundData] = useState<IProject>({
    _id: "1",
    name: "Baytus Salam Jame Mosque, Beanibazar",
    details:
      "This 9-story center integrates labs, consultation rooms, and offices, providing a streamlined space for high-quality healthcare services.",
    serviceType: "Healthcare Industry",
    category: "Architecture",
    isFeature: true,
    projectImages: [demo_img.src],
  });

  const updateBackground = (newData: IProject) => {
    setBackgroundData(newData);
  };

  return (
    <div className={styles.heroSection}>
      <div className={styles.backgroundImageWrapper}>
        <Image
          src={backgroundData.projectImages?.[0] || demo_img}
          alt="backgroundImage"
          className={styles.backgroundImage}
          width={1000}
          height={1000}
        />
      </div>
      <div className={styles.heroContentWrapper}>
        <div className={styles.heroContent}>
          <div className={styles.heroProjectTypeWrapper}>
            <motion.p
              className={styles.heroProjectType}
              key={backgroundData._id}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {backgroundData.serviceType}
            </motion.p>
          </div>
          <motion.p
            className={styles.heroTitle}
            key={backgroundData.name}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {backgroundData.name}
          </motion.p>
          <motion.p
            className={styles.heroIntro}
            key={backgroundData._id}
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
            {backgroundData.details}
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
              <CoreButton
                text="Contact Us"
                type="primaryHover"
                size="large"
                onClick={() => router.push("contact-us")}
              />
            </motion.div>
          </div>
        </div>
        <div className={styles.carouselContent}>
          <HeroCarousel
            updateBackground={updateBackground}
            projects={featuredProjects}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
