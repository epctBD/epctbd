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
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
