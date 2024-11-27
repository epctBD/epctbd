import Image from "next/image";
import styles from "./PortfolioCard.module.scss";
import image from "../core-components/core-banner/banner.jpeg";
import CoreButton from "../core-components/core-button/CoreButton";

const PortfolioCard = () => {
  return (
    <div className={styles.portfolioWrapper}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt="Portfolio feature image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.portfolioFeatureImage}
        />

        <div className={styles.cardWrapper}>
          <p className={styles.title}>
            Innovative Urban Development at City Square
          </p>
          <p className={styles.subTitle}>
            A blend of modern architecture and sustainability, this project
            redefines city living with energy-efficient solutions and stylish
            spaces.
          </p>
          <div className={styles.actions}>
            <CoreButton text="See PDF" type="primary" />
            <CoreButton text="See Details" type="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
