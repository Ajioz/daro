import React from "react";
import fundStyle from "./fundR.module.css";
import Image from "next/image";

const FundRaising = () => {
  return (
    <div className={fundStyle.container}>
      <div className={fundStyle.header}>
        <h1>higlights</h1>
        <p>Latest Fund Raising Project</p>
      </div>
      <div className={fundStyle.content}>
        <section className={fundStyle.card}>
          <div className={fundStyle.cardImage}>
            <Image
              src={"/images/main/needy0.jpg"}
              alt="Fund Raising"
              width={200}
              height={200}
            />
            <button className={fundStyle.btn}>Donate Now</button>
          </div>
          <div className={fundStyle.cardContent}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              eget sapien sapien. Curabitur in metus urna. In hac habitasse
              platea dictumst.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FundRaising;
