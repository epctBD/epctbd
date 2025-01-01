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
import { useRouter } from "next/router";

interface IBlogDetailsProps {
  blog: IBlog;
  blogs: IBlog[];
}

const BlogDetailsView = ({ blog, blogs }: IBlogDetailsProps) => {
  console.log(blog, "blog details");
  const router = useRouter();
  const goToDetails = (slug: string) => {
    router.push(`/resources/blog/${slug}`);
  };

  return (
    <div className={styles.blogDetailsWrapper}>
      <Row gutter={20}>
        <Col xl={17} md={24}>
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
        <Col xl={7} md={12}>
          <div className={styles.relatedBlogWraper}>
            <p className={styles.relatedBlogHeader}>Related Blogs</p>
            <div className={styles.relatedBlogInnerWrapper}>
              {blogs &&
                blogs
                  .filter((relatedBlog) => relatedBlog.slug !== blog.slug)
                  .slice(0, 3)
                  .map((relatedBlog) => (
                    <div
                      key={relatedBlog.slug}
                      className={styles.relatedBlogCardWrapper}
                      onClick={() => goToDetails(relatedBlog.slug)}
                    >
                      <Image
                        src={relatedBlog.thumbnail}
                        alt={relatedBlog.title}
                        className={styles.relatedBlogImage}
                        width={150}
                        height={100}
                      />
                      <p className={styles.relatedBlogTitle}>
                        {relatedBlog.title}
                      </p>
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
