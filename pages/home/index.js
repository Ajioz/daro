import About from "@/components/About";
import HomeComponent from "@/components/Home";
import FundRaising from "@/components/Home/Fundraising";
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
    </>
  );
};

export default Hompage;
