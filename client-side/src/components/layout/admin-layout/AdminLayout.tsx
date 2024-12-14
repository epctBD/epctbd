import {
  AppstoreAddOutlined,
  ProfileOutlined,
  UnorderedListOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps, Tooltip } from "antd";
import Link from "next/link";
import React, { ReactNode, useState } from "react";

import styles from "./AdminLayout.module.scss";

type MenuItem = Required<MenuProps>["items"][number];

type AdminLayoutLayoutProps = {
  children: ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutLayoutProps) => {
  const [isMobile] = useState(false);

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem(
      <Tooltip
        placement="right"
        trigger={["hover", "click"]}
        title={`${isMobile ? "Project List" : ""}`}
        className="tool-tip-container"
      >
        <Link href="/admin/projects" className={styles.adminGetItem}>
          <UnorderedListOutlined className="admin-list-icon" />
          <p className="admin-list-name">Project List</p>
        </Link>
      </Tooltip>,
      "project-list"
    ),
    getItem(
      <Tooltip
        placement="right"
        trigger={["hover", "click"]}
        title={`${isMobile ? "Project List" : ""}`}
        className="tool-tip-container"
      >
        <Link href="/admin/portfolio" className={styles.adminGetItem}>
          <ProfileOutlined className="admin-list-icon" />
          <p className="admin-list-name">Portfolio List</p>
        </Link>
      </Tooltip>,
      "portfolio-list"
    ),
    getItem(
      <Tooltip
        placement="right"
        trigger={["hover", "click"]}
        title={`${isMobile ? "Team Members" : ""}`}
        className="tool-tip-container"
      >
        <Link href="/admin/team-member" className={styles.adminGetItem}>
          <UsergroupAddOutlined className="admin-list-icon" />
          <p className="admin-list-name">Team Members</p>
        </Link>
      </Tooltip>,
      "team-members"
    ),
    getItem(
      <Tooltip
        placement="right"
        trigger={["hover", "click"]}
        title={`${isMobile ? "Category List" : ""}`}
        className="tool-tip-container"
      >
        <Link href="/admin/category-list" className={styles.adminGetItem}>
          <AppstoreAddOutlined className="admin-list-icon" />
          <p className="admin-list-name">Category List</p>
        </Link>
      </Tooltip>,
      "category-list"
    ),
    getItem(
      <Tooltip
        placement="right"
        trigger={["hover", "click"]}
        title={`${isMobile ? "Blog List" : ""}`}
        className="tool-tip-container"
      >
        <Link href="/admin/category-list" className={styles.adminGetItem}>
          <AppstoreAddOutlined className="admin-list-icon" />
          <p className="admin-list-name">Blog List</p>
        </Link>
      </Tooltip>,
      "blog-list"
    ),
  ];

  return (
    <div className={styles.adminMenuWrapper}>
      <div className={styles.adminMenuInnerWrapper}>
        <Menu
          mode="inline"
          defaultSelectedKeys={[""]}
          defaultOpenKeys={[]}
          items={items}
          className="admin-menu"
          style={{
            height: "100%",
            background: "#a3a6aa",
            padding: "25px 0",
          }}
        />
        {/* <Menu
          mode="inline"
          defaultSelectedKeys={[""]}
          defaultOpenKeys={[]}
          items={bottomItems}
          className="admin-menu admin-menu-bottom"
          style={{
            background: "#1a1a1a",
          }}
        /> */}
      </div>
      <div
        style={{
          minHeight: "calc(100vh - 50px)",
          overflow: "auto",
          width: "100%",
          backgroundColor: "#F5F7FA",
          padding: "20px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
