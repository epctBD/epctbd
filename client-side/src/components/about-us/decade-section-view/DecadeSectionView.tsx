import Marquee from "react-fast-marquee";
import styles from "./DecadeSectionView.module.scss";
import decadeData from "../about-us-view/DecadeData";
import DecadeCard from "@/components/common/decade-card/DecadeCard";
import { motion } from "framer-motion";

const containerVariants = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const DecadeSectionView = () => {
  return (
    <div className={styles.decadeSectionViewWrapper}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={containerVariants}
      >
        <motion.div className={styles.startTag} variants={textVariants}>
          <div className={styles.divider} />
          <motion.p className={styles.tagText} variants={textVariants}>
            OUR HISTORY
          </motion.p>
        </motion.div>

        <motion.p className={styles.tagTitle} variants={textVariants}>
          Our History at a Glance
        </motion.p>
      </motion.div>
      <div className={styles.marqueeWrapper}>
        <Marquee direction="left" pauseOnHover={true} speed={100}>
          {decadeData.map((data, index) => (
            <div key={index} className={styles.marqueeItem}>
              <DecadeCard
                year={data.year}
                title={data.title}
                description={data.description}
              />
            </div>
          ))}
        </Marquee>
        <Marquee direction="right" pauseOnHover={true} speed={100}>
          {decadeData.map((data, index) => (
            <div key={index} className={styles.marqueeItem}>
              <DecadeCard
                year={data.year}
                title={data.title}
                description={data.description}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default DecadeSectionView;
