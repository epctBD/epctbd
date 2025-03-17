import { message, Table } from "antd";
import React, { useState } from "react";
import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import { PlusOutlined } from "@ant-design/icons";
import DeleteModal from "@/components/common/delete-modal/DeleteModal";
import TrashBinIcon from "@/components/common/svg/TrashBinIcon";
import { IPodcast } from "@/models/podcast.model";
import { deletePodcast } from "@/services/podcast.service";
import AddPodcast from "../add-podcast/AddPodcast";

interface IPodcastListProps {
  podcasts: IPodcast[];
  setPodcasts: React.Dispatch<React.SetStateAction<IPodcast[]>>;
}

const PodcastList = ({ podcasts, setPodcasts }: IPodcastListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<IPodcast>();
  const [loading, setLoading] = useState(false);

  const getEmbedUrl = (url: string) => {
    try {
      // Handle different YouTube URL formats
      const urlObj = new URL(url);
      let videoId = "";

      if (urlObj.hostname.includes("youtube.com")) {
        // Regular youtube.com URLs
        videoId = urlObj.searchParams.get("v") || "";
      } else if (urlObj.hostname.includes("youtu.be")) {
        // Shortened youtu.be URLs
        videoId = urlObj.pathname.slice(1);
      }

      if (!videoId) {
        console.error("Could not extract YouTube video ID from URL:", url);
        return "";
      }

      return `https://www.youtube.com/embed/${videoId}`;
    } catch (error) {
      console.error("Invalid URL:", url);
      return "";
    }
  };

  const onDeleteClick = async () => {
    if (!selectedItem) return;

    setLoading(true);
    try {
      const response = await deletePodcast(selectedItem._id);
      setPodcasts(response);

      message.success("Podcast deleted successfully!");
      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Error deleting Podcast:", error);
      message.error("Failed to delete Podcast. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: "Podcast Title",
      dataIndex: "podcast_name",
      key: "podcast_name",
    },

    {
      title: "Podcast URL",
      dataIndex: "podcast_url",
      key: "podcast_url",
      render: (url: string) => {
        return (
          <iframe
            width={200}
            height={114}
            src={getEmbedUrl(url)}
            // title={title}
            allow=" picture-in-picture"
            allowFullScreen
          />
        );
      },
    },

    {
      title: "Actions",
      dataIndex: "_id",
      key: "actions",
      render: (id: string, item: IPodcast) => (
        <div style={{ display: "flex" }}>
          <div
            style={{
              cursor: "pointer",
              padding: "7px",
              border: "1px solid #FDD0D5",
              backgroundColor: "#FEE7EA",
              borderRadius: "50%",
              height: "24px",
              width: "24px",
            }}
            onClick={() => {
              setDeleteModalOpen(true);
              setSelectedItem(item);
            }}
          >
            <TrashBinIcon />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ fontSize: "20px" }}>PODCASTS</h1>
        <CoreButton
          text="Podcast"
          icon={<PlusOutlined />}
          type="primary"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <div
        style={{
          marginTop: "24px",
        }}
      >
        <Table
          dataSource={podcasts}
          columns={columns}
          rowKey="_id"
          bordered
          pagination={false}
        />

        {isModalOpen && (
          <AddPodcast
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            setPodcasts={setPodcasts}
          />
        )}

        {deleteModalOpen && (
          <DeleteModal
            isModalOpen={deleteModalOpen}
            setIsModalOpen={setDeleteModalOpen}
            onDeleteClick={onDeleteClick}
            isLoading={loading}
          />
        )}
      </div>
    </div>
  );
};

export default PodcastList;
