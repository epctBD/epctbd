import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import ImageUploadIcon from "@/components/common/svg/ImageUploadIcon";
import { IPhoto, IProject } from "@/models/project.model";
import { addProject } from "@/services/project.service";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Image,
  Input,
  message,
  Modal,
  Radio,
  Select,
  Upload,
} from "antd";
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
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IProject>();

  const handlePhotoUpload = (file: File) => {
    if (photos.length >= 10) {
      message.error("You can only upload a maximum of 10 photos.");
      return false;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const newPhoto: IPhoto = {
        file,
        url: e.target!.result as string,
      };
      setPhotos([...photos, newPhoto]);
    };
    reader.readAsDataURL(file);

    return false;
  };

  const handleRemovePhoto = (index: number) => {
    const newPhotos = [...photos];
    newPhotos.splice(index, 1);
    setPhotos(newPhotos);
  };

  const onSubmit = async (data: IProject) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("details", data.details);
      formData.append("serviceType", data.serviceType);
      formData.append("category", data.category);
      formData.append("isFeature", data.isFeature ? "true" : "false");

      if (data.area) formData.append("area", data.area);
      if (data.projectYear) formData.append("projectYear", data.projectYear);
      if (data.designer) formData.append("designer", data.designer);
      if (data.location) formData.append("location", data.location);
      if (data.projectOverview)
        formData.append("projectOverview", data.projectOverview);
      if (data.keyFeatures) formData.append("keyFeatures", data.keyFeatures);
      if (data.outcome) formData.append("outcome", data.outcome);

      photos.forEach((file) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formData.append(`projectImages`, file?.file as any);
      });

      const response = await addProject(formData);
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

  const onCancelClick = () => {
    reset();
    setPhotos([]);
    setIsModalOpen(false);
  };

  return (
    <Modal
      key="add project"
      title="Add Project"
      open={isModalOpen}
      onCancel={() => onCancelClick()}
      footer={null}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>Name</label>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter project name"
                className={"general-input"}
              />
            )}
          />
          {errors.name && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.name.message}
            </p>
          )}
        </div>
        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>Details</label>
          <Controller
            name="details"
            control={control}
            rules={{ required: "Details are required" }}
            render={({ field }) => (
              <Input.TextArea
                {...field}
                placeholder="Enter project details"
                className={"general-input"}
              />
            )}
          />
          {errors.details && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.details.message}
            </p>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "12px",
          }}
        >
          <label className={"general-label"}>Is it a Feature Project?</label>
          <Controller
            name="isFeature"
            control={control}
            render={({ field }) => (
              <Radio.Group {...field}>
                <Radio value={true}>Yes</Radio>
                <Radio value={false}>No</Radio>
              </Radio.Group>
            )}
            rules={{
              validate: (value) =>
                value !== undefined || "Ex Team member is required",
            }}
          />
          {errors.isFeature && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.isFeature.message}
            </p>
          )}
        </div>

        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>Service Type</label>
          <Controller
            name="serviceType"
            control={control}
            rules={{ required: "Service type is required" }}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Select a service type"
                className={"general-select"}
                allowClear
                options={[
                  {
                    value: "Architecture Design",
                    label: "Architecture Design",
                  },
                  {
                    value: "Civil Engineering Design",
                    label: "Civil Engineering Design",
                  },
                  {
                    value: "Electrical Engineering Design",
                    label: "Electrical Engineering Design",
                  },
                  {
                    value: "Plumbing Engineering Design",
                    label: "Plumbing Engineering Design",
                  },
                  { value: "Planning", label: "Planning" },
                  { value: "Management", label: "Management" },
                  { value: "Land Acquisition", label: "Land Acquisition" },
                ]}
              />
            )}
          />
          {errors.serviceType && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.serviceType.message}
            </p>
          )}
        </div>
        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>Category</label>
          <Controller
            name="category"
            control={control}
            rules={{ required: "Category is required" }}
            render={({ field }) => (
              <Select
                {...field}
                className={"general-select"}
                placeholder="Select a project category"
                options={[
                  { value: "Ongoing Projects", label: "Ongoing Projects" },
                  {
                    value: "Government Projects",
                    label: "Government Projects",
                  },
                  { value: "Private Projects", label: "Private Projects" },
                  {
                    value: "Highlighted Projects",
                    label: "Highlighted Projects",
                  },
                ]}
                allowClear
              />
            )}
          />
          {errors.category && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.category.message}
            </p>
          )}
        </div>
        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>Area</label>
          <Controller
            name="area"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter area"
                className={"general-input"}
              />
            )}
          />
        </div>
        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>Project Year</label>
          <Controller
            name="projectYear"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter project year"
                className={"general-input"}
              />
            )}
          />
        </div>
        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>Designer</label>
          <Controller
            name="designer"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter designer name"
                className={"general-input"}
              />
            )}
          />
        </div>
        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>Location</label>
          <Controller
            name="location"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter location"
                className={"general-input"}
              />
            )}
          />
        </div>
        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>Project Overview</label>
          <Controller
            name="projectOverview"
            control={control}
            render={({ field }) => (
              <Input.TextArea
                {...field}
                placeholder="Enter project overview"
                className={"general-input"}
              />
            )}
          />
        </div>
        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>Key Features</label>
          <Controller
            name="keyFeatures"
            control={control}
            render={({ field }) => (
              <Input.TextArea
                {...field}
                placeholder="Enter key features"
                className={"general-input"}
              />
            )}
          />
        </div>
        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>Outcome</label>
          <Controller
            name="outcome"
            control={control}
            render={({ field }) => (
              <Input.TextArea
                {...field}
                placeholder="Enter outcome"
                className={"general-input"}
              />
            )}
          />
        </div>
        <div>
          <div className={"photo-input-wrapper"}>
            <label className={"general-label"}>Project Images</label>

            <div className={"photo-outer-upload-wrapper"}>
              {photos.map((photo, index) => (
                <div key={index + 1} className="photo-upload-wrapper">
                  <Image
                    src={photo.url}
                    alt={`Photo ${index + 1}`}
                    width={76}
                    height={76}
                    preview={true}
                    className="margin-bottom-16"
                  />
                  <div
                    onClick={() => handleRemovePhoto(index)}
                    className="photo-delete-icon"
                  >
                    <MinusCircleOutlined />
                  </div>
                </div>
              ))}
              <Upload
                beforeUpload={handlePhotoUpload}
                showUploadList={false}
                accept="image/*"
              >
                {photos.length < 10 && (
                  <div style={{ padding: "8px" }}>
                    <ImageUploadIcon />
                  </div>
                )}
              </Upload>
            </div>
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

export default AddProjects;
