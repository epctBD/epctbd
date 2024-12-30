import { IBlog } from "@/models/blog.model";
import BlogDetailsView from "@/components/resources/blog-details/BlogDetailsView";
import { getBlogBySlug } from "@/services/blog.service";
import { GetServerSideProps } from "next";

interface IBlogDetailsProps {
  blog: IBlog;
}

const BlogDetails = ({ blog }: IBlogDetailsProps) => {
  return (
    <div>
      <BlogDetailsView blog={blog} />
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
    return {
      props: {
        blog: response,
      },
    };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return {
      props: {
        blog: [],
      },
    };
  }
};

export default BlogDetails;
