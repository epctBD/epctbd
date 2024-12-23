import Marquee from "react-fast-marquee";
import styles from "./DecadeSectionView.module.scss";
import decadeData from "../about-us-view/DecadeData";
import DecadeCard from "@/components/common/decade-card/DecadeCard";

const DecadeSectionView = () => {
  return (
    <div className={styles.decadeSectionViewWrapper}>
      <div>
        <div className={styles.startTag}>
          <div className={styles.divider} />
          <p className={styles.tagText}>OUR HISTORY</p>
        </div>

        <p className={styles.tagTitle}>Our History at a Glance</p>
      </div>
      <div className={styles.marqueeWrapper}>
        <Marquee direction="left" pauseOnHover={true} speed={100}>
          {decadeData.map((data, index) => (
            <div key={index} className={styles.marqueeItem}>
              <DecadeCard
                year={data.year}
                title={data.title}
                description={data.description}
              />
            </div>
          ))}
        </Marquee>
        <Marquee direction="right" pauseOnHover={true} speed={100}>
          {decadeData.map((data, index) => (
            <div key={index} className={styles.marqueeItem}>
              <DecadeCard
                year={data.year}
                title={data.title}
                description={data.description}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default DecadeSectionView;
