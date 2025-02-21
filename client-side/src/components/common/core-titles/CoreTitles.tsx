import styles from "./CoreTitles.module.scss";
import { motion } from "framer-motion";

interface CoreTitlesProps {
  subTitle: string;
  title: string;
  intro: string;
  className?: string;
}

const containerVariants = {
  visible: { transition: { staggerChildren: 0.2 } }, // Stagger effect
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const CoreTitles = ({ subTitle, title, intro, className }: CoreTitlesProps) => {
  return (
    <motion.div
      className={`${styles.coreTitleWrapper} ${className || ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
    >
      <div className={styles.coreTitleInnerWrapper}>
        <motion.p className={styles.CoreSubTitle} variants={textVariants}>
          {subTitle}
        </motion.p>
        <motion.p className={styles.coreTitle} variants={textVariants}>
          {title}
        </motion.p>
        <motion.p className={styles.coreTitleIntro} variants={textVariants}>
          {intro}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default CoreTitles;
