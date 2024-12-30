import { Breadcrumb, Col, Row } from "antd";
import Image from "next/image";
import img1 from "../../../../public/Carousel/1.png";
import img2 from "../../../../public/Carousel/2.png";
import img3 from "../../../../public/Carousel/3.png";
import { CalendarOutlined } from "@ant-design/icons";
import Link from "next/link";
import { IBlog } from "@/models/blog.model";
import styles from "./BlogDetailsView.module.scss";
import { UtcToLocalDate } from "@/utils/formatDate";

const relatedBlogs = [
  {
    id: 1,
    image: img1,
    title: "Enhance User Engagement with These 5 UX Design Tips",
    link: "/blog/ux-design-tips",
  },
  {
    id: 2,
    image: img2,
    title: "Top 10 Tools for Efficient Web Development in 2024",
    link: "/blog/web-development-tools",
  },
  {
    id: 3,
    image: img3,
    title: "Understanding React Server Components",
    link: "/blog/react-server-components",
  },
];

interface IBlogDetailsProps {
  blog: IBlog;
}

const BlogDetailsView = ({ blog }: IBlogDetailsProps) => {
  console.log(blog, "blog details");
  return (
    <div className={styles.blogDetailsWrapper}>
      <Row gutter={20}>
        <Col span={17}>
          <div className={styles.blogDetailsInnerWrapper}>
            <div className={styles.blogDetailsHeader}>
              <Breadcrumb
                separator={<span style={{ color: "#A3A6AA" }}>/</span>}
                items={[
                  {
                    title: (
                      <Link href="/Blogs" style={{ color: "#0077EE" }}>
                        Blogs
                      </Link>
                    ),
                  },
                  {
                    title: (
                      <span style={{ color: "#A3A6AA" }}>{blog.title}</span>
                    ),
                  },
                ]}
              />
              <p className={styles.blogDetailsTitle}>{blog.title}</p>
              <div className={styles.blogTypeWrapper}>
                <p className={styles.blogDetailType}>{blog.tag}</p>
                <div className={styles.blogTimestamp}>
                  <CalendarOutlined />
                  <p>{UtcToLocalDate(blog.createdAt)}</p>
                </div>
              </div>
            </div>
            <div className={styles.blogDetailImageWrapper}>
              <Image
                src={blog.thumbnail}
                alt={blog.title}
                className={styles.blogDetailImage}
                width={800}
                height={400}
              />
            </div>
            <div className={styles.blogDetailTextWrapper}>
              <p
                className={styles.blogDetailText}
                dangerouslySetInnerHTML={{
                  __html: blog?.content ?? "",
                }}
              ></p>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className={styles.relatedBlogWraper}>
            <p className={styles.relatedBlogHeader}>Related Blogs</p>
            <div className={styles.relatedBlogInnerWrapper}>
              {relatedBlogs.map((blog) => (
                <div key={blog.id} className={styles.relatedBlogCardWrapper}>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    className={styles.relatedBlogImage}
                  />
                  <p className={styles.relatedBlogTitle}>{blog.title}</p>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BlogDetailsView;
