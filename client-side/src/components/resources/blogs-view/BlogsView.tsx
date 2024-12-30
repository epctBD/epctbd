import BlogCard from "@/components/common/blog-card/BlogCard";
import { Row, Col } from "antd";
import styles from "./blogsView.module.scss";
import { IBlog } from "@/models/blog.model";

interface IBlogsViewProps {
  blogs: IBlog[];
}

const BlogsView = ({ blogs }: IBlogsViewProps) => {
  return (
    <Row gutter={[24, 24]}>
      {blogs?.map((blog) => (
        <Col span={8} xs={24} sm={12} md={12} xl={8} key={blog.slug}>
          <div className={styles.blogsCardWrapper}>
            <BlogCard
              title={blog.title}
              content={blog.content}
              image={blog.thumbnail}
              tag={blog.tag}
              slug={blog.slug}
            />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default BlogsView;
