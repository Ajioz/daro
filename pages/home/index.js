import About from "@/components/About";
import HomeComponent from "@/components/Home";
import Blog from "@/components/Home/Blog";
import FundRaising from "@/components/Home/Fundraising";
import Report from "@/components/Home/Report";
import RollOver from "@/components/Home/Rollover";
import Navbar from "@/components/Layout/navbar";
import React from "react";

const Hompage = () => {
  return (
    <>
      <Navbar title={"Home"} />
      <HomeComponent />
      <RollOver />
      <About />
      <FundRaising />
      <Report />
      <Blog />
    </>
  );
};

export default Hompage;
