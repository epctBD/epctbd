import { Col, Grid, Row } from "antd";
import styles from "./HomeAbout.module.scss";
import home_about from "@/assets/images/home-about.png";
import home_full from "@/assets/images/hero_image_2.jpeg";
import Image from "next/image";
import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import { useRouter } from "next/router";

const { useBreakpoint } = Grid;

const HomeAbout = () => {
  const screens = useBreakpoint();
  const router = useRouter();
  const goToAboutUs = () => {
    router.push("about-us");
  };

  return (
    <div className={styles.homeAboutWrapper}>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <div className={styles.homeAboutImageWrapper}>
            {screens.md ? (
              <Image src={home_about} alt="Landing Page's About Us" />
            ) : (
              <Image src={home_full} alt="Landing Page's About Us" />
            )}
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div className={styles.sinceText}>
            <div className={styles.divider} />
            <p> Who We Are</p>
          </div>
          <p className={styles.title}>
            Sylhet’s Leading Consulting Firm Since 1991
          </p>
          <p className={styles.subtitle}>
            At EPCT - Engineering Planning Consultancy Team, we’re architects,
            engineers, advisors, and planners designing a sustainable future.
            With over 32 years of experience, we provide smart, forward-thinking
            solutions in Sylhet. <br />
            <br />
            From essential infrastructure to advanced manufacturing, we worked
            with governments, private clients, and communities to create
            solutions that pass the test of time and meet today’s challenges.
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

          <CoreButton text="About Us" type="secondary" onClick={goToAboutUs} />
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
