import React, { useRef, ChangeEvent, useState } from "react";
import { Image, message } from "antd";
import CoreButton from "../core-button/CoreButton";

interface ImageUploaderProps {
  buttonText: string;
  imageWidth?: number;
  imageHeight?: number;
  onFileChange: (file: File | null) => void;
  exsistingFile?: string;
  onLoadEnd: (image: string) => void;
  imageB64: string;
}

const CoreImageUploader: React.FC<ImageUploaderProps> = ({
  buttonText,
  imageWidth = 100,
  imageHeight = 100,
  onFileChange,
  exsistingFile,
  onLoadEnd,
  imageB64,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<File | null>(null);

  const isValidImage = (file: File): boolean => {
    const validTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!validTypes.includes(file.type)) {
      message.error(
        "Invalid image type. Please upload a JPG, JPEG, or PNG image."
      );
      return false;
    }
    return true;
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj || !isValidImage(fileObj)) {
      return;
    }

    setImage(fileObj);
    onFileChange(fileObj);

    const reader = new FileReader();
    reader.onloadend = () => {
      onLoadEnd(reader.result as string);
    };

    reader.readAsDataURL(fileObj);
    event.target.value = ""; // Clear input value to allow re-upload
  };

  const handleRemoveImage = () => {
    setImage(null);
    onFileChange(null);
  };

  const handleUploadClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {!image && !imageB64 && (
        <CoreButton
          type="primary"
          text={buttonText}
          onClick={handleUploadClick}
        />
      )}

      <input
        ref={inputRef}
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />

      {(imageB64 || image) && (
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "16px" }}
        >
          <Image
            width={imageWidth}
            height={imageHeight}
            src={imageB64 || URL.createObjectURL(image!)}
            alt="Uploaded Image"
            style={{ marginRight: "8px" }}
          />
          <CoreButton
            // type="text"
            text="Remove"
            onClick={handleRemoveImage}
            // style={{ color: "red" }}
          />
        </div>
      )}
    </div>
  );
};

export default CoreImageUploader;
