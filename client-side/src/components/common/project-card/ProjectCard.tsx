import styles from "./ProjectCard.module.scss";
import MapIcons from "../svg/MapIcons";
import Image from "next/image";
import { useRouter } from "next/router";

export interface IProjectCardProps {
  id: string;
  title: string;
  location: string;
  imageSrc: string;
  type: string;
  imageHeight: number;
  slug: string;
}

const ProjectCard = ({
  title,
  location,
  imageSrc,
  type,
  imageHeight = 460,
  slug,
}: IProjectCardProps) => {
  const router = useRouter();
  const goToDetails = () => {
    router.push(`project/${slug}`);
  };

  return (
    <div className={styles.projectCardWrapper} onClick={goToDetails}>
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
