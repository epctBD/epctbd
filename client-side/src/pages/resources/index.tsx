import CoreBanner from "@/components/common/core-components/core-banner/CoreBanner";
import ResourcePageView from "@/components/resources/ResourcePageView";
import { IBlog } from "@/models/blog.model";
import { IBook } from "@/models/book.model";
import { getBlogs } from "@/services/blog.service";
import { getBooks } from "@/services/book.service";
import { GetServerSideProps } from "next";

interface IResourcesProps {
  blogs: IBlog[];
  books: IBook[];
}

const Resources = ({ blogs, books }: IResourcesProps) => {
  return (
    <div>
      <CoreBanner
        title="Resources"
        subtitle="Our Latest Update"
        crumbOne="Home"
        crumbTwo="Resources"
      />

      <div className={"container-wrapper"}>
        <ResourcePageView blogs={blogs} books={books} />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const blogsResponse = await getBlogs();

    return {
      props: {
        blogs: blogsResponse,
        books: [],
      },
    };
  } catch (error) {
    console.error("Error in Resources getServerSideProps:", error);
    return {
      props: {
        blogs: [],
        books: [],
      },
    };
  }
};

export default Resources;
