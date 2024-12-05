import Image from "next/image";
import styles from "./ProjectCard.module.scss";
import MapIcons from "../svg/MapIcons";

export interface IProjectCardProps {
  id: string;
  title: string;
  location: string;
  imageSrc: string;
  type: string;
}

const ProjectCard = ({
  title,
  location,
  imageSrc,
  type,
}: IProjectCardProps) => {
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
