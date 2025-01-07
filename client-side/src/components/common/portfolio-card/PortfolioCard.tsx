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
          className={styles.portfolioFeatureImage}
          width={1280}
          height={600}
          style={{
            width: "100%",
            maxHeight: "600px",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />
      </div>

      <div
        className={`${styles.cardWrapper} ${
          position === "right" ? styles.cardRight : styles.cardLeft
        }`}
      >
        <div>
          <p className={styles.title}>{title}</p>
          <p className={styles.subTitle}>{subTitle}</p>
        </div>
        <div className={styles.actions}>
          <CoreButton text="See PDF" type="primary" />
          <CoreButton text="See Details" type="secondary" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
