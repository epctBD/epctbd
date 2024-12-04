import { Breadcrumb, Col, Row } from "antd";
import styles from "./BlogDetails.module.scss";
import Image from "next/image";
import img1 from "../../../../public/Carousel/1.png";

const blogData = [
  {
    id: "123",
    category: "Services",
    title: "Tolstoy provides an authentic interaction",
    type: "Blog",
    date: "24 Aug 2024",
    image: img1,
    imageAlt: "An illustrative blog image",
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

const BlogDetails = () => {
  // Extract the blog data (assuming you are using the first blog in the array)
  const blog = blogData[0];

  return (
    <div className={styles.blogDetailsWrapper}>
      <Row>
        <Col span={17}>
          <div className={styles.blogDetailsInnerWrapper}>
            <div className={styles.blogDetailsHeader}>
              <Breadcrumb
                separator={<span style={{ color: "#A3A6AA" }}>/</span>}
                items={[
                  {
                    title: (
                      <a href="/Blogs" style={{ color: "#0077EE" }}>
                        {blog.category}
                      </a>
                    ),
                  },
                  {
                    title: <span style={{ color: "#A3A6AA" }}>{blog.id}</span>,
                  },
                ]}
              />
              <p className={styles.blogDetailsTitle}>{blog.title}</p>
              <div className={styles.blogTypeWrapper}>
                <p className={styles.blogDetailType}>{blog.type}</p>
                <div className={styles.blogTimestamp}>{blog.date}</div>
              </div>
            </div>
            <div className={styles.blogDetailImageWrapper}>
              <Image
                src={blog.image}
                alt={blog.imageAlt}
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
        <Col span={7} style={{ border: "1px solid red" }}>
          <h4>Related Blogs</h4>
          {/* Add related blogs here if available */}
        </Col>
      </Row>
    </div>
  );
};

export default BlogDetails;
