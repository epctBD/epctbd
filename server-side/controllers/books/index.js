const { apiError } = require("../../utils/apiError");
const { apiResponse } = require("../../utils/apiResponse");
const { asyncHandler } = require("../../utils/asyncHandler");
const { pdfUpload, singleUpload } = require("../../utils/cloudinary");
const bookService = require("../../services/books");

const addBook = asyncHandler(async (req, res) => {
  const { book_name, author_name, pdf_file } = req.body;

  if (!book_name || !author_name) {
    throw new apiError(400, "Please provide book name and author name");
  }

  let cover_image = null;

  if (req.files && req.files.cover_image) {
    try {
      cover_image = await singleUpload(req.files.cover_image[0]);
    } catch (error) {
      throw new apiError(500, "Cover image upload failed");
    }
  } else {
    throw new apiError(400, "Cover image is required");
  }

  const book_data = {
    book_name,
    author_name,
    pdf_file,
    cover_image,
  };

  const { message, books, statusCode } = await bookService.addBook(book_data);

  new apiResponse(res, statusCode, message, books);
});

const getBooks = asyncHandler(async (req, res) => {
  const { message, books, statusCode } = await bookService.getBooks();
  new apiResponse(res, statusCode, message, books);
});

const deleteBook = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { message, books, statusCode } = await bookService.deleteBook(id);
  new apiResponse(res, statusCode, message, books);
});

module.exports = {
  addBook,
  getBooks,
  deleteBook,
};
