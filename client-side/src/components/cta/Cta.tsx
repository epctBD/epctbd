import { useRouter } from "next/router";
import CoreButton from "../common/core-components/core-button/CoreButton";
import styles from "./Cta.module.scss";

const Cta = () => {
  const router = useRouter();
  const goToContactUs = () => {
    router.push("contact-us");
  };

  const goToProjects = () => {
    router.push("projects");
  };

  return (
    <div className={styles.ctaWrapper}>
      <div className={styles.headerWrapper}>
        <p className={styles.title}>
          Have Questions in Mind? Let Us Understand Your Needs
        </p>
      </div>
      <div className={styles.ctaActions}>
        <CoreButton text="Contact Us" type="primary" onClick={goToContactUs} />
        <CoreButton
          text="View Projects"
          type="secondary"
          onClick={goToProjects}
        />
      </div>
    </div>
  );
};

export default Cta;
