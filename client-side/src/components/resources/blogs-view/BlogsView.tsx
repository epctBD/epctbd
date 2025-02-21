import BlogCard from "@/components/common/blog-card/BlogCard";
import { Row, Col } from "antd";
import styles from "./blogsView.module.scss";
import { IBlog } from "@/models/blog.model";
import { motion } from "framer-motion";

interface IBlogsViewProps {
  blogs: IBlog[];
}

const cardVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut", delay: index * 0.1 },
  }),
};

const BlogsView = ({ blogs }: IBlogsViewProps) => {
  return (
    <Row gutter={[24, 24]}>
      {blogs?.map((blog, index) => (
        <Col xs={24} sm={12} md={12} xl={8} key={blog.slug}>
          <motion.div
            className={styles.blogsCardWrapper}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
          >
            <BlogCard
              title={blog.title}
              content={blog.content}
              image={blog.thumbnail}
              tag={blog.tag}
              slug={blog.slug}
            />
          </motion.div>
        </Col>
      ))}
    </Row>
  );
};

export default BlogsView;
