import CoreTitles from "@/components/common/core-titles/CoreTitles";
import styles from "./HomeProjects.module.scss";

const HomeProjects = () => {
  return (
    <div className={styles.projectsWrapper}>
      <CoreTitles
        subTitle="Client Feedback"
        title="Hear from Our Clients"
        intro="Genuine experiences shared by our clients about working with our team."
      />
    </div>
  );
};

export default HomeProjects;
