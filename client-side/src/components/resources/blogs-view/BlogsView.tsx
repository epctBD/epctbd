import BlogCard from "@/components/common/blog-card/BlogCard";
import { blogData } from "@/components/home/home-blog/HomeBlogData";
import { Row, Col } from "antd";
import styles from "./blogsView.module.scss";

const BlogsView = () => {
  return (
    <Row gutter={[24, 24]}>
      {blogData.map((blog) => (
        <Col span={8} xs={24} sm={12} md={8} key={blog.id}>
          <div className={styles.blogsCardWrapper}>
            <BlogCard
              title={blog.title}
              description={blog.description}
              image={blog.image}
              type={blog.type}
            />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default BlogsView;
