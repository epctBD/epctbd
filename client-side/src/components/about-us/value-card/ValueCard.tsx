import ValueIcon from "@/components/common/svg/ValueIcon";
import styles from "./ValueCard.module.scss";

const ValueCard = () => {
  return (
    <div className={styles.valueCardWrapper}>
      <ValueIcon />
      <div className={styles.textSection}>
        <p className={styles.title}>Innovation and Creativity</p>
        <p className={styles.subtitle}>
          Our dedication ensures projects that stand the test of time.
        </p>
      </div>
    </div>
  );
};

export default ValueCard;
