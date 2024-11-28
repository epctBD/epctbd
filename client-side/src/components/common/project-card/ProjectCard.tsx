import Image from "next/image";
import styles from "./ProjectCard.module.scss";
import MapIcons from "../svg/MapIcons";
import { ProjectCardItem } from "@/components/home/home-projects/ProjectData";

const ProjectCard: React.FC<ProjectCardItem> = ({
  title,
  location,
  imageSrc,
  type,
}) => {
  return (
    <div className={styles.projectCardWrapper}>
      <div className={styles.proejectImageWrapper}>
        <Image
          className={styles.projectImage}
          src={imageSrc}
          alt={title}
          fill
        />
      </div>
      <div className={styles.projectDetailsWrapper}>
        <p className={styles.projectTitle}>{title}</p>
        <div className={styles.projectLocationWrapper}>
          <MapIcons />
          <p className={styles.projectLocation}>{location}</p>
        </div>
      </div>
      <p className={styles.projectType}>{type}</p>
    </div>
  );
};

export default ProjectCard;
