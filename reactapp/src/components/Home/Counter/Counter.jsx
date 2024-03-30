import React from "react";
import Count from "./Count";
import "./style.css";

export default function Counter() {
  return (
    <section className=" text-center text-lg-center">
      <div className="container p-5 ">
        <div className="row">
          
            <div className="col-lg-3 col-md-6 mb-4 mb-3 md-0">
              <Count title="NO. OF CITIES" number={53} />
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-3 md-0">
              <Count title="NO. OF PRODUCTS" number={50} />
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-3 md-0">
              <Count title="NO. OF DISTRIBUTORS" number={100} />
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-3 md-0">
              <Count title="YEARS IN BUSINESS" number={100} />
            </div>
         
        </div>
      </div>
    </section>
  );
}
