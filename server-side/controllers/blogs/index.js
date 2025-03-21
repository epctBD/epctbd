const blogService = require("../../services/blogs");
const { apiError } = require("../../utils/apiError");
const { apiResponse } = require("../../utils/apiResponse");
const { asyncHandler } = require("../../utils/asyncHandler");
const { singleUpload } = require("../../utils/cloudinary");

const addBlog = asyncHandler(async (req, res) => {
  const { title, content, author, tag } = req.body;

  if (!title || !content || !author) {
    throw new apiError(400, "Please provide all required fields");
  }

  let thumbnail = null;

  if (req.file) {
    try {
      thumbnail = await singleUpload(req.file);
    } catch (error) {
      return new apiError(500, "Image upload failed");
    }
  } else {
    return new apiError(400, "Feature image is required");
  }

  const blogData = { title, content, author, tag, thumbnail };

  const { message, blogs, statusCode } = await blogService.addBlog(blogData);

  new apiResponse(res, statusCode, message, blogs);
});

const getAllBlogs = asyncHandler(async (req, res) => {
  const { message, blogs, statusCode } = await blogService.getAllBlogs();
  new apiResponse(res, statusCode, message, blogs);
});

const getBlogBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;

  if (!slug) {
    throw new apiError(400, "Slug is required");
  }

  const { message, blog, statusCode } = await blogService.getBlogBySlug(slug);
  new apiResponse(res, statusCode, message, blog);
});

const updateBlog = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  const { title, content, author, tag, thumbnail } = req.body;

  if (!slug) {
    throw new apiError(400, "Slug is required");
  }

  if (!title && !content && !author && !tag && !thumbnail) {
    throw new apiError(400, "Please provide at least one field to update");
  }

  let newThumbnail;

  if (req.file) {
    try {
      newThumbnail = await singleUpload(req.file);
    } catch (error) {
      throw new apiError(500, "Thumbnail upload failed");
    }
  } else {
    newThumbnail = thumbnail;
  }

  const updates = {
    title,
    content,
    author,
    tag,
    thumbnail: newThumbnail,
  };

  const { message, blogs, statusCode } = await blogService.updateBlog(
    slug,
    updates
  );

  new apiResponse(res, statusCode, message, blogs);
});

const deleteBlog = asyncHandler(async (req, res) => {
  const { slug } = req.params;

  if (!slug) {
    throw new apiError(400, "Slug is required");
  }

  const { message, blogs, statusCode } = await blogService.deleteBlog(slug);
  new apiResponse(res, statusCode, message, blogs);
});

module.exports = {
  addBlog,
  getAllBlogs,
  getBlogBySlug,
  updateBlog,
  deleteBlog,
};
