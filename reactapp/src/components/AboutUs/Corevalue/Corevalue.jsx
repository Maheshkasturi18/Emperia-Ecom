import React, { Component } from "react";
import "./Corevalue.css";

export default class Corevalue extends Component {
  render() {
    return (
      <section className="core-bg">
        <div className="core-head">
          <h1 className=" fw-bold text-black">Core Values</h1>
        </div>

        <div className="container py-4 lh-lg">
          <div className="row py-3">
            <div className="col-lg-6 " data-aos="fade-right">
              <img
                src="images/corevalue-img1.jpg"
                alt=""
                className="img-fluid rounded-5"
              />
            </div>
            <div className="col-lg-6 py-3">
              <h1 className="mb-4">Vision</h1>
              <p  className="fs-18">
                Our vision is to promote public health and hygiene by providing
                leading hygiene care solutions that enable individuals and
                communities to maintain a healthy and safe environment.
              </p>
            </div>
          </div>

          <div className="row py-3">
            <div className="col-lg-6 py-3">
              <h1 className="mb-4">Mission</h1>
              <p  className="fs-18">
                Our mission is to promote healthy living by;
                <ul>
                  <li>
                    providing innovative and effective hygiene care solutions,
                  </li>
                  <li>having a customer-centric approach,</li>
                  <li>
                    being people-oriented and serving as a responsible &
                    socially conscious company that makes a positive impact on
                    the nation.
                  </li>
                </ul>
              </p>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <img
                src="images/corevalue-img2.jpg"
                alt=""
                className="img-fluid rounded-5"
              />
            </div>
          </div>

          <div className="row py-3">
            <div className="col-lg-6 " data-aos="fade-right">
              <img
                src="images/corevalue-img3.jpg"
                alt=""
                className="img-fluid rounded-5"
              />
            </div>
            <div className="col-lg-6 py-3">
              <h1 className="mb-4">Brand Values</h1>
              <p  className="fs-18">
                We believe in providing effective and innovative hygiene care
                solutions that enable individuals and communities to maintain a
                clean and healthy environment; therefore, we have set standards
                for excellence. We are guided by our principles; a
                customer-centric approach, passion and integrity, continuous
                improvement & innovation and people-oriented culture.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
