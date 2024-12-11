import Image from "next/image";
import { Input } from "antd";
import styles from "./SignIn.module.scss";
import logo from "../../../public/images/epct_logo.png";
import CoreButton from "../common/core-components/core-button/CoreButton";

const SignIn = () => {
  return (
    <div className={styles.signInWrapper}>
      <div className={styles.signInInnerWrapper}>
        <Image src={logo} alt="epct-logo" />

        <div className={styles.signInFormWrapper}>
          <p className={styles.signInText}>Sign In</p>
          <div className={styles.signInFormInnerWrapper}>
            <div className={styles.adminInputWrapper}>
              <Input placeholder="Email" className={styles.adminInput} />
            </div>

            <div
              className={styles.adminInputWrapper}
              style={{ width: "500px" }}
            >
              <Input.Password
                placeholder="Password"
                className={styles.adminInput}
              />
            </div>

            <div>
              {" "}
              <CoreButton text="Login" type="primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
