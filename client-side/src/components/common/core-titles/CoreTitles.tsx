import styles from "./CoreTitles.module.scss";

interface CoreTitlesProps {
  subTitle: string;
  title: string;
  intro: string;
  className?: string;
}

const CoreTitles: React.FC<CoreTitlesProps> = ({
  subTitle,
  title,
  intro,
  className,
}) => {
  return (
    <div className={`${styles.coreTitleWrapper} ${className || ""}`}>
      <div className={styles.coreTitleInnerWrapper}>
        <p className={styles.CoreSubTitle}>{subTitle}</p>
        <p className={styles.coreTitle}>{title}</p>
        <p className={styles.coreTitleIntro}>{intro}</p>
      </div>
    </div>
  );
};

export default CoreTitles;
