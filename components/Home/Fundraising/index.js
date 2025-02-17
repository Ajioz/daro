import React from "react";
import fundStyle from "./fundR.module.css";
import Image from "next/image";
import { onGoingProject } from "@/data";

const FundRaising = () => {
  return (
    <div className={fundStyle.container}>
      <div className={fundStyle.header}>
        <h1>higlights</h1>
        <p>Latest Fund Rising Project</p>
      </div>
      <div className={fundStyle.content}>
        {onGoingProject.map((item, _i) => (
          <section className={fundStyle.card} key={item._id}>
            <div className={fundStyle.cardImage}>
              <Image
                src={item.img}
                alt="Fund Rising"
                width={200}
                height={200}
              />
              <button className={fundStyle.btn}>Donate Now</button>
            </div>
            <div className={fundStyle.cardContent}>
              <div className={fundStyle.projection}>
                <span>Goal: ${item.goal}</span>
                <span>Rised: ${item.Rised}</span>
              </div>
              <div className={fundStyle.title}>
                <h1>{item.title}</h1>
              </div>
              <div className={fundStyle.description}>
                <p>{item.description}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default FundRaising;
