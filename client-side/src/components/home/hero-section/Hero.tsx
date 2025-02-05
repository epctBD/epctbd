import React, { useState } from "react";
import Image from "next/image";
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
  const length = featuredProjects.length;

  const [backgroundData, setBackgroundData] = useState<IProject>({
    _id: featuredProjects[length - 1]?._id,
    name: featuredProjects[length - 1]?.name,
    details: featuredProjects[length - 1]?.details,
    serviceType: featuredProjects[length - 1]?.serviceType,
    category: featuredProjects[length - 1]?.category,
    isFeature: featuredProjects[length - 1]?.isFeature,
    projectImages: featuredProjects[length - 1]?.projectImages,
    projectSlug: featuredProjects[length - 1]?.projectSlug,
  });

  const updateBackground = (newData: IProject) => {
    setBackgroundData(newData);
  };

  return (
    <div className={styles.heroSection}>
      <div className={styles.backgroundImageWrapper}>
        <Image
          src={backgroundData?.projectImages?.[0] || ""}
          alt="backgroundImage"
          className={styles.backgroundImage}
          width={1000}
          height={1000}
          objectFit="cover"
        />
      </div>

      <div className={styles.heroContentWrapper}>
        <div className={styles.heroContent}>
          <div className={styles.heroProjectTypeWrapper}>
            <motion.p
              className={styles.heroProjectType}
              key={backgroundData?._id}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {backgroundData?.serviceType}
            </motion.p>
          </div>
          <motion.p
            className={styles.heroTitle}
            key={backgroundData?.name}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {backgroundData?.name}
          </motion.p>
          <motion.p
            className={styles.heroIntro}
            key={backgroundData?._id}
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
            {backgroundData?.details}
          </motion.p>

          <div className={styles.heroButtonWrapper}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <CoreButton
                text="See Projects"
                type="primary"
                onClick={() =>
                  router.push(`projects/${backgroundData?.projectSlug}`)
                }
              />
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
