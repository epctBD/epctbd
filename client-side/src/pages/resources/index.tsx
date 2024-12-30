import CoreBanner from "@/components/common/core-components/core-banner/CoreBanner";
import ResourcePageView from "@/components/resources/ResourcePageView";
import { IBlog } from "@/models/blog.model";
import { getBlogs } from "@/services/blog.service";
import { GetServerSideProps } from "next";

interface IResourcesProps {
  blogs: IBlog[];
}

const Resources = ({ blogs }: IResourcesProps) => {
  return (
    <div>
      <CoreBanner
        title="Resources"
        subtitle="Read all our latest blogs and articles at one place"
        crumbOne="Home"
        crumbTwo="Resources"
      />

      <div className={"container-wrapper"}>
        <ResourcePageView blogs={blogs} />
      </div>
    </div>
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
    console.error("Error fetching projects:", error);
    return {
      props: {
        blogs: [],
      },
    };
  }
};

export default Resources;
