import Image, { StaticImageData } from "next/image";
import styles from "./ServiceCard.module.scss";
import { useRouter } from "next/router";

interface IServiceCardProps {
  image: StaticImageData;
  title: string;
  subtitle: string;
  slug: string;
}

const ServiceCard = ({ image, title, subtitle, slug }: IServiceCardProps) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/services/${slug}`);
  };

  return (
    <div className={styles.ServiceCardWrapper} onClick={handleCardClick}>
      <div className={styles.ServiceImageWrapper}>
        <Image src={image} alt={title} width={128} height={80} />
      </div>
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.subTitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
