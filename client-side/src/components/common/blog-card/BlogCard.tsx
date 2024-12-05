import Image, { StaticImageData } from "next/image";
import styles from "./BlogCard.module.scss";
import { Button } from "antd";

const truncateByWordCount = (text: string, wordLimit: number): string => {
  if (!text || typeof text !== "string") {
    return "";
  }

  const words = text.split(" ");
  if (words.length > wordLimit) {
    return `${words.slice(0, wordLimit).join(" ")}...`;
  }
  return text;
};

// BlogCardProps now properly uses destructuring
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
          <p className={styles.blogTitle}>{truncateByWordCount(title, 7)}</p>
          <p className={styles.blogDescription}>
            {truncateByWordCount(description, 16)}
          </p>
        </div>
        <Button type="primary" variant="text">
          Read More
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
