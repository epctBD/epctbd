import { Layout, Menu, Drawer } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import epct_logo from "/public/images/epct_logo.png";
import Icon from "./Icon";

const { Header } = Layout;

const Navbar = () => {
  const [selectedKey, setSelectedKey] = useState("");

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
    getItem(<Link href="/projects">Portfolio</Link>, "portfolio"),
    getItem(<Link href="/about-us">About Us</Link>, "about-us"),
    getItem(<Link href="/services">Services</Link>, "services"),
    getItem(<Link href="/contact-us">Contact Us</Link>, "contact-us"),
    getItem(<div>Resources</div>, "resources", <Icon />, [
      getItem(<Link href="/blogs">Blogs</Link>, "blogs"),
      getItem(<Link href="/gallery">Gallery</Link>, "gallery"),
    ]),
  ];

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const goToHome = () => {
    // Implement navigation logic
    console.log("Go to home");
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
            padding: "0px 80px",
            height: "100%",
            // borderBottom: "1px solid #E8E8E8",
          }}
        >
          <div className={styles["navbar-inner-wrapper"]}>
            <div className={styles["header-logo-wrapper"]} onClick={goToHome}>
              <Image src={epct_logo} alt="Picture of the logo" />
            </div>

            <Menu
              mode="horizontal"
              defaultSelectedKeys={[""]}
              selectedKeys={[selectedKey]}
              onClick={(e) => setSelectedKey(e.key)}
              items={items}
              className={styles["menu-wrapper"]}
            />

            {/* <MenuFoldOutlined className="drawer-button" onClick={showDrawer} /> */}

            <Drawer
              placement="right"
              closable
              onClose={onClose}
              open={open}
              className="drawer-wrapper"
            >
              <Menu
                mode="vertical"
                defaultSelectedKeys={[""]}
                selectedKeys={[selectedKey]}
                onClick={(e) => setSelectedKey(e.key)}
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
