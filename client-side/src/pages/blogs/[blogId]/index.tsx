import { Breadcrumb, Col, Row } from "antd";
import styles from "./BlogDetails.module.scss";
import Image from "next/image";
import img1 from "../../../../public/Carousel/1.png";
import img2 from "../../../../public/Carousel/2.png";
import img3 from "../../../../public/Carousel/3.png";
import { CalendarOutlined } from "@ant-design/icons";

const blogData = [
  {
    id: "123",
    type: "Blog",
    title: "Tolstoy provides an authentic interaction",
    category: "Architectural Design",
    date: "24 Aug 2024",
    image: img1,
    content: `
    Consistency ensures that all elements of your design work
    together harmoniously. This means:
    - Uniform Visuals: Use consistent colors, fonts, and icons.
    - Standardized Interactions: Ensure similar actions result in similar outcomes.
    - Predictable Layouts: Keep the layout familiar across different sections.
    
    A consistent design helps users know what to expect, making their
    interactions more efficient. By incorporating these five UX
    design principles—simplicity, consistency, accessibility, feedback,
    and responsiveness—you can create a more engaging and user-friendly product.
    
    Enhancing the user experience not only increases satisfaction but
    also boosts retention and overall success.
  `,
  },
];

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

const BlogDetails = () => {
  // Extract the blog data (assuming you are using the first blog in the array)
  const blog = blogData[0];

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
                      <a href="/Blogs" style={{ color: "#0077EE" }}>
                        Blogs
                      </a>
                    ),
                  },
                  {
                    title: (
                      <span style={{ color: "#A3A6AA" }}>{blog.category}</span>
                    ),
                  },
                ]}
              />
              <p className={styles.blogDetailsTitle}>{blog.title}</p>
              <div className={styles.blogTypeWrapper}>
                <p className={styles.blogDetailType}>{blog.type}</p>
                <div className={styles.blogTimestamp}>
                  <CalendarOutlined />
                  <p>{blog.date}</p>
                </div>
              </div>
            </div>
            <div className={styles.blogDetailImageWrapper}>
              <Image
                src={blog.image}
                alt={blog.title}
                className={styles.blogDetailImage}
                width={800}
                height={400}
              />
            </div>
            <div className={styles.blogDetailTextWrapper}>
              <p className={styles.blogDetailText}>{blog.content}</p>
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

export default BlogDetails;
