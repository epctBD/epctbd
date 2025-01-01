import { Breadcrumb, Col, Row } from "antd";
import Image from "next/image";
import { CalendarOutlined } from "@ant-design/icons";
import Link from "next/link";
import { IBlog } from "@/models/blog.model";
import styles from "./BlogDetailsView.module.scss";
import { UtcToLocalDate } from "@/utils/formatDate";
import { useRouter } from "next/router";

interface IBlogDetailsProps {
  blog: IBlog;
  blogs: IBlog[];
}

const BlogDetailsView = ({ blog, blogs }: IBlogDetailsProps) => {
  const router = useRouter();
  const gotToDetails = (slug: string) => {
    router.push(`/resources/blog/${slug}`);
  };

  const currentSlug = blog?.slug;

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
            <p className={styles.relatedBlogHeader}>Blogs You Might Like</p>
            <div className={styles.relatedBlogInnerWrapper}>
              {blogs
                .filter((blog) => blog.slug !== currentSlug)
                .slice(0, 3)
                .map((blog) => (
                  <div
                    key={blog.slug}
                    className={styles.relatedBlogCardWrapper}
                    onClick={() => gotToDetails(blog.slug)}
                  >
                    <Image
                      src={blog.thumbnail}
                      alt={blog.title}
                      width={48}
                      height={48}
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
