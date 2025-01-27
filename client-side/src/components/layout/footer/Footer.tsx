import React from "react";
import styles from "./Footer.module.scss";
import logo from "@/assets/images/epct-main-logo.png";
import { Col, Divider, Row } from "antd";
import Image from "next/image";
import PhoneIcon from "@/components/common/svg/PhoneIcon";
import MessageIcon from "@/components/common/svg/MessageIcon";
import MapIcons from "@/components/common/svg/MapIcons";
import FacebookIcon from "@/components/common/svg/FacebookIcon";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  const handelProjectRouting = (path: string) => {
    router.push({
      pathname: "/projects",
      query: { tab: path },
    });
  };

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
              <li onClick={() => router.push("about-us")}>About</li>
              <li onClick={() => router.push("resources")}>Blogs</li>
              <li onClick={() => router.push("resources")}>Books</li>
              <li onClick={() => router.push("services")}>Service</li>
            </ul>
          </div>
        </Col>
        <Col xs={12} sm={8} md={6}>
          <div className={styles.listWrapepr}>
            <h4 className={styles.heading}>Projects</h4>
            <ul className={styles.list}>
              <li onClick={() => handelProjectRouting("Ongoing Projects")}>
                Ongoing Projects
              </li>
              <li onClick={() => handelProjectRouting("Government Projects")}>
                Government Projects
              </li>
              <li onClick={() => handelProjectRouting("Private Projects")}>
                Private Projects
              </li>
              <li onClick={() => handelProjectRouting("Highlighted Projects")}>
                Highlighted Projects
              </li>
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
          Design & Development by{" "}
          <a href="vintsolution.com" target="_blank">
            VINT SOLUTION
          </a>
        </p>
        <p className={styles.reservedText}>
          © 2024 All Rights Reserved by EpctBd.Com
        </p>
      </div>
    </div>
  );
};

export default Footer;
