import BookCard from "@/components/common/book-card/BookCard";
import { IBook } from "@/models/book.model";
import { Col, Row } from "antd";
import React from "react";

interface IBooksViewProps {
  books: IBook[];
}

const BooksView = ({ books }: IBooksViewProps) => {
  return (
    <Row gutter={[24, 24]}>
      {books?.map((book) => (
        <Col xs={12} sm={12} md={8} lg={8} xl={6} key={book._id}>
          <BookCard
            _id={book._id}
            cover_image={book.cover_image}
            book_name={book.book_name}
            author_name={book.author_name}
            pdf_file={book.pdf_file}
          />
        </Col>
      ))}
    </Row>
  );
};

export default BooksView;
