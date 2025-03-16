import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import CoreImageUploader from "@/components/common/core-components/core-image-uploader/CoreImageUploader";
import { IAddBlog, IBlog } from "@/models/blog.model";
import { addBlog } from "@/services/blog.service";
import { Input, message, Modal } from "antd";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TextEditor from "./TextEditor";

interface IAddBlogModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  setBlogs: React.Dispatch<React.SetStateAction<IBlog[]>>;
}

const AddBlog = ({
  isModalOpen,
  setIsModalOpen,
  setBlogs,
}: IAddBlogModalProps) => {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IAddBlog>();

  const [imageData, setImageData] = useState<File | null>(null);
  const [textEditorValue, setTextEditorValue] = useState("");

  const handleImageUpload = (image: string | File | null) => {
    setImageData(image as File);
  };

  const onSubmit = async (data: IAddBlog) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content", textEditorValue);
      formData.append("author", data.author);
      formData.append("tag", data.tag);

      if (imageData) {
        formData.append("thumbnail", imageData);
      }

      const response = await addBlog(formData);
      setBlogs(response);
      message.success("Blog added successfully!");
      reset();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding blog:", error);
      message.error("Failed to add blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <Modal
      key="add blog"
      title="Add Blog"
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
                placeholder="Enter blog title"
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
          <label className={"general-label"}>Content</label>
          <TextEditor
            textEditorValue={textEditorValue}
            setTextEditorValue={setTextEditorValue}
          />
        </div>

        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>Tag</label>
          <Controller
            name="tag"
            control={control}
            rules={{ required: "Tag is required" }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter blog tag"
                className={"general-input"}
              />
            )}
          />
          {errors.tag && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.tag.message}
            </p>
          )}
        </div>

        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>Author</label>
          <Controller
            name="author"
            control={control}
            rules={{ required: "Author name is required" }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter author name"
                className={"general-input"}
              />
            )}
          />
          {errors.author && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.author.message}
            </p>
          )}
        </div>

        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>Cover Image</label>
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

export default AddBlog;
