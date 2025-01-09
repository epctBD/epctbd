import React from "react";
import { Row, Col, Button } from "antd";
import CoreTitles from "@/components/common/core-titles/CoreTitles";
import BlogCard from "@/components/common/blog-card/BlogCard";
import { blogData } from "./HomeBlogData";
import styles from "./HomeBlogs.module.scss";
import { useRouter } from "next/router";

const HomeBlogs = () => {
  const router = useRouter();
  const goToDetails = () => {
    router.push("resources");
  };

  return (
    <div className={styles.HomeBlogWrapper}>
      <CoreTitles
        subTitle="Articles"
        title="Blogs"
        intro="Dive into our collection of insightful articles, industry trends, and expert opinions."
      />

      <div className={styles.ButtonSeeMoreWrapper}>
        <Button
          variant="text"
          style={{
            color: "#0077EE",
            backgroundColor: "transparent",
            padding: "5px 10px",
            border: "none",
            fontSize: "18px",
            fontWeight: "600",
          }}
          onClick={goToDetails}
        >
          See More
        </Button>
      </div>
      <Row gutter={[16, 16]} className={styles.blogsContainer}>
        {blogData.slice(0, 3).map((blog) => (
          <Col key={blog.id} xs={24} sm={12} md={12} xl={8}>
            <div className={styles.blogsInnerContainer}>
              <BlogCard
                slug={blog.title}
                title={blog.title}
                content={blog.description}
                image={blog.image}
                tag={blog.type}
              />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeBlogs;
