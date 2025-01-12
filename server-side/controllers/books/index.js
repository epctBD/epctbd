const { apiError } = require("../../utils/apiError");
const { apiResponse } = require("../../utils/apiResponse");
const { asyncHandler } = require("../../utils/asyncHandler");
const { pdfUpload, singleUpload } = require("../../utils/cloudinary");
const bookService = require("../../services/books");

const addBook = asyncHandler(async (req, res) => {
  const { book_name, author_name } = req.body;

  if (!book_name || !author_name) {
    throw new apiError(400, "Please provide book name and author name");
  }

  let cover_image = null;
  let pdf_file = null;

  if (req.files) {
    try {
      if (req.files.cover_image) {
        cover_image = await singleUpload(req.files.cover_image[0]);
      } else {
        throw new apiError(400, "Feature image is required");
      }

      if (req.files.pdf_file) {
        pdf_file = await pdfUpload(req.files.pdf_file[0]);
      }
    } catch (error) {
      throw new apiError(500, "File upload failed");
    }
  } else {
    throw new apiError(400, "Feature image is required");
  }

  const book_data = { book_name, author_name, pdf_file, cover_image };

  const { message, books, statusCode } = await bookService.addBook(book_data);

  new apiResponse(res, statusCode, message, books);
});

const getBooks = asyncHandler(async (req, res) => {
  const { message, books, statusCode } = await bookService.getBooks();
  new apiResponse(res, statusCode, message, books);
});

const updateBook = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { book_name, author_name } = req.body;

  let pdf_file = null;
  if (req.files && req.files.pdf_file) {
    try {
      pdf_file = await singleUpload(req.files.pdf_file[0]);
    } catch (error) {
      throw new apiError(500, "PDF upload failed");
    }
  }

  const book_data = { book_name, author_name, ...(pdf_file && { pdf_file }) };

  const { message, book, statusCode } = await bookService.updateBook(
    id,
    book_data
  );
  new apiResponse(res, statusCode, message, book);
});

const deleteBook = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { message, statusCode } = await bookService.deleteBook(id);
  new apiResponse(res, statusCode, message);
});

module.exports = {
  addBook,
  getBooks,
  updateBook,
  deleteBook,
};
