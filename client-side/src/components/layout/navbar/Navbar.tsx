import { Layout, Menu, Drawer } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import epct_logo from "/public/images/epct_logo.png";
import { MenuOutlined } from "@ant-design/icons";
import useGetMenuKey from "@/hooks/useGetMenuKey";
import { useRouter } from "next/router";

const { Header } = Layout;

const Navbar = () => {
  const router = useRouter();
  const selectedKey = useGetMenuKey();

  type MenuItem = Required<React.ComponentProps<typeof Menu>>["items"][number];

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
    getItem(<Link href="/">Home</Link>, ""),
    getItem(<Link href="/portfolio">Portfolio</Link>, "portfolio"),
    getItem(<Link href="/about-us">About Us</Link>, "about-us"),
    getItem(<Link href="/services">Services</Link>, "services"),
    getItem(<Link href="/projects">Projects</Link>, "projects"),
    getItem(<Link href="/contact-us">Contact Us</Link>, "contact-us"),
    getItem(<Link href="resources">Resources</Link>, "resources"),
  ];

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const goToHome = () => {
    router.push("/");
  };

  return (
    <div className={styles["navbar-wrapper"]}>
      <Layout style={{ overflow: "auto" }}>
        <Header
          style={{
            background: "#202127",
            position: "sticky",
            top: 0,
            zIndex: 1,
            height: "100%",
          }}
        >
          <div className={styles["navbar-inner-wrapper"]}>
            <div className={styles["header-logo-wrapper"]} onClick={goToHome}>
              <Image src={epct_logo} alt="Picture of the logo" />
            </div>

            <Menu
              mode="horizontal"
              defaultSelectedKeys={[""]}
              selectedKeys={selectedKey}
              items={items}
              className={styles["menu-wrapper"]}
            />

            <div className={styles["drawer-button-wrapper"]}>
              <MenuOutlined
                className={styles["drawer-button"]}
                onClick={showDrawer}
              />
            </div>

            <Drawer
              placement="right"
              closable
              onClose={onClose}
              open={open}
              className={styles["drawer-wrapper"]}
            >
              <Menu
                mode="vertical"
                defaultSelectedKeys={[""]}
                selectedKeys={selectedKey}
                items={items}
                className="menu-wrapper-drawer"
                style={{
                  background: "#FAFAFA",
                }}
              />
            </Drawer>
          </div>
        </Header>
      </Layout>
    </div>
  );
};

export default Navbar;
