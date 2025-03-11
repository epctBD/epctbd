import Head from "next/head";
import dynamic from "next/dynamic";
import HomeAbout from "@/components/home/home-about/HomeAbout";
import GetInTouch from "@/components/home/home-get-in-touch/GetInTouch";
import HomeFeedback from "@/components/home/home-feedback/HomeFeedback";
import Cta from "@/components/cta/Cta";
import HomeService from "@/components/home/home-service/HomeService";
import HomeProjects from "@/components/home/home-projects/HomeProjects";
import HomeBlogs from "@/components/home/home-blog/HomeBlogs";
import { GetServerSideProps } from "next";
import { getBlogs } from "@/services/blog.service";
import { IBlog } from "@/models/blog.model";
import { IProject } from "@/models/project.model";
import { getProjects } from "@/services/project.service";

interface HomeProps {
  blogs: IBlog[];
  projects: IProject[];
}

const DynamicHeroSection = dynamic(
  () => import("@/components/home/hero-section/Hero"),
  {
    ssr: false,
  }
);

export default function Home({ blogs, projects }: HomeProps) {
  return (
    <>
      <Head>
        <title>EPCT - Engineering Planning Consultancy Team</title>
        <meta
          name="description"
          content="ENGINEERING PLANNING CONSULTANCY TEAM"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="epct-main-logo.png" />
      </Head>
      <div>
        <DynamicHeroSection projects={projects} />

        <div className={"container-wrapper"}>
          <HomeAbout />
          <HomeService />
          <Cta />
          <HomeProjects projects={projects} />
          <HomeFeedback />
          <HomeBlogs blogs={blogs} />
          <GetInTouch />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const [blogsResponse, projectsResponse] = await Promise.all([
      getBlogs(),
      getProjects(""),
    ]);

    return {
      props: {
        blogs: blogsResponse,
        projects: projectsResponse,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        blogs: [],
        projects: [],
      },
    };
  }
};
