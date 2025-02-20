import React from "react";
import PageHead from "@/components/PageHead";
import Navbar from "@/components/navbar";
// import Footer from "./Footer";
import Footer from "@/components/Layout/Footer";


const Layout = ({ title, head, children }) => {
  return (
    <>
      <PageHead {...head} />
      <Navbar title={title} />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
