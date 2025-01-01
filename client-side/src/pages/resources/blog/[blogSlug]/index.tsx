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
    <div className={"container-wrapper"}>
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
    // Fetch the specific blog using its slug
    const blog = await getBlogBySlug(blogSlug);
    // Fetch all blogs for the related blogs section
    const blogs = await getBlogs();

    return {
      props: {
        blog,
        blogs,
      },
    };
  } catch (error) {
    console.error("Error fetching blog details or blogs:", error);
    return {
      notFound: true,
    };
  }
};

export default BlogDetails;
