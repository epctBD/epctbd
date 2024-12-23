import { Tabs } from "antd";
import type { TabsProps } from "antd";
import styles from "./ResourcePageView.module.scss";
import BlogsView from "./blogs-view/BlogsView";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Blogs",
    children: <BlogsView />,
  },
  {
    key: "2",
    label: "Books",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Podcasts",
    children: "Content of Tab Pane 3",
  },
];

const ResourcePageView = () => {
  return (
    <div className={styles.tabsWrapper}>
      <Tabs
        defaultActiveKey="1"
        items={items}
        //    onChange={onChange}
      />
      ;
    </div>
  );
};

export default ResourcePageView;
