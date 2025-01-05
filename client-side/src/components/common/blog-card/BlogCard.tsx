import Image from "next/image";
import styles from "./BlogCard.module.scss";
import { Button } from "antd";
import { useRouter } from "next/router";

export interface IBlogCardProps {
  slug: string;
  title: string;
  content: string;
  image: string;
  tag: string;
}

const BlogCard = ({ slug, title, content, image, tag }: IBlogCardProps) => {
  const router = useRouter();
  const goToDetails = () => {
    router.push(`resources/blog/${slug}`);
  };

  return (
    <div className={styles.blogCardWrapper}>
      <div className={styles.blogImageWrapper}>
        <Image
          src={image}
          alt="blog-image"
          className={styles.blogImage}
          width={411}
          height={252}
        />
      </div>
      <div className={styles.blogContent}>
        <div className={styles.blogTypeWrapper}>
          <p className={styles.blogType}>{tag}</p>
        </div>
        <div className={styles.blogTexts}>
          <p className={styles.blogTitle}>{title}</p>
          <p
            className={styles.blogDescription}
            dangerouslySetInnerHTML={{
              __html: content ?? "",
            }}
          ></p>
        </div>
        <Button
          variant="text"
          style={{
            color: "#0077EE",
            backgroundColor: "transparent",
            border: "none",
            paddingLeft: "0px",
            fontSize: "18px",
            fontWeight: "600",
          }}
          onClick={goToDetails}
        >
          Read More
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
