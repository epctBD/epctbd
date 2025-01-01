import { IBlog } from "@/models/blog.model";
import BlogDetailsView from "@/components/resources/blog-details/BlogDetailsView";
import { getBlogBySlug, getBlogs } from "@/services/blog.service";
import { GetServerSideProps } from "next";

interface IBlogDetailsProps {
  blog: IBlog;
  blogs: IBlog[];
}

const BlogDetails = ({ blog, blogs }: IBlogDetailsProps) => {
  return (
    <div>
      <BlogDetailsView blog={blog} blogs={blogs} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { blogSlug } = context.query;

  if (typeof blogSlug !== "string") {
    return {
      notFound: true,
    };
  }

  try {
    const response = await getBlogBySlug(blogSlug);
    const blogs = await getBlogs();
    return {
      props: {
        blog: response,
        blogs: blogs,
      },
    };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return {
      props: {
        blog: [],
        blogs: [],
      },
    };
  }
};

export default BlogDetails;
