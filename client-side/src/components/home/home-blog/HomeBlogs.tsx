import React from "react";
import { Row, Col, Button } from "antd";
import CoreTitles from "@/components/common/core-titles/CoreTitles";
import BlogCard from "@/components/common/blog-card/BlogCard";
import styles from "./HomeBlogs.module.scss";
import { useRouter } from "next/router";
import { IBlog } from "@/models/blog.model";
import { RightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

interface IHomeBlogsProps {
  blogs: IBlog[];
}

const cardVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: index * 0.2 },
  }),
};

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
          <div className="no-data">
            <p className="no-data-text">No Blog Available</p>
          </div>
        ) : (
          blogs?.slice(0, 3)?.map((blog, index) => (
            <Col key={blog.slug} xs={24} sm={12} md={12} xl={8}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
              >
                <div className={styles.blogsInnerContainer}>
                  <BlogCard
                    slug={blog.slug}
                    title={blog.title}
                    content={blog.content}
                    image={blog.thumbnail}
                    tag={blog.tag}
                  />
                </div>
              </motion.div>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default HomeBlogs;
