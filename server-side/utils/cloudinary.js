const cloudinary = require("cloudinary").v2;
const stream = require("stream");
const dotenv = require("dotenv");
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

async function singleUpload(file) {
  try {
    const uploadResult = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: "auto",
          folder: "uploaded_images",
          public_id: file.originalname.split(".")[0], // Use the name without extension
        },
        (error, result) => {
          if (error) {
            console.error("Error during single upload:", error);
            return reject(error);
          }

          resolve(result.secure_url);
        }
      );

      // Pipe the file buffer to Cloudinary
      const bufferStream = new stream.PassThrough();
      bufferStream.end(file.buffer);
      bufferStream.pipe(uploadStream);
    });

    return uploadResult;
  } catch (error) {
    console.error("Error during single upload:", error);
    throw error;
  }
}

async function multipleUpload(filePaths) {
  try {
    if (!Array.isArray(filePaths)) {
      throw new Error("filePaths must be an array of file paths");
    }

    const uploadResults = await Promise.all(
      filePaths.map((filePath) =>
        cloudinary.uploader.upload(filePath, {
          folder: "uploaded_images",
        })
      )
    );

    return uploadResults.map((result) => result.secure_url);
  } catch (error) {
    console.error("Error during multiple upload:", error);
    throw error;
  }
}

module.exports = { singleUpload, multipleUpload };
