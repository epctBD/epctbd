import { Col, Row } from "antd";
import styles from "./AboutUsView.module.scss";
import Image from "next/image";
import img from "../about-us.png";
import CoreButton from "@/components/common/core-components/core-button/CoreButton";

const AboutUsView = () => {
  return (
    <div className={styles.aboutUsWrapper}>
      <Row gutter={[48, 24]} align="middle">
        <Col span={11}>
          <div className={styles.leftSide}>
            <div className={styles.imageWrapper}>
              <Image src={img} alt="About us image" />
            </div>
          </div>
        </Col>
        <Col span={13}>
          <div className={styles.rightSide}>
            <div className={styles.startTag}>
              <div className={styles.divider} />
              <p className={styles.tagText}>WHO WE ARE</p>
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.title}>
                We are biggest Regional Consulting Firm in Sylhet Region Since
                1991
              </p>
              <p className={styles.subtitle}>
                ENGINEERING PLANNING CONSULTANCY TEAM (EPCT) offers specialized
                services in civil engineering, including urban planning,
                architecture, structural and foundation engineering, water
                resources, roads and highways, surveying, and soil
                investigation. Their multidisciplinary approach and commitment
                to innovation drive EPCT’s team, which aims to transfer
                technology for societal benefit and environmental improvement.
                With over 32 years of experience, EPCT has become the largest
                regional consulting firm in the Sylhet region.
              </p>
              <CoreButton
                isFullWidth={false}
                text="Contact Us"
                type="primary"
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUsView;
