import AdminLayout from "@/components/layout/admin-layout/AdminLayout";
import { IBook } from "@/models/book.model";
import { getBooks } from "@/services/book.service";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const BookList = dynamic(
  () => import("@/components/admin/books/book-list/BookList"),
  {
    ssr: false,
  }
);

interface IBookProps {
  books: IBook[];
}

const Book = ({ books }: IBookProps) => {
  const [bookList, setBookList] = useState<IBook[]>(books);

  return (
    <AdminLayout>
      <BookList books={bookList} setBooks={setBookList} />
    </AdminLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await getBooks();
    return {
      props: {
        books: response,
      },
    };
  } catch (error) {
    console.error("Error fetching books:", error);
    return {
      props: {
        books: [],
      },
    };
  }
};

export default Book;
