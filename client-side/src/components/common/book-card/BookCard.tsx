import Image from "next/image";
import styles from "./BookCard.module.scss";
import { Button } from "antd";

export interface IBookCardProps {
  _id: string;
  book_name: string;
  author_name: string;
  pdf_file: string;
  cover_image: string;
}

const BookCard = ({
  _id,
  book_name,
  author_name,
  pdf_file,
  cover_image,
}: IBookCardProps) => {
  const openPDF = () => {
    if (pdf_file) {
      window.open(pdf_file, "_blank");
    }
  };

  return (
    <div className={styles.bookCardWrapper} onClick={openPDF}>
      <div className={styles.bookImageWrapper}>
        <Image
          src={cover_image}
          alt={`${book_name} Cover`}
          className={styles.bookImage}
          width={100}
          height={140}
        />
      </div>
      <div className={styles.bookContent}>
        <p className={styles.bookAuthor}>by {author_name}</p>
        <p className={styles.bookTitle}>{book_name}</p>

        <Button
          variant="text"
          style={{
            color: "#0077EE",
            backgroundColor: "transparent",
            border: "none",
            padding: "0px",
            fontSize: "16px",
            fontWeight: "500",
          }}
          className={styles.bookButton}
          onClick={(e) => {
            e.stopPropagation();
            openPDF();
          }}
        >
          Read
        </Button>
      </div>
    </div>
  );
};

export default BookCard;
