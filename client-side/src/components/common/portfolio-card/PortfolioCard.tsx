import Image from "next/image";
import styles from "./PortfolioCard.module.scss";
import CoreButton from "../core-components/core-button/CoreButton";

interface IPortfolioCardProps {
  imageSrc: string;
  title: string;
  subTitle: string;
  position?: "left" | "right";
}

const PortfolioCard = ({
  imageSrc,
  title,
  subTitle,
  position = "left",
}: IPortfolioCardProps) => {
  return (
    <div className={styles.portfolioWrapper}>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt="Portfolio feature image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.portfolioFeatureImage}
        />

        <div
          className={`${styles.cardWrapper} ${
            position === "right" ? styles.cardRight : styles.cardLeft
          }`}
        >
          <p className={styles.title}>{title}</p>
          <p className={styles.subTitle}>{subTitle}</p>
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
