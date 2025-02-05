import CoreBanner from "@/components/common/core-components/core-banner/CoreBanner";
import ResourcePageView from "@/components/resources/ResourcePageView";
import { IBlog } from "@/models/blog.model";
import { IBook } from "@/models/book.model";
import { IPodcast } from "@/models/podcast.model";
import { getBlogs } from "@/services/blog.service";
import { getBooks } from "@/services/book.service";
import { getPodcasts } from "@/services/podcast.service";
import { GetServerSideProps } from "next";

interface IResourcesProps {
  blogs: IBlog[];
  books: IBook[];
  podcasts: IPodcast[];
}

const Resources = ({ blogs, books, podcasts }: IResourcesProps) => {
  return (
    <div>
      <CoreBanner
        title="Resources"
        subtitle="Our Latest Update"
        crumbOne="Home"
        crumbTwo="Resources"
      />

      <div className={"container-wrapper"}>
        <ResourcePageView blogs={blogs} books={books} podcasts={podcasts} />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const [blogsResponse, booksResponse, podcastsResponse] = await Promise.all([
      getBlogs(),
      getBooks(),
      getPodcasts(),
    ]);

    return {
      props: {
        blogs: blogsResponse,
        books: booksResponse,
        podcasts: podcastsResponse,
      },
    };
  } catch (error) {
    console.error("Error in Resources getServerSideProps:", error);
    return {
      props: {
        blogs: [],
        books: [],
        podcasts: [],
      },
    };
  }
};

export default Resources;
