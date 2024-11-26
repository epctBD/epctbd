import Image, { StaticImageData } from "next/image";
import styles from "./ServiceCard.module.scss";

interface IServiceCardProps {
  image: StaticImageData;
  title: string;
  subtitle: string;
}

const ServiceCard = ({ image, title, subtitle }: IServiceCardProps) => {
  return (
    <div className={styles.ServiceCardWrapper}>
      <div className={styles.ServiceImageWrapper}>
        <Image src={image} alt={title} />
      </div>
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.subTitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
