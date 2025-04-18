import React from "react";
import PageHead from "./PageHead";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ title, head, children, mainClassName }) => {
  return (
    <>
      <PageHead {...head} />
      <Navbar title={title} />
      <main className={mainClassName || children?.props?.className || "main"}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;


