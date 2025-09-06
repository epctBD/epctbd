import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import CoreImageUploader from "@/components/common/core-components/core-image-uploader/CoreImageUploader";
import { IAddBook, IBook } from "@/models/book.model";
import { addBook } from "@/services/book.service";
import { uploadPdfToCloudinary } from "@/utils/pdfUpload";
import { UploadOutlined } from "@ant-design/icons";
import { Input, message, Modal, Upload } from "antd";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface IAddBookModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  setBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
}

const AddBook = ({
  isModalOpen,
  setIsModalOpen,
  setBooks,
}: IAddBookModalProps) => {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IAddBook>();

  const [imageData, setImageData] = useState<File | null>(null);
  const [pdfData, setPdfData] = useState<string | null>(null);

  const onSubmit = async (data: IBook) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("book_name", data.book_name);
      formData.append("author_name", data.author_name);

      if (pdfData) {
        formData.append("pdf_file", pdfData);
      } else {
        message.error("No PDF uploaded");
        setLoading(false);
        return;
      }

      if (imageData) {
        formData.append("cover_image", imageData);
      }

      const response = await addBook(formData);
      setBooks(response);
      message.success("Book added successfully!");
      reset();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding book:", error);
      message.error("Failed to add book. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (image: string | File | null) => {
    setImageData(image as File);
  };

  return (
    <Modal
      key="add book"
      title="Add Book"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>Book Name</label>
          <Controller
            name="book_name"
            control={control}
            rules={{ required: "Book name is required" }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter book name"
                className={"general-input"}
              />
            )}
          />
          {errors.book_name && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.book_name.message}
            </p>
          )}
        </div>

        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>Author Name</label>
          <Controller
            name="author_name"
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
          {errors.author_name && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.author_name.message}
            </p>
          )}
        </div>

        <div className={"general-pdf-wrapper"}>
          <label className="general-label">Upload PDF</label>
          <Upload
            accept=".pdf"
            maxCount={1}
            beforeUpload={async (file) => {
              try {
                const url = await uploadPdfToCloudinary(file);
                setPdfData(url); // Save the Cloudinary URL
                message.success("PDF uploaded successfully!");
              } catch (err: any) {
                message.error(err.message || "PDF upload failed!");
              }

              return Upload.LIST_IGNORE; // prevent default Ant Upload
            }}
            onRemove={() => setPdfData(null)}
            fileList={
              pdfData
                ? [
                    {
                      uid: "-1",
                      name: "Uploaded PDF",
                      status: "done",
                      url: pdfData,
                    },
                  ]
                : []
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

export default AddBook;
