import React, { useState, useEffect } from "react";
import { Modal, Input, message } from "antd";
import { Controller, useForm } from "react-hook-form";
import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import CoreImageUploader from "@/components/common/core-components/core-image-uploader/CoreImageUploader";
import { IProject } from "@/models/project.model";
import { updateProject } from "@/services/project.service";

interface IUpdateProjectModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  currentProject: IProject | null;
  setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
}

const UpdateProject = ({
  isModalOpen,
  setIsModalOpen,
  setProjects,
  currentProject,
}: IUpdateProjectModalProps) => {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IProject>();

  const [imageData, setImageData] = useState<File | null>(null);
  const [imageB64, setImageB64] = useState<string | null>(null);

  useEffect(() => {
    if (currentProject) {
      reset({
        name: currentProject.name,
        category: currentProject.category,
        details: currentProject.details,
        serviceType: currentProject.serviceType,
        area: currentProject.area,
        projectYear: currentProject.projectYear,
        designer: currentProject.designer,
        location: currentProject.location,
        projectOverview: currentProject.projectOverview,
        keyFeatures: currentProject.keyFeatures,
        outcome: currentProject.outcome,
      });
      setImageB64(currentProject.projectImages?.[0] || null);
    }
  }, [currentProject, reset]);

  const onFileChange = (file: File | null) => {
    setImageData(file);
  };

  const onLoadEnd = (image: string) => {
    setImageB64(image);
  };

  const onSubmit = async (data: IProject) => {
    if (!currentProject) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("category", data.category);
      formData.append("details", data.details);
      formData.append("serviceType", data.serviceType);
      formData.append("area", data.area || "");
      formData.append("projectYear", data.projectYear || "");
      formData.append("designer", data.designer || "");
      formData.append("location", data.location || "");
      formData.append("projectOverview", data.projectOverview || "");
      formData.append("keyFeatures", data.keyFeatures || "");
      formData.append("outcome", data.outcome || "");

      if (imageData) {
        formData.append("projectImages", imageData);
      } else if (currentProject.projectImages?.[0]) {
        formData.append("existing_image_link", currentProject.projectImages[0]);
      }

      const updatedProject = await updateProject(currentProject._id, formData);

      setProjects((prevProjects) =>
        prevProjects.map((project) =>
          project._id === currentProject._id ? updatedProject : project
        )
      );

      message.success("Project updated successfully!");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating project:", error);
      message.error("Failed to update project. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      key="update project"
      title="Update Project"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="general-input-wrapper">
          <label className="general-label">Name</label>
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

        <div className="general-input-wrapper">
          <label className="general-label">Category</label>
          <Controller
            name="category"
            control={control}
            rules={{ required: "Category is required" }}
            render={({ field }) => (
              <Input {...field} placeholder="Enter project category" />
            )}
          />
          {errors.category && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.category.message}
            </p>
          )}
        </div>

        <div className="general-input-wrapper">
          <label className="general-label">Details</label>
          <Controller
            name="details"
            control={control}
            rules={{ required: "Details are required" }}
            render={({ field }) => (
              <Input.TextArea
                {...field}
                placeholder="Enter project details"
                rows={4}
              />
            )}
          />
          {errors.details && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.details.message}
            </p>
          )}
        </div>

        <div className="general-input-wrapper">
          <label className="general-label">Project Image</label>
          <CoreImageUploader
            buttonText="Update Image"
            onFileChange={onFileChange}
            onLoadEnd={onLoadEnd}
            imageB64={imageB64 || ""}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "end" }}>
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

export default UpdateProject;
