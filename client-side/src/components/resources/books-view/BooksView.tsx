import { IBook } from "@/models/book.model";
import { Col, Row } from "antd";
import Image from "next/image";
import React from "react";

interface IBooksViewProps {
  books: IBook[];
}

const BooksView = ({ books }: IBooksViewProps) => {
  return (
    <Row gutter={[24, 24]}>
      {books?.map((book) => (
        <Col xs={24} sm={12} md={12} xl={8} key={book._id}>
          <div onClick={() => window.open(book?.pdf_file, "_blank")}>
            <Image
              src={book?.cover_image}
              alt="Books Cover Image"
              width={200}
              height={200}
            />
            <p>{book?.book_name}</p>
            <p>{book?.author_name}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default BooksView;
