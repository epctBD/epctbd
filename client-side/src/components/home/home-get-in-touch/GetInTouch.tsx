import CoreTitles from "@/components/common/core-titles/CoreTitles";
import styles from "./GetInTouch.module.scss";
import ClockIconGetInTouch from "@/components/common/svg/ClockIconGetInTouch";
import LocationIconGetInTouch from "@/components/common/svg/LocationIconGetInTouch";
import MailIconGetInTouch from "@/components/common/svg/MailIconGetInTouch";

const GetInTouch = () => {
  return (
    <div>
      <CoreTitles
        subTitle="CONTACT US"
        title="Get In Touch With Us"
        intro="Celebrating our success in completing great projects together"
      />
      <div className={styles.getInTouchWrapper}>
        <div className={styles.getInTouchInnerWrapper}>
          <div className={styles.getInTouchCard}>
            <div className={styles.iconWrapper}>
              <ClockIconGetInTouch />
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.title}>Office Time</p>
              <p className={styles.texts}>
                Sunday - Thursday
                <br />
                9:00 am - 5.00 pm
              </p>
            </div>
          </div>
          <div className={styles.getInTouchCard}>
            <div className={styles.iconWrapper}>
              <LocationIconGetInTouch />
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.title}>Our Address</p>
              <p className={styles.texts}>
                27/3 Jalalabad, Subidbazar,
                <br />
                Sylhet, Bangladesh
              </p>
            </div>
          </div>
          <div className={styles.getInTouchCard}>
            <div className={styles.iconWrapper}>
              <MailIconGetInTouch />
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.title}>Contact Us</p>
              <p className={styles.texts}>
                info@epctbd.com
                <br />
                (+88)01711920415
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
