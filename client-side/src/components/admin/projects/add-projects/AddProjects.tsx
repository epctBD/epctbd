import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import CoreImageUploader from "@/components/common/core-components/core-image-uploader/CoreImageUploader";
import { IProject } from "@/models/project.model";
import { createProject } from "@/services/project.service";
import { Input, message, Modal } from "antd";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface IAddProjectModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
}

const AddProjects = ({
  isModalOpen,
  setIsModalOpen,
  setProjects,
}: IAddProjectModalProps) => {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IProject>();

  const [imageData, setImageData] = useState<File | null>(null);
  const [imageB64, setImageB64] = useState<string | null>(null);

  const onFileChange = (file: File | null) => {
    setImageData(file);
  };

  const onLoadEnd = (image: string) => {
    setImageB64(image);
  };

  const onSubmit = async (data: IProject) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("details", data.details);
      formData.append("serviceType", data.serviceType);
      formData.append("category", data.category);

      if (data.area) formData.append("area", data.area);
      if (data.projectYear) formData.append("projectYear", data.projectYear);
      if (data.designer) formData.append("designer", data.designer);
      if (data.location) formData.append("location", data.location);
      if (data.projectOverview)
        formData.append("projectOverview", data.projectOverview);
      if (data.keyFeatures) formData.append("keyFeatures", data.keyFeatures);
      if (data.outcome) formData.append("outcome", data.outcome);

      if (imageData) {
        formData.append("feature_image", imageData);
      }

      const response = await createProject(formData);
      setProjects(response);
      message.success("Project added successfully!");
      reset();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding project:", error);
      message.error("Failed to add project. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      key="add project"
      title="Add Project"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "15px" }}>
          <label>Name</label>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <Input {...field} placeholder="Enter project name" />
            )}
          />
          {errors.name && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.name.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Details</label>
          <Controller
            name="details"
            control={control}
            rules={{ required: "Details are required" }}
            render={({ field }) => (
              <Input.TextArea {...field} placeholder="Enter project details" />
            )}
          />
          {errors.details && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.details.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Service Type</label>
          <Controller
            name="serviceType"
            control={control}
            rules={{ required: "Service type is required" }}
            render={({ field }) => (
              <Input {...field} placeholder="Enter service type" />
            )}
          />
          {errors.serviceType && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.serviceType.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Category</label>
          <Controller
            name="category"
            control={control}
            rules={{ required: "Category is required" }}
            render={({ field }) => (
              <Input {...field} placeholder="Enter category" />
            )}
          />
          {errors.category && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.category.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Feature Image</label>
          <CoreImageUploader
            buttonText="Upload Image"
            onFileChange={onFileChange}
            onLoadEnd={onLoadEnd}
            imageB64={imageB64 || ""}
          />
        </div>

        <CoreButton
          text="Add Project"
          type="primary"
          htmlType="submit"
          loading={loading}
        />
      </form>
    </Modal>
  );
};

export default AddProjects;
