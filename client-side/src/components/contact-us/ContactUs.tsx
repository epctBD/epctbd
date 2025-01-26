import { Col, Row } from "antd";
import styles from "./ContactUs.module.scss";
import ContactPhone from "../common/svg/ContactPhone";
import ContactEmail from "../common/svg/ContactEmail";
import ContactLocation from "../common/svg/ContactLocation";
import ContactUsForm from "./ContactUsForm";
import Image from "next/image";
import map_img from "@/assets/images/EPCT-MAP.jpg";

const ContactUs = () => {
  const handleMapClick = () => {
    const address = "1600 Amphitheatre Parkway, Mountain View, CA";
    const mapUrl = "https://maps.app.goo.gl/JmUdSSeqGDr4SRha8";
    window.open(mapUrl, "_blank");
  };

  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactLayout}>
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={10}>
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
          <Col xs={24} lg={14}>
            <ContactUsForm />
          </Col>
        </Row>
        <div className={styles.mapImageWrapper} onClick={handleMapClick}>
          <div className={styles.mapTextWrapper}>
            <div className={styles.singleSection}>
              <div className={styles.iconSection}>
                <ContactLocation />
              </div>
              <div className={styles.textSection}>
                <p className={styles.type}>Visit our office</p>
                <p className={styles.value}>Sunday - Thursday </p>
                <p className={styles.valueTime}>(9:00 am - 5.00 pm)</p>
              </div>
            </div>
          </div>
          <Image
            src={map_img}
            alt="Map Image"
            className={styles.mapImage}
            width={1248}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
