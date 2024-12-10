import { Col, Row } from "antd";
import img from "../about-us.png";
import Image from "next/image";
import styles from "./FounderSection.module.scss";
import ProfileTwitter from "@/components/common/svg/ProfileTwitter";
import ProfileFacebook from "@/components/common/svg/ProfileFacebook";
import ProfileLinkedin from "@/components/common/svg/ProfileLinkedin";

const FounderSection = () => {
  return (
    <Row gutter={[24, 24]} justify="center">
      <Col xs={24} lg={12}>
        <div className={styles.founderImageSection}>
          <div className={styles.founderImageWrapper}>
            <Image src={img} alt="About us image" />
          </div>
        </div>
      </Col>
      <Col xs={24} lg={12}>
        <div className={styles.founderDetails}>
          <p className={styles.title}>
            Our mission has always been to transform challenges into
            opportunities, delivering excellence and innovation in every project
            we undertake.
          </p>

          <div>
            <p className={styles.name}>Ahmad Aziz</p>
            <p className={styles.position}>Founder & CEO</p>
          </div>

          <div className={styles.founderSocial}>
            <ProfileFacebook />
            <ProfileTwitter />
            <ProfileLinkedin />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default FounderSection;
