import React from "react";
import PageHead from "./PageHead";
import Navbar from "./navbar";
import Footer from "./Footer";

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
