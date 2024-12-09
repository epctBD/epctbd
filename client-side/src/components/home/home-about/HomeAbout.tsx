import { Col, Row } from "antd";
import styles from "./HomeAbout.module.scss";
import home_about from "@/assets/images/home-about.png";
import Image from "next/image";
import CoreButton from "@/components/common/core-components/core-button/CoreButton";

const HomeAbout = () => {
  return (
    <div className={styles.homeAboutWrapper}>
      <Row gutter={[24, 24]}>
        <Col span={12}>
          <div className={styles.homeAboutImageWrapper}>
            <Image src={home_about} alt="Landing Page's About Us" />
          </div>
        </Col>
        <Col span={12}>
          <div className={styles.sinceText}>
            <div className={styles.divider} />
            <p>Since 19992</p>
          </div>
          <p className={styles.title}>ARCHITECTURE PLANNING & DESIGN</p>
          <p className={styles.subtitle}>
            This 9-story center integrates labs, consultation rooms, and
            offices, providing a streamlined space for high-quality healthcare
            services. This 9-story center integrates labs, consultation rooms,
            and offices, providing a streamlined space for high-quality
            healthcare services.
          </p>
          <div className={styles.bulletPoints}>
            <ul className={styles.bulletList}>
              <li>Design Expertise</li>
              <li>Project Management</li>
              <li>Client Collaboration</li>
              <li>Technical Skills</li>
              <li>Diverse Portfolio</li>
              <li>Regulatory Knowledge</li>
            </ul>
          </div>

          <CoreButton text="See More" type="secondary" />
        </Col>
      </Row>

      <div className={styles.statsSection}>
        <div className={styles.singleCard}>
          <p className={styles.number}>34+</p>
          <p className={styles.text}>Years of Experience</p>
        </div>
        <div className={styles.singleCard}>
          <p className={styles.number}>234+</p>
          <p className={styles.text}>Projects Completed</p>
        </div>
        <div className={styles.singleCard}>
          <p className={styles.number}>344+</p>
          <p className={styles.text}>Client Served</p>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
