import styles from "./ProjectCard.module.scss";
import MapIcons from "../svg/MapIcons";
import Image from "next/image";

export interface IProjectCardProps {
  id: string;
  title: string;
  location: string;
  imageSrc: string;
  type: string;
  imageHeight: number;
}

const ProjectCard = ({
  title,
  location,
  imageSrc,
  type,
  imageHeight = 460,
}: IProjectCardProps) => {
  return (
    <div className={styles.projectCardWrapper}>
      <div
        className={styles.proejectImageWrapper}
        style={{ height: `${imageHeight}px` }}
      >
        <Image
          className={styles.projectImage}
          src={imageSrc}
          alt={title}
          layout="fill"
          // objectFit="cover"
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
