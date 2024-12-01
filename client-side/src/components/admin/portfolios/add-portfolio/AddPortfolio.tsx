import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import CoreImageUploader from "@/components/common/core-components/core-image-uploader/CoreImageUploader";
import { IPortfolio } from "@/models/portfolio.model";
import { createPortfolio } from "@/services/portfolio.service";
import { Input, message, Modal } from "antd";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface IAddPortfolioModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  setPortfolios: React.Dispatch<React.SetStateAction<IPortfolio[]>>;
}

const AddPortfolio = ({
  isModalOpen,
  setIsModalOpen,
  setPortfolios,
}: IAddPortfolioModalProps) => {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IPortfolio>();

  const [imageData, setImageData] = useState<File | null>(null);
  const [imageB64, setImageB64] = useState<string | null>(null);

  const onFileChange = (file: File | null) => {
    setImageData(file);
  };

  const onLoadEnd = (image: string) => {
    setImageB64(image);
  };

  const onSubmit = async (data: IPortfolio) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("subtitle", data.subtitle);

      if (imageData) {
        formData.append("feature_image", imageData);
      }

      const response = await createPortfolio(formData);
      setPortfolios(response);
      message.success("Portfolio added successfully!");
      reset();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding portfolio:", error);
      message.error("Failed to add portfolio. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      key="add portfolio"
      title="Add Portfolio"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "15px" }}>
          <label>Title</label>
          <Controller
            name="title"
            control={control}
            rules={{ required: "Title is required" }}
            render={({ field }) => (
              <Input {...field} placeholder="Enter title" />
            )}
          />
          {errors.title && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.title.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Subtitle</label>
          <Controller
            name="subtitle"
            control={control}
            rules={{ required: "Subtitle is required" }}
            render={({ field }) => (
              <Input {...field} placeholder="Enter subtitle" />
            )}
          />
          {errors.subtitle && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.subtitle.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label className="general-label">Feature Image</label>
          <CoreImageUploader
            buttonText="Upload Image"
            onFileChange={onFileChange}
            onLoadEnd={onLoadEnd}
            imageB64={imageB64 || ""}
          />
        </div>

        <CoreButton
          text="Add Portfolio"
          type="primary"
          htmlType="submit"
          loading={loading}
        />
      </form>
    </Modal>
  );
};

export default AddPortfolio;
