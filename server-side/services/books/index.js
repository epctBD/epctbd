const Book = require("../../models/book");
const { statusCodes } = require("../../utils/statusCodes");

const addBook = async (book_data) => {
  const book = new Book({ ...book_data });
  await book.save();

  const books = await Book.find();
  return {
    message: "Book Added Successfully",
    books,
    statusCode: statusCodes.SUCCESSFUL.CREATED,
  };
};

const getBooks = async () => {
  const books = await Book.find();
  return {
    message: "Books Fetched Successfully",
    books,
    statusCode: statusCodes.SUCCESSFUL.SUCCESS,
  };
};

const getBookById = async (id) => {
  const book = await Book.findById(id);
  if (!book) {
    throw new apiError(404, "Book not found");
  }
  return {
    message: "Book Fetched Successfully",
    book,
    statusCode: statusCodes.SUCCESSFUL.SUCCESS,
  };
};

const updateBook = async (id, book_data) => {
  const book = await Book.findByIdAndUpdate(id, book_data, { new: true });
  if (!book) {
    throw new apiError(404, "Book not found");
  }
  return {
    message: "Book Updated Successfully",
    book,
    statusCode: statusCodes.SUCCESSFUL.SUCCESS,
  };
};

const deleteBook = async (id) => {
  const book = await Book.findByIdAndDelete(id);
  if (!book) {
    throw new apiError(404, "Book not found");
  }
  return {
    message: "Book Deleted Successfully",
    statusCode: statusCodes.SUCCESSFUL.SUCCESS,
  };
};

module.exports = {
  addBook,
  getBooks,
  updateBook,
  deleteBook,
};
