// import styles from "./HomeBlogs.module.scss";
import BlogCard from "@/components/common/blog-card/BlogCard";
import { blogData } from "@/components/home/home-blog/HomeBlogData";

const BlogsView = () => {
  return (
    <div>
      {blogData.map((blog) => (
        <div key={blog.id} style={{ display: "flex", flexDirection: "row" }}>
          <BlogCard
            title={blog.title}
            description={blog.description}
            image={blog.image}
            type={blog.type}
          />
        </div>
      ))}
    </div>
  );
};

export default BlogsView;
