import {
  AppstoreAddOutlined,
  ProfileOutlined,
  UnorderedListOutlined,
  UsergroupAddOutlined,
  LogoutOutlined,
  BookOutlined,
  HomeOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps, Tooltip, Button } from "antd";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { signOut } from "next-auth/react";
import styles from "./AdminLayout.module.scss";
import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import { useRouter } from "next/router";
import useGetMenuKey from "@/hooks/useGetMenuKey";
import { usePathname } from "next/navigation";

type MenuItem = Required<MenuProps>["items"][number];

type AdminLayoutLayoutProps = {
  children: ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutLayoutProps) => {
  const [isMobile] = useState(false);

  const GetMenuKey = () => {
    const pathname = usePathname();
    return pathname.split("/").pop() || "";
  };

  const selectedKey = GetMenuKey();
  console.log(selectedKey);

  const router = useRouter();
  const goToHome = () => {
    router.push("/");
  };

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
      "projects"
    ),
    getItem(
      <Tooltip
        placement="right"
        trigger={["hover", "click"]}
        title={`${isMobile ? "Portfolio List" : ""}`}
        className="tool-tip-container"
      >
        <Link href="/admin/portfolio" className={styles.adminGetItem}>
          <ProfileOutlined className="admin-list-icon" />
          <p className="admin-list-name">Portfolio List</p>
        </Link>
      </Tooltip>,
      "portfolio"
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
      "team-member"
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
    getItem(
      <Tooltip
        placement="right"
        trigger={["hover", "click"]}
        title={`${isMobile ? "Blog List" : ""}`}
        className="tool-tip-container"
      >
        <Link href="/admin/books" className={styles.adminGetItem}>
          <BookOutlined className="admin-list-icon" />
          <p className="admin-list-name">Book List</p>
        </Link>
      </Tooltip>,
      "books"
    ),
    getItem(
      <Tooltip
        placement="right"
        trigger={["hover", "click"]}
        title={`${isMobile ? "Blog List" : ""}`}
        className="tool-tip-container"
      >
        <Link href="/admin/podcasts" className={styles.adminGetItem}>
          <WalletOutlined className="admin-list-icon" />
          <p className="admin-list-name">Podcast List</p>
        </Link>
      </Tooltip>,
      "podcasts"
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
          selectedKeys={[selectedKey]}
          defaultOpenKeys={[]}
          items={items}
          className={styles.adminMenu}
          style={{
            height: "100%",
            background: "#FFFFFF",
            padding: "25px 0",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
            padding: "25px 10px",
          }}
        >
          <CoreButton
            text="Home"
            type="primary"
            icon={<HomeOutlined />}
            onClick={goToHome}
            size="small"
          />
          <CoreButton
            text="Logout"
            type="primary"
            icon={<LogoutOutlined />}
            onClick={handleLogout}
            size="small"
          />
        </div>
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
