const Blog = require("../../models/blog");
const { apiError } = require("../../utils/apiError");
const { statusCodes } = require("../../utils/statusCodes");

const addBlog = async (blogData) => {
  const existingBlog = await Blog.findOne({ title: blogData.title });

  if (existingBlog) {
    throw new apiError(400, "A blog with this title already exists");
  }

  const blog = new Blog(blogData);
  await blog.save();

  const blogs = await Blog.find();

  return {
    message: "Blog Added Successfully",
    blogs,
    statusCode: statusCodes.SUCCESSFUL.CREATED,
  };
};

const getAllBlogs = async () => {
  const blogs = await Blog.find();
  return {
    message: "All Blogs Retrieved Successfully",
    blogs,
    statusCode: statusCodes.SUCCESSFUL.SUCCESS,
  };
};

const getBlogBySlug = async (slug) => {
  const blog = await Blog.findOne({ slug });

  if (!blog) {
    throw new apiError(404, "Blog not found");
  }

  return {
    message: "Blog Retrieved Successfully",
    blog,
    statusCode: statusCodes.SUCCESSFUL.SUCCESS,
  };
};

const updateBlog = async (slug, updates) => {
  const existingBlog = await Blog.findOne({ slug });
  if (!existingBlog) {
    throw new apiError(404, "Blog not found");
  }

  if (updates.title && updates.title !== existingBlog.title) {
    const duplicateBlog = await Blog.findOne({
      title: updates.title,
      _id: { $ne: existingBlog._id },
    });
    if (duplicateBlog) {
      throw new apiError(400, "A blog with this title already exists");
    }
  }

  await Blog.findOneAndUpdate({ slug }, updates, {
    new: true,
  });

  const blogs = await Blog.find();

  return {
    message: "Blog Updated Successfully",
    blogs,
    statusCode: statusCodes.SUCCESSFUL.SUCCESS,
  };
};

const deleteBlog = async (slug) => {
  const blog = await Blog.findOneAndDelete({ slug });

  if (!blog) {
    throw new apiError(404, "Blog not found");
  }

  const blogs = await Blog.find();

  return {
    message: "Blog Deleted Successfully",
    blogs,
    statusCode: statusCodes.SUCCESSFUL.SUCCESS,
  };
};

module.exports = {
  addBlog,
  getAllBlogs,
  getBlogBySlug,
  updateBlog,
  deleteBlog,
};
