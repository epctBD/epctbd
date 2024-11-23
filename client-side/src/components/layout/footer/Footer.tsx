import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../../../public/images/epct_logo.png";
import { Col, Divider, Row } from "antd";
import Image from "next/image";
import PhoneIcon from "@/components/common/svg/PhoneIcon";
import MessageIcon from "@/components/common/svg/MessageIcon";
import MapIcons from "@/components/common/svg/MapIcons";
import FacebookIcon from "@/components/common/svg/FacebookIcon";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <Row gutter={[24, 24]}>
        <Col xs={0} sm={0} md={6}>
          <div className={styles.logoContainer}>
            <Image src={logo} alt="Footer Logo" layout="responsive" />
          </div>
        </Col>
        <Col xs={12} sm={8} md={6}>
          <div className={styles.listWrapepr}>
            <h4 className={styles.heading}>Company</h4>
            <ul className={styles.list}>
              <li>About</li>
              <li>FAQs</li>
              <li>Blog</li>
              <li>Service</li>
            </ul>
          </div>
        </Col>
        <Col xs={12} sm={8} md={6}>
          <div className={styles.listWrapepr}>
            <h4 className={styles.heading}>Projects</h4>
            <ul className={styles.list}>
              <li>Government Projects</li>
              <li>Private Projects</li>
              <li>Highlighted Projects</li>
              <li>Ongoing Projects</li>
            </ul>
          </div>
        </Col>
        <Col xs={24} sm={8} md={6}>
          <div className={styles.listWrapepr}>
            <h4 className={styles.heading}>Information</h4>
            <ul className={styles.list}>
              <li>
                <PhoneIcon /> 01711920415
              </li>
              <li>
                <MessageIcon /> info@epctbd.com
              </li>
              <li>
                <MapIcons /> 27/3 Jalalabad, Sylhet, Bangladesh
              </li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row gutter={[24, 24]} align="middle" className={styles.marginTop24}>
        <Col xs={10} sm={15} md={0}>
          <div className={styles.logoContainer}>
            <Image src={logo} alt="Footer Logo" layout="responsive" />
          </div>
        </Col>
        <Col xs={14} sm={9} md={24}>
          <div className={styles.socialSection}>
            <h4 className={styles.followTitle}>Follow us</h4>
            <div className={styles.iconWrapper}>
              <FacebookIcon />
              <FacebookIcon />
              <FacebookIcon />
            </div>
          </div>
        </Col>
      </Row>

      <Divider className={styles.divider} />

      <div className={styles.footerBottom}>
        <p className={styles.creditText}>
          Design & Development by <span>VINT SOLUTION</span>
        </p>
        <p className={styles.reservedText}>
          © 2024 All Rights Reserved by EpctBd.Com
        </p>
      </div>
    </div>
  );
};

export default Footer;
