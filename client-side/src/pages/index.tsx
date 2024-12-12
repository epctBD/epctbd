import Head from "next/head";
import dynamic from "next/dynamic";
import HomeAbout from "@/components/home/home-about/HomeAbout";
import GetInTouch from "@/components/home/home-get-in-touch/GetInTouch";
import HomeFeedback from "@/components/home/home-feedback/HomeFeedback";
import Cta from "@/components/cta/Cta";
import HomeService from "@/components/home/home-service/HomeService";
import HomeProjects from "@/components/home/home-projects/HomeProjects";

const DynamicHeroSection = dynamic(
  () => import("@/components/home/hero-section/Hero"),
  {
    ssr: false,
  }
);
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <DynamicHeroSection />

        <div className={"container-wrapper"}>
          <HomeAbout />
          <HomeService />
          <HomeFeedback />
          <Cta />
          <HomeProjects />
          <GetInTouch />
          <HomeFeedback />
        </div>
      </div>
    </>
  );
}
