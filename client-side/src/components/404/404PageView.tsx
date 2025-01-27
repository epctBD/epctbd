import React from "react";
import { useRouter } from "next/router";
import styles from "./404PageView.module.scss";
import CoreButton from "../common/core-components/core-button/CoreButton";

const NotFoundPageView = () => {
  const router = useRouter();
  const goToHome = () => {
    router.push("/");
  };

  return (
    <div className={styles.notFoundWrapper}>
      <div className={styles.notFoundContent}>
        <div className={styles.errorNumber}>404!</div>
        <div className={styles.errorText}>Oops! Page not found</div>
        <div className={styles.errorDescription}>
          The page you are looking for might have been removed, had its name
          changed, or is unavailable.
        </div>
        <CoreButton type="primary" onClick={goToHome} text="Go to Home" />
      </div>
    </div>
  );
};

export default NotFoundPageView;
