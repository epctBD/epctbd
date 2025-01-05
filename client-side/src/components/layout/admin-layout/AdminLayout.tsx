import {
  AppstoreAddOutlined,
  ProfileOutlined,
  UnorderedListOutlined,
  UsergroupAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps, Tooltip, Button } from "antd";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { signOut } from "next-auth/react";
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
        title={`${isMobile ? "Blog List" : ""}`}
        className="tool-tip-container"
      >
        <Link href="/admin/blogs" className={styles.adminGetItem}>
          <AppstoreAddOutlined className="admin-list-icon" />
          <p className="admin-list-name">Blog List</p>
        </Link>
      </Tooltip>,
      "blogs"
    ),
  ];

  const handleLogout = () => {
    signOut({
      callbackUrl: "/",
      redirect: false,
    });
  };

  return (
    <div className={styles.adminMenuWrapper}>
      <div className={styles.adminMenuInnerWrapper}>
        <p className={styles.deshboardTitle}>Admin Dashboard</p>
        <Menu
          mode="inline"
          defaultSelectedKeys={[""]}
          defaultOpenKeys={[]}
          items={items}
          className="admin-menu"
          style={{
            height: "100%",
            background: "#FFFFFF",
            padding: "25px 0",
          }}
        />
        {/* Logout button placed below the menu */}
        <Button type="primary" icon={<LogoutOutlined />} onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div
        style={{
          minHeight: "calc(100vh - 50px)",
          overflow: "auto",
          width: "100%",
          backgroundColor: "#F0F2F5",
          padding: "60px 40px",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
