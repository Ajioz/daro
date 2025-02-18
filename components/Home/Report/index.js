import React from "react";
import report from "./report.module.css";

const reportStat = [
  { fund: 6200, text: "Donation" },
  { fund: 80, text: "Fund Raised" },
  { fund: 245, text: "Volunteers" },
  { fund: 605, text: "Projecs" },
];
const Report = () => {
  return (
    <div className={report.container}>
      {reportStat.map((item, index) => (
        <div
          className={
            index !== reportStat.length - 1
              ? `${report.stats} ${report.line}`
              : `${report.stats}`
          }
          key={index}
        >
          <h2>{item.fund}+</h2>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Report;
