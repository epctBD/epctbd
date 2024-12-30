import { Tabs, TabsProps } from "antd";
import React, { useState } from "react";
import BlogsView from "./blogs-view/BlogsView";
import BooksView from "./books-view/BooksView";
import PodcastsView from "./podcast-view/PodcastView";
import styles from "./ResourcePageView.module.scss";
import { IBlog } from "@/models/blog.model";

interface IResourcePageViewProps {
  blogs: IBlog[];
}

const ResourcePageView = ({ blogs }: IResourcePageViewProps) => {
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
        return <BlogsView blogs={blogs} />;
      case "2":
        return <BooksView />;
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
      <div className={styles.tabContent}>{renderContent()}</div>
    </div>
  );
};

export default ResourcePageView;
