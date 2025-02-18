import About from "@/components/About";
import HomeComponent from "@/components/Home";
import Blog from "@/components/Home/Blog";
import FundRaising from "@/components/Home/Fundraising";
import Report from "@/components/Home/Report";
import RollOver from "@/components/Home/Rollover";
import Layout from "@/components/Layout";
import React from "react";

const Hompage = () => {
  return (
    <>
      <Layout title={"Home"}>
        <HomeComponent />
        <RollOver />
        <About />
        <FundRaising />
        <Report />
        <Blog />
      </Layout>
    </>
  );
};

export default Hompage;
