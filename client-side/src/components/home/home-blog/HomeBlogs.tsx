import CoreTitles from "@/components/common/core-titles/CoreTitles";
import styles from "./HomeBlogs.module.scss";
import BlogCard from "@/components/common/blog-card/BlogCard";
import { blogData } from "./HomeBlogData";

const HomeBlogs = () => {
  return (
    <div className={styles.HomeBlogWrapper}>
      <CoreTitles
        subTitle="Read our Blogs"
        title="Blogs"
        intro="Blogs Blogs Blogs Blogs"
      />
      <div className={styles.blogsContainer}>
        {blogData.map((blog) => (
          <div key={blog.id}>
            <BlogCard
              title={blog.title}
              description={blog.description}
              image={blog.image}
              type={blog.type}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBlogs;
