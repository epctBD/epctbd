import { IBlog } from "@/models/blog.model";
import { Image, message, Table } from "antd";
import React, { useState } from "react";

import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { deleteBlog } from "@/services/blog.service";
import DeleteModal from "@/components/common/delete-modal/DeleteModal";
import AddBlog from "../add-blogs/AddBlogs";
import UpdateBlog from "../update-blog/UpdateBlog";
import PenIcon from "@/components/common/svg/PenIcon";
import TrashBinIcon from "@/components/common/svg/TrashBinIcon";

interface IBlogListProps {
  blogs: IBlog[];
  setBlogs: React.Dispatch<React.SetStateAction<IBlog[]>>;
}

const BlogList = ({ blogs, setBlogs }: IBlogListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<IBlog>();
  const [loading, setLoading] = useState(false);

  const onDeleteClick = async () => {
    if (!selectedItem) return;

    setLoading(true);
    try {
      const response = await deleteBlog(selectedItem.slug);
      setBlogs(response);

      message.success("Blog deleted successfully!");
      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Error deleting blog:", error);
      message.error("Failed to delete blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Tag",
      dataIndex: "tag",
      key: "tag",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (src: string) => (
        <Image src={src} alt="Thumbnail" width={80} height={80} />
      ),
    },
    {
      title: "Actions",
      dataIndex: "_id",
      key: "actions",
      render: (slug: string, item: IBlog) => (
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
        <h1 style={{ fontSize: "20px" }}>Blogs</h1>
        <CoreButton
          text="Add Blog"
          type="primary"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <div style={{ marginTop: "24px" }}>
        <Table
          dataSource={blogs}
          columns={columns}
          rowKey="_id"
          bordered
          pagination={{ pageSize: 10 }}
        />

        <AddBlog
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setBlogs={setBlogs}
        />

        {updateModalOpen && (
          <UpdateBlog
            isModalOpen={updateModalOpen}
            setIsModalOpen={setUpdateModalOpen}
            blog={selectedItem || null}
            setBlogs={setBlogs}
          />
        )}

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

export default BlogList;
