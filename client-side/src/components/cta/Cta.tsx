import CoreButton from "../common/core-components/core-button/CoreButton";
import styles from "./Cta.module.scss";

const Cta = () => {
  return (
    <div className={styles.ctaWrapper}>
      <div className={styles.headerWrapper}>
        <p className={styles.title}>
          Ready to Bring Your Vision to Life? Let’s Build Together!
        </p>
        <p className={styles.subTitle}>
          This 9-story center integrates labs, consultation rooms, and offices,
          providing a-quality healthcare services. This 9-story center
          integrates labs.
        </p>
      </div>
      <div className={styles.ctaActions}>
        <CoreButton text="Contact Us" type="primary" />
        <CoreButton text="See More" type="secondary" />
      </div>
    </div>
  );
};

export default Cta;
