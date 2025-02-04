import AdminLayout from "@/components/layout/admin-layout/AdminLayout";
import { IPodcast } from "@/models/podcast.model";
import { getPodcasts } from "@/services/podcast.service";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const PodcastList = dynamic(
  () => import("@/components/admin/podcasts/podcast-list/PodcastList"),
  {
    ssr: false,
  }
);

interface IPodcastProps {
  podcasts: IPodcast[];
}

const Podcast = ({ podcasts }: IPodcastProps) => {
  const [podcastList, setPodcastList] = useState<IPodcast[]>(podcasts);

  return (
    <AdminLayout>
      <PodcastList podcasts={podcastList} setPodcasts={setPodcastList} />
    </AdminLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await getPodcasts();
    return {
      props: {
        podcasts: response,
      },
    };
  } catch (error) {
    console.error("Error fetching podcasts:", error);
    return {
      props: {
        podcasts: [],
      },
    };
  }
};

export default Podcast;
