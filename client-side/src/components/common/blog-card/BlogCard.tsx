import Image, { StaticImageData } from "next/image";
import styles from "./BlogCard.module.scss";
import { Button } from "antd";

export interface BlogCardProps {
  // id: number;
  title: string;
  description: string;
  image: StaticImageData;
  type: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  image,
  type,
}) => {
  return (
    <div className={styles.blogCardWrapper}>
      <div className={styles.blogImageWrapper}>
        <Image src={image} alt="blog-image" className={styles.blogImage} />
      </div>
      <div className={styles.blogContent}>
        <div className={styles.blogTypeWrapper}>
          <p className={styles.blogType}>{type}</p>
        </div>
        <div className={styles.blogTexts}>
          <p className={styles.blogTitle}>{title}</p>
          <p className={styles.blogDescription}>{description}</p>
        </div>
        <Button type="primary" variant="text">
          Read More
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
