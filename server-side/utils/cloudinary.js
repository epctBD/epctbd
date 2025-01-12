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

async function pdfUpload(file) {
  try {
    const uploadResult = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: "auto",
          folder: "uploaded_book",
          public_id: file.originalname.split(".")[0],
        },
        (error, result) => {
          if (error) {
            console.error("Error during pdf upload:", error);
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

async function multipleUpload(files) {
  try {
    if (!Array.isArray(files)) {
      throw new Error("files must be an array of file objects");
    }

    const uploadResults = await Promise.all(
      files.map(
        (file) =>
          new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
              {
                resource_type: "auto",
                folder: "uploaded_images",
                public_id: file.originalname.split(".")[0], // Use the name without extension
              },
              (error, result) => {
                if (error) {
                  console.error("Error during multiple upload:", error);
                  return reject(error);
                }

                resolve(result.secure_url);
              }
            );

            // Pipe the file buffer to Cloudinary
            const bufferStream = new stream.PassThrough();
            bufferStream.end(file.buffer);
            bufferStream.pipe(uploadStream);
          })
      )
    );

    return uploadResults;
  } catch (error) {
    console.error("Error during multiple upload:", error);
    throw error;
  }
}

module.exports = { singleUpload, multipleUpload, pdfUpload };
