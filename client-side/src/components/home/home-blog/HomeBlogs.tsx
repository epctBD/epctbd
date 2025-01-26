import React from "react";
import { Row, Col, Button } from "antd";
import CoreTitles from "@/components/common/core-titles/CoreTitles";
import BlogCard from "@/components/common/blog-card/BlogCard";
import styles from "./HomeBlogs.module.scss";
import { useRouter } from "next/router";
import { IBlog } from "@/models/blog.model";
import { RightOutlined } from "@ant-design/icons";

interface IHomeBlogsProps {
  blogs: IBlog[];
}

const HomeBlogs = ({ blogs }: IHomeBlogsProps) => {
  const router = useRouter();

  const goToResources = () => {
    router.push("resources");
  };

  return (
    <div className={styles.HomeBlogWrapper}>
      <CoreTitles
        subTitle="Articles"
        title="Our Latest Update"
        intro="Catch up on the latest trends and news happening around us"
      />

      <Row gutter={[16, 16]} className={styles.blogsContainer}>
        <Col span={24}>
          <div className={styles.ButtonSeeMoreWrapper}>
            <Button
              style={{
                color: "#0077EE",
                fontSize: "18px",
                fontWeight: "600",

                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
              }}
              type="text"
              onClick={goToResources}
              icon={<RightOutlined style={{ fontSize: "20px" }} />}
            >
              See More
            </Button>
          </div>
        </Col>
        {blogs?.length <= 0 ? (
          <div className="no-data">No Blog Available</div>
        ) : (
          blogs?.slice(0, 3)?.map((blog) => (
            <Col key={blog.slug} xs={24} sm={12} md={12} xl={8}>
              <div className={styles.blogsInnerContainer}>
                <BlogCard
                  slug={blog.slug}
                  title={blog.title}
                  content={blog.content}
                  image={blog.thumbnail}
                  tag={blog.tag}
                />
              </div>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default HomeBlogs;
