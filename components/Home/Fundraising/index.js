import React from "react";
import{ useRouter } from "next/router";
import fundStyle from "./fundR.module.css";
import Image from "next/image";
import { onGoingProject } from "@/data";

const FundRaising = () => {
  const { push } = useRouter();
  return (
    <div className={fundStyle.container}>
      <div className={fundStyle.header}>
        <h1>Highlight</h1>
        <p>Latest Fund Raising Project</p>
      </div>
      <div className={fundStyle.content}>
        {onGoingProject.map((item, _i) => (
          <section className={fundStyle.card} key={item._id}>
            <div className={fundStyle.cardImage}>
              <Image
                src={item.img}
                alt="Fund Raising"
                width={200}
                height={200}
              />
  background-color: #141414;
              <button className={fundStyle.btn} onClick={() => push("/contact")}>Donate Now</button>
            </div>
            <div className={fundStyle.cardContent}>
              <div className={fundStyle.projection}>
                <span>Goal: ${item.goal}</span>
                <span>Raised: ${item.Raised}</span>
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
