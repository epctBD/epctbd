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

const deleteBook = async (id) => {
  const book = await Book.findByIdAndDelete(id);
  if (!book) {
    throw new apiError(404, "Book not found");
  }

  const books = await Book.find();

  return {
    message: "Book Deleted Successfully",
    books,
    statusCode: statusCodes.SUCCESSFUL.SUCCESS,
  };
};

module.exports = {
  addBook,
  getBooks,
  deleteBook,
};
