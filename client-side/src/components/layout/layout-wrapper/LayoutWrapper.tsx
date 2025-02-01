import React, { ReactNode, useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

type LayoutWrapperProps = {
  children: ReactNode;
};

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (children) {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [children]);

  return (
    <div>
      {showLoader && (
        <div
          style={{
            backgroundColor: "#1b1b1f",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            height: "100vh",
          }}
        >
          <Spin indicator={<LoadingOutlined style={{ fontSize: 50 }} spin />} />
        </div>
      )}
      <Navbar />
      <div style={{ minHeight: "100vh", backgroundColor: "#1b1b1f" }}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
