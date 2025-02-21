import Image from "next/image";
import banner_bg from "./banner.jpeg";
import styles from "./CoreBanner.module.scss";
import { motion } from "framer-motion";

interface ICoreBannerProps {
  title: string;
  subtitle: string;
  crumbOne: string;
  crumbTwo: string;
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const CoreBanner = ({
  title,
  subtitle,
  crumbOne,
  crumbTwo,
}: ICoreBannerProps) => {
  return (
    <div className={styles.coreBannerWrapper}>
      <Image
        src={banner_bg}
        alt="Banner Background"
        className={styles.bannerBackgroundImage}
      />

      <div className={styles.bannerTextWrapepr}>
        <motion.p
          className={styles.title}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={0}
        >
          {title}
        </motion.p>
        <motion.p
          className={styles.SubTitle}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={0.2}
        >
          {subtitle}
        </motion.p>
      </div>

      <div className={styles.breadCrumbWrapper}>
        <p className={styles.crumbOne}>{crumbOne}</p> /
        <p className={styles.crumbTwo}>{crumbTwo}</p>
      </div>
    </div>
  );
};

export default CoreBanner;
