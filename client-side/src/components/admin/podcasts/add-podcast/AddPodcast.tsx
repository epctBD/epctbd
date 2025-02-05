import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import { IAddPodcast, IPodcast } from "@/models/podcast.model";
import { addPodcast } from "@/services/podcast.service";
import { Input, message, Modal, Upload } from "antd";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface IAddPodcastModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  setPodcasts: React.Dispatch<React.SetStateAction<IPodcast[]>>;
}

const AddPodcast = ({
  isModalOpen,
  setIsModalOpen,
  setPodcasts,
}: IAddPodcastModalProps) => {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IAddPodcast>();

  const onSubmit = async (data: IAddPodcast) => {
    setLoading(true);
    try {
      const response = await addPodcast(data);
      setPodcasts(response);

      message.success("Podcast added successfully!");
      reset();
      setIsModalOpen(false);
    } catch (error: any) {
      console.error("Error adding podcast:", {
        error,
        response: error.response,
        data: error.response?.data,
        status: error.response?.status,
      });

      message.error(
        error.response?.data?.message ||
          error.message ||
          "Failed to add podcast. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      key="add podcast"
      title="Add Podcast"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>Podcast Title</label>
          <Controller
            name="podcast_name"
            control={control}
            rules={{ required: "Podcast title is required" }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter podcast title"
                className={"general-input"}
              />
            )}
          />
          {errors.podcast_name && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.podcast_name.message}
            </p>
          )}
        </div>

        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>YouTube URL</label>
          <Controller
            name="podcast_url"
            control={control}
            rules={{
              required: "YouTube URL is required",
              pattern: {
                value: /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/,
                message: "Please enter a valid YouTube URL",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter YouTube URL"
                className={"general-input"}
              />
            )}
          />
          {errors.podcast_url && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.podcast_url.message}
            </p>
          )}
        </div>

        <CoreButton
          text="Add"
          type="primary"
          htmlType="submit"
          loading={loading}
        />
      </form>
    </Modal>
  );
};

export default AddPodcast;
