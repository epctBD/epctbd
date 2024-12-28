import AdminLayout from "@/components/layout/admin-layout/AdminLayout";
import { IBlog } from "@/models/blog.model";
import { getBlogs } from "@/services/blog.service";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const BlogList = dynamic(
  () => import("@/components/admin/blogs/blog-list/BlogList"),
  {
    ssr: false,
  }
);

interface IPortfolioProps {
  blogs: IBlog[];
}

const Blogs = ({ blogs }: IPortfolioProps) => {
  const [blogList, setBlogList] = useState<IBlog[]>(blogs);

  return (
    <AdminLayout>
      <BlogList blogs={blogList} setBlogs={setBlogList} />
    </AdminLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await getBlogs();
    return {
      props: {
        blogs: response,
      },
    };
  } catch (error) {
    console.error("Error fetching portfolios:", error);
    return {
      props: {
        blogs: [],
      },
    };
  }
};

export default Blogs;
