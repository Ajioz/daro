import HomeComponent from "@/components/Home";
import Navbar from "@/components/Layout/navbar";
import React from "react";

const Hompage = () => {
  return (
    <>
      <Navbar title={"Home"} />
      <HomeComponent />
    </>
  );
};

export default Hompage;
