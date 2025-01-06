import React from "react";
import { Row, Col } from "antd";
import CoreTitles from "@/components/common/core-titles/CoreTitles";
import BlogCard from "@/components/common/blog-card/BlogCard";
import { blogData } from "./HomeBlogData";
import styles from "./HomeBlogs.module.scss";

const HomeBlogs = () => {
  return (
    <div className={styles.HomeBlogWrapper}>
      <CoreTitles
        subTitle="Read our Blogs"
        title="Blogs"
        intro="Blogs Blogs Blogs Blogs"
      />

      <Row gutter={[16, 16]} className={styles.blogsContainer}>
        {blogData.slice(0, 3).map((blog) => (
          <Col key={blog.id} xs={24} sm={12} md={12} xl={8}>
            <BlogCard
              slug={blog.title}
              title={blog.title}
              content={blog.description}
              image={blog.image}
              tag={blog.type}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeBlogs;
