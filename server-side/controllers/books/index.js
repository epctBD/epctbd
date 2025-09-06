const { apiError } = require("../../utils/apiError");
const { apiResponse } = require("../../utils/apiResponse");
const { asyncHandler } = require("../../utils/asyncHandler");
const { pdfUpload, singleUpload } = require("../../utils/cloudinary");
const bookService = require("../../services/books");

const addBook = asyncHandler(async (req, res) => {
  const { book_name, author_name, pdf_file, cover_image } = req.body;

  if (!book_name || !author_name || !pdf_file || !cover_image) {
    throw new apiError(400, "Please provide all required information");
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
