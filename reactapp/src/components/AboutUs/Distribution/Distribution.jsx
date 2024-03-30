import React, { Component } from "react";
import "./Distribution.css";

export default class Distribution extends Component {
  render() {
    return (
      <section className="dist-bg">
        <div className="dist-head">
          <h1 className=" fw-bold "> Manufacturing And Distribution</h1>
        </div>

        <div className="container py-4 lh-lg">
          <p className="m-0">At Grabbit, Hygiene Care, we have established</p>

          <ul className=" ps-4 ">
            <li className=" border-0">
              <b> World-Class Manufacturing Procedures –</b> We utilize
              cutting-edge technology and strict quality controls to produce
              superior products and process-driven operations.
            </li>
            <li className=" border-0">
              <b> Stringent Quality Control –</b> We follow strict regulations
              and practice the best industry standards. We are equipped with a
              coherent structure that ensures quality control at various points.
            </li>
            <li className=" border-0">
              <b> Revolutionary Innovative Solutions –</b> We have launched a
              line of hygiene care products, that include cleaning and
              disinfecting solutions for floor and surface care, bathroom and
              toilet care, kitchen care, glass care, personal protection like
              hand sanitizers & hand washes and other essential items.
            </li>
          </ul>

          <p>
            We also have set up a supply chain system; a complex channel to
            enable quick and efficient delivery of products across the nation as
            per standard operating procedures. We offer augmented solutions that
            assist our clients in the best possible way, which is often missed
            in the retail industry.
          </p>

          <p className="m-0"> Our Distribution Model includes;</p>
          <ul className=" ps-4  ">
            <li className=" border-0">
              <b> Own Multi-Faceted Logistics –</b> We take care of all the
              groundwork; from packing to delivering at sites or warehouses or
              to the end consumer
            </li>
            <li className=" border-0">
              <b> Distribution & Warehouses – </b>We have been offering supplies
              to all our happy clients across the nation. We incorporate having
              our warehouses in every city to maintain par stock, which supports
              the setup of delivering the products on time.
            </li>
            <li className=" border-0">
              <b>Transportation –</b> We are equipped with our transport and
              robust delivery system, across the country that fulfills the order
              requirements and ensures prompt delivery of the products. Each
              transport vehicle has a GPS tracker, which guarantees the timely
              delivery of the goods.
            </li>
            <li className=" border-0">
              <b> SAP Managed Inventory – </b>We aspire to redefine business
              performance with real-time inventory metrics and to improve
              efficiency by eliminating errors with seamless integration.
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
