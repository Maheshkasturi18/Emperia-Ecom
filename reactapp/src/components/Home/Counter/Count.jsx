import React from "react";
import CountUp from "react-countup";

export default function Count({ number, title }) {
  return (
    <div>
      <span className="d-flex justify-content-center fs-6 fw-semibold mb-3  title-name">{title}</span>
      <CountUp duration={2} className="fw-bold display-5  " end={number} suffix="+"/>
      
    </div>
  );
}