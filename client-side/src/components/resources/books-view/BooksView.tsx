import BookCard from "@/components/common/book-card/BookCard";
import { IBook } from "@/models/book.model";
import { Col, Row } from "antd";
import React from "react";
import { motion } from "framer-motion";

interface IBooksViewProps {
  books: IBook[];
}

const cardVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut", delay: index * 0.1 },
  }),
};

const BooksView = ({ books }: IBooksViewProps) => {
  return (
    <Row gutter={[24, 24]}>
      {books?.map((book, index) => (
        <Col xs={24} sm={12} md={8} lg={8} xl={4} key={book._id}>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
          >
            <BookCard
              _id={book._id}
              cover_image={book.cover_image}
              book_name={book.book_name}
              author_name={book.author_name}
              pdf_file={book.pdf_file}
            />
          </motion.div>
        </Col>
      ))}
    </Row>
  );
};

export default BooksView;
