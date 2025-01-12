import { message, Table } from "antd";
import React, { useState } from "react";
import CoreButton from "@/components/common/core-components/core-button/CoreButton";
// import AddBook from "../add-portfolio/AddBook";
import { PlusOutlined } from "@ant-design/icons";
import DeleteModal from "@/components/common/delete-modal/DeleteModal";
import PenIcon from "@/components/common/svg/PenIcon";
import TrashBinIcon from "@/components/common/svg/TrashBinIcon";
import { IBook } from "@/models/book.model";
import { deleteBook } from "@/services/book.service";
import AddBook from "../add-book/AddBook";

interface IBookListProps {
  books: IBook[];
  setBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
}

const BookList = ({ books, setBooks }: IBookListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<IBook>();
  const [loading, setLoading] = useState(false);

  const onDeleteClick = async () => {
    if (!selectedItem) return;

    setLoading(true);
    try {
      const response = await deleteBook(selectedItem._id);
      setBooks(response);

      message.success("Book deleted successfully!");
      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Error deleting Book:", error);
      message.error("Failed to delete Book. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: "Book Name",
      dataIndex: "book_name",
      key: "book_name",
    },
    {
      title: "Author Name",
      dataIndex: "author_name",
      key: "author_name",
    },
    {
      title: "PDF",
      dataIndex: "pdf_file",
      key: "pdf_file",
      render: (src: string) => (
        <a href={src} target="_blank" rel="noopener noreferrer">
          Click to open
        </a>
      ),
    },
    {
      title: "Actions",
      dataIndex: "_id",
      key: "display_picture",
      render: (id: string, item: IBook) => (
        <div style={{ display: "flex", gap: "12px" }}>
          <div
            style={{
              cursor: "pointer",
              padding: "7px",
              border: "1px solid #D1F4DB",
              backgroundColor: "#E8FAED",
              borderRadius: "50%",
              height: "24px",
              width: "24px",
            }}
            onClick={() => {
              setUpdateModalOpen(true);
              setSelectedItem(item);
            }}
          >
            <PenIcon />
          </div>
          <div
            style={{
              cursor: "pointer",
              padding: "7px",
              border: "1px solid #FDD0D5",
              backgroundColor: "#FEE7EA",
              borderRadius: "50%",
              height: "24px",
              width: "24px",
            }}
            onClick={() => {
              setDeleteModalOpen(true);
              setSelectedItem(item);
            }}
          >
            <TrashBinIcon />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ fontSize: "20px" }}>Books</h1>
        <CoreButton
          text="Book"
          icon={<PlusOutlined />}
          type="primary"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <div
        style={{
          marginTop: "24px",
        }}
      >
        <Table
          dataSource={books}
          columns={columns}
          rowKey="_id"
          bordered
          pagination={false}
        />

        {isModalOpen && (
          <AddBook
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            setBooks={setBooks}
          />
        )}

        {/*{updateModalOpen && (
          <UpdateBook
            isModalOpen={updateModalOpen}
            setIsModalOpen={setUpdateModalOpen}
            portfolio={selectedItem || null}
            setBooks={setBooks}
          />
        )} */}

        {deleteModalOpen && (
          <DeleteModal
            isModalOpen={deleteModalOpen}
            setIsModalOpen={setDeleteModalOpen}
            onDeleteClick={onDeleteClick}
            isLoading={loading}
          />
        )}
      </div>
    </div>
  );
};

export default BookList;
