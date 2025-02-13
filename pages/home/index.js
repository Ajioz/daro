import HomeComponent from "@/components/Home";
import RollOver from "@/components/Home/Rollover";
import Navbar from "@/components/Layout/navbar";
import React from "react";

const Hompage = () => {
  return (
    <>
      <Navbar title={"Home"} />
      <HomeComponent />
      <RollOver />
    </>
  );
};

export default Hompage;
