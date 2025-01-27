import { Tabs, TabsProps, Spin } from "antd";
import React, { useState } from "react";
import BlogsView from "./blogs-view/BlogsView";
import BooksView from "./books-view/BooksView";
import PodcastsView from "./podcast-view/PodcastView";
import styles from "./ResourcePageView.module.scss";
import { IBlog } from "@/models/blog.model";
import { IBook } from "@/models/book.model";
import { LoadingOutlined } from "@ant-design/icons";

interface IResourcePageViewProps {
  blogs: IBlog[];
  books: IBook[];
  isLoading?: boolean;
}

const ResourcePageView = ({
  blogs,
  books,
  isLoading = false,
}: IResourcePageViewProps) => {
  const [activeTabKey, setActiveTabKey] = useState("1");

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Blogs",
    },
    {
      key: "2",
      label: "Books",
    },
    {
      key: "3",
      label: "Podcasts",
    },
  ];

  const onTabChange = (key: string) => {
    setActiveTabKey(key);
  };

  const renderContent = () => {
    switch (activeTabKey) {
      case "1":
        return blogs?.length <= 0 ? (
          <div className={styles.noData}>No Blogs Available</div>
        ) : (
          <BlogsView blogs={blogs} />
        );
      case "2":
        return books?.length <= 0 ? (
          <div className={styles.noData}>No Books Available</div>
        ) : (
          <BooksView books={books} />
        );
      case "3":
        return <PodcastsView />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.tabsWrapper}>
      <div className={styles.tabsContainer}>
        <Tabs
          defaultActiveKey="1"
          items={items}
          style={{ maxWidth: "250px" }}
          onChange={onTabChange}
        />
      </div>
      <div className={styles.tabContent}>
        {isLoading ? (
          <div className={styles.loaderContainer}>
            <Spin indicator={<LoadingOutlined spin />} size="large" />
          </div>
        ) : (
          renderContent()
        )}
      </div>
    </div>
  );
};

export default ResourcePageView;
