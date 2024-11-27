import React, { ReactNode } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

type LayoutWrapperProps = {
  children: ReactNode;
};

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "100vh", backgroundColor: "#1b1b1f" }}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
