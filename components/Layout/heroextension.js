import React from "react";
import heroExtStyle from "./heroextension.module.css";

const HeroExtension = ({ title }) => {
  return (
    <div className={heroExtStyle.container}>
      <p>{title}</p>
    </div>
  );
};

export default HeroExtension;
