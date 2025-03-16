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
  category: string;
  slug: string;
}

const ProjectCard = ({
  title,
  location,
  imageSrc,
  type,
  category,
  slug,
}: IProjectCardProps) => {
  const router = useRouter();
  const goToDetails = () => {
    router.push(`projects/${slug}`);
  };

  const pdf_url =
    "https://res.cloudinary.com/dv5lxcotq/image/upload/v1738563241/uploaded_book/EPCT_-_Portfolio_-_MAJOR_WORK_UNDERTAKEN_THAT_BEST_ILLUSTRATES_QUALIFICATIONS.pdf";

  console.log("pdf url", category);
  const openPDF = () => {
    if (pdf_url) {
      window.open(pdf_url, "_blank");
    }
  };

  return (
    <div
      className={styles.projectCardWrapper}
      onClick={category === "Government Projects" ? openPDF : goToDetails}
    >
      <div className={styles.proejectImageWrapper}>
        <Image
          className={styles.projectImage}
          src={imageSrc}
          alt={title}
          height={435}
          width={410}
          objectFit="cover"
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
