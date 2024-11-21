import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../../../public/images/epct_logo.png";
import { Col, Row } from "antd";
import Image from "next/image";

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
              <li>📞 01711920415</li>
              <li>📧 info@epctbd.com</li>
              <li>📍 27/3 Jalalabad, Sylhet, Bangladesh</li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row gutter={[24, 24]} align="middle" className={styles.marginTop24}>
        <Col xs={24} sm={16} md={0}>
          <div className={styles.logoContainer}>
            <Image src={logo} alt="Footer Logo" layout="responsive" />
          </div>
        </Col>
        <Col xs={24} sm={8} md={24}>
          <div>
            <h4 className={styles.heading}>Follow us</h4>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
