import { Image, message } from "antd";
import React, { useRef, ChangeEvent, useState } from "react";
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setImage] = useState<File | null>(null);

  const isValidImage = (file: File): boolean => {
    const validTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!validTypes.includes(file.type)) {
      message.error(
        "Invalid image type. Please upload a JPG, JPEG or PNG image."
      );
      return false;
    }
    return true;
  };

  const isValidDimensions = (file: File): Promise<boolean> => {
    return new Promise<boolean>((resolve) => {
      const img = new (window as Window & typeof globalThis).Image();

      img.onload = () => {
        if (img.width < 1680 || img.height < 1366) {
          message
            .error(
              "Invalid image dimensions. Please upload an image with dimensions 680x366 or larger."
            )
            .then(() => {
              resolve(false);
            });
        } else {
          resolve(true);
        }
      };

      img.src = URL.createObjectURL(file);
    });
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const fileObj = event.target.files && event.target.files[0];

    if (!fileObj) {
      return;
    }

    if (!isValidImage(fileObj)) {
      return;
    }

    const dimensionsValid = await isValidDimensions(fileObj);
    if (!dimensionsValid) {
      return;
    }

    setImage(fileObj);
    onFileChange(fileObj);

    const selectedImage = fileObj;
    const reader = new FileReader();

    reader.onloadend = () => {
      onLoadEnd(reader.result as string);
    };

    if (selectedImage) {
      reader.readAsDataURL(selectedImage);
    }
    event.target.value = "";
  };

  const handleUploadClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <CoreButton
        type="primary"
        text={buttonText}
        onClick={handleUploadClick}
      />

      <input
        ref={inputRef}
        style={{ display: "none" }}
        type="file"
        onChange={handleFileChange}
      />

      {exsistingFile && !imageB64 && (
        <div style={{ display: "flex" }}>
          <Image
            width={imageWidth}
            height={imageHeight}
            src={exsistingFile}
            alt="Uploaded Image"
          />
        </div>
      )}

      {imageB64 && (
        <div style={{ display: "flex" }}>
          <Image
            width={imageWidth}
            height={imageHeight}
            src={imageB64}
            alt="Uploaded Image"
          />
        </div>
      )}
    </div>
  );
};

export default CoreImageUploader;
