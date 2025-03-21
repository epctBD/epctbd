import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import CoreImageUploader from "@/components/common/core-components/core-image-uploader/CoreImageUploader";
import { IPortfolio } from "@/models/portfolio.model";
import { createPortfolio } from "@/services/portfolio.service";
import { UploadOutlined } from "@ant-design/icons";
import { Input, message, Modal, Upload } from "antd";
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
  const [pdfData, setPdfData] = useState<File | null>(null);

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
      }

      if (pdfData) {
        formData.append("pdf_file", pdfData);
      } else {
        message.error("no pdf");
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
        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>Title</label>
          <Controller
            name="title"
            control={control}
            rules={{ required: "Title is required" }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter title"
                className={"general-input"}
              />
            )}
          />
          {errors.title && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.title.message}
            </p>
          )}
        </div>

        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>Subtitle</label>
          <Controller
            name="subtitle"
            control={control}
            rules={{ required: "Subtitle is required" }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter subtitle"
                className={"general-input"}
              />
            )}
          />
          {errors.subtitle && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.subtitle.message}
            </p>
          )}
        </div>

        <div className={"general-pdf-wrapper"}>
          <label className="general-label">Upload PDF</label>
          <Upload
            accept=".pdf"
            maxCount={1}
            beforeUpload={(file) => {
              if (file.type !== "application/pdf") {
                message.error("You can only upload PDF files!");
                return Upload.LIST_IGNORE;
              }
              if (file.size / 1024 / 1024 > 5) {
                message.error("PDF must be smaller than 5MB!");
                return Upload.LIST_IGNORE;
              }
              setPdfData(file);
              return false;
            }}
            onRemove={() => setPdfData(null)}
            fileList={
              pdfData ? [{ uid: "-1", name: pdfData.name, status: "done" }] : []
            }
          >
            <CoreButton text="Click" type="basic" icon={<UploadOutlined />} />
          </Upload>
        </div>

        <div className={"general-input-wrapper"}>
          <label className="general-label">Feature Image</label>
          <div style={{ cursor: "pointer", maxWidth: "76px" }}>
            <CoreImageUploader onImageUpload={handleImageUpload} />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <CoreButton
            text="Add"
            type="primary"
            htmlType="submit"
            loading={loading}
          />
        </div>
      </form>
    </Modal>
  );
};

export default AddPortfolio;
