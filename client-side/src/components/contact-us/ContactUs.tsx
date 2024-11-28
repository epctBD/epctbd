import { Col, Row } from "antd";
import CoreBanner from "../common/core-components/core-banner/CoreBanner";
import styles from "./ContactUs.module.scss";
import ContactPhone from "../common/svg/ContactPhone";
import ContactEmail from "../common/svg/ContactEmail";
import ContactLocation from "../common/svg/ContactLocation";
import ContactUsForm from "./ContactUsForm";

const ContactUs = () => {
  return (
    <div className={styles.contactWrapper}>
      <CoreBanner
        title="Contact Us"
        subtitle="Contact us"
        crumbOne="Home"
        crumbTwo="Contact Us"
      />
      <div className={styles.contactLayout}>
        <Row gutter={[24, 24]}>
          <Col span={8}>
            <p className={styles.getInTouch}>Get In Touch</p>
            <p className={styles.title}>
              CONTACT US FOR RELIABLE EXPERT SOLUTIONS
            </p>
            <div className={styles.contactCard}>
              <div className={styles.singleSection}>
                <ContactPhone />
                <div className={styles.textSection}>
                  <p className={styles.type}>Call us anytime</p>
                  <p className={styles.value}>+880 1711920415</p>
                </div>
              </div>
              <div className={styles.singleSection}>
                <ContactEmail />
                <div className={styles.textSection}>
                  <p className={styles.type}>Email</p>
                  <p className={styles.value}>info@epctbd.com</p>
                </div>
              </div>
              <div className={styles.singleSection}>
                <ContactLocation />
                <div className={styles.textSection}>
                  <p className={styles.type}>Visit our office</p>
                  <p className={styles.value}>
                    27/3 Jalalabad ,Sylhet Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col span={16}>
            <ContactUsForm />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactUs;
