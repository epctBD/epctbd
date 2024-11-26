import { Button } from "antd";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import CoreBanner from "@/components/common/core-components/core-banner/CoreBanner";
import ServiceCard from "@/components/common/service-card/ServiceCard";
import image from "@/components/common/service-card/service.png";

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
        <main style={{ padding: "20px" }} className={styles["home-wrapper"]}>
          Click here: <Button>Click me</Button>
        </main>

        <CoreBanner
          title="About us"
          subtitle="Discover our journey and the passion behind exceptional travel."
          crumbOne="Home"
          crumbTwo="About Us"
        />

        <ServiceCard
          image={image}
          title="Interior Design"
          subtitle="Crafting spaces that inspire and elevate."
        />
      </div>
    </>
  );
}
