import HomeShield from "../svg/HomeShield";
import styles from "./DecadeCard.module.scss";
interface DecadeCardProps {
  year: number;
  title: string;
  description: string;
}

const DecadeCard = ({ year, title, description }: DecadeCardProps) => {
  return (
    <div className={styles.decadeCardWrapper}>
      <div className={styles.HomeIconWrapper}>
        <HomeShield />
      </div>
      <div className={styles.decadeCardInnerWrapper}>
        <p className={styles.decadeYear}>{year}</p>
        <p className={styles.decadeTitle}>{title}</p>
        <p className={styles.decadeCardDescription}>{description}</p>
      </div>
    </div>
  );
};

export default DecadeCard;
