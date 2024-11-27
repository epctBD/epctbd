import Image from "next/image";
import banner_bg from "./banner.jpeg";
import styles from "./CoreBanner.module.scss";

interface ICoreBannerProps {
  title: string;
  subtitle: string;
  crumbOne: string;
  crumbTwo: string;
}

const CoreBanner = ({
  title,
  subtitle,
  crumbOne,
  crumbTwo,
}: ICoreBannerProps) => {
  return (
    <div className={styles.coreBannerWrapper}>
      <Image
        src={banner_bg}
        alt="Banner Background"
        className={styles.bannerBackgroundImage}
      />

      <div className={styles.bannerTextWrapepr}>
        <p className={styles.title}>{title}</p>
        <p className={styles.SubTitle}>{subtitle}</p>
      </div>

      <div className={styles.breadCrumbWrapper}>
        <p className={styles.crumbOne}>{crumbOne}</p> /
        <p className={styles.crumbTwo}>{crumbTwo}</p>
      </div>
    </div>
  );
};

export default CoreBanner;
