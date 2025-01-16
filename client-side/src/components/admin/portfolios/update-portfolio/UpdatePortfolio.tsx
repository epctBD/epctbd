import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import CoreImageUploader from "@/components/common/core-components/core-image-uploader/CoreImageUploader";
import { IPortfolio } from "@/models/portfolio.model";
import { updatePortfolio } from "@/services/portfolio.service";
import { Input, message, Modal } from "antd";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface IUpdatePortfolioModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  portfolio: IPortfolio | null;
  setPortfolios: React.Dispatch<React.SetStateAction<IPortfolio[]>>;
}

const UpdatePortfolio = ({
  isModalOpen,
  setIsModalOpen,
  portfolio,
  setPortfolios,
}: IUpdatePortfolioModalProps) => {
  const [loading, setLoading] = useState(false);
  const [imageData, setImageData] = useState<File | null>(null);
  const [existingImage] = useState<string | null>(
    portfolio?.feature_image || null
  );

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IPortfolio>({
    defaultValues: { ...portfolio },
  });

  const handleImageUpload = (image: string | File | null) => {
    setImageData(image as File);
  };

  const onSubmit = async (data: IPortfolio) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("subtitle", data.subtitle);

      if (imageData) {
        formData.append("feature_image", imageData);
      } else {
        formData.append("existing_image_link", existingImage || "");
      }

      const response = await updatePortfolio(portfolio?._id || "", formData);
      setPortfolios(response);
      message.success("Portfolio updated successfully!");
      reset();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating portfolio:", error);
      message.error("Failed to update portfolio. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const onCancelClick = () => {
    reset();
    setIsModalOpen(false);
  };

  return (
    <Modal
      key="update portfolio"
      title="Update Portfolio"
      open={isModalOpen}
      onCancel={onCancelClick}
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
            onImageUpload={handleImageUpload}
            existingImage={existingImage || ""}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <CoreButton
            text="Update"
            type="primary"
            htmlType="submit"
            loading={loading}
          />
        </div>
      </form>
    </Modal>
  );
};

export default UpdatePortfolio;
