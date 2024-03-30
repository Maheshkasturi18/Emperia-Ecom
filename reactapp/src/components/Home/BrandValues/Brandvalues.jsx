import React, { Component } from "react";
import "./Brandvalues.css";

export default class Brandvalues extends Component {
  render() {
    return (
      <div className="bv-bg">
        <div className=" container  p-5 "> 
          <div className="row">
          
          <div className="col-lg-3 mb-2 d-md-block mb-md-0">
            <h4 className="fw-semibold py-3 bv-heading">BRAND VALUES</h4>
          </div>

          <div className="col-lg-9 d-md-block ">
            <p className="lh-lg ">
              We believe in providing effective and innovative hygiene care
              solutions that enable individuals and communities to maintain a
              clean and healthy environment; therefore, we have set standards
              for excellence. We are guided by our principles; a customer-
              centric approach, passion and integrity, continuous improvement &
              innovation and people-oriented culture.
            </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
