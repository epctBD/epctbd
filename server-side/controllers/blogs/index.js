const blogService = require("../../services/blogs");
const { apiError } = require("../../utils/apiError");
const { apiResponse } = require("../../utils/apiResponse");
const { asyncHandler } = require("../../utils/asyncHandler");
const { singleUpload } = require("../../utils/cloudinary");

// Add Blog
const addBlog = asyncHandler(async (req, res) => {
  const { title, content, author, tags } = req.body;

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

  const blogData = { title, content, author, tags, thumbnail };

  const { message, blogs, statusCode } = await blogService.addBlog(blogData);

  new apiResponse(res, statusCode, message, blogs);
});

// Get All Blogs
const getAllBlogs = asyncHandler(async (req, res) => {
  const { message, blogs, statusCode } = await blogService.getAllBlogs();
  new apiResponse(res, statusCode, message, blogs);
});

// Get Blog by Slug
const getBlogBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;

  if (!slug) {
    throw new apiError(400, "Slug is required");
  }

  const { message, blog, statusCode } = await blogService.getBlogBySlug(slug);
  new apiResponse(res, statusCode, message, blog);
});

// Update Blog
const updateBlog = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  const { title, content, author, category, tags, thumbnail } = req.body;

  if (!slug) {
    throw new apiError(400, "Slug is required");
  }

  if (!title && !content && !author && !tags && !thumbnail) {
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
    tags,
    thumbnail: newThumbnail,
  };

  console.log(updates, "updates");

  const { message, blogs, statusCode } = await blogService.updateBlog(
    slug,
    updates
  );

  new apiResponse(res, statusCode, message, blogs);
});

// Delete Blog
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
