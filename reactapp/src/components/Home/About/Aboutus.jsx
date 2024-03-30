import React, { Component } from "react";
import "./Aboutus.css";

export default class Aboutus extends Component {
  render() {
    return (
      <section className="about-bg ">
        <div className="container p-md-4 ">
          <div className="row">
            <div className="col-lg-6 about mb-4 mb-lg-0 ">
              <img src="images/GIF.gif" alt="" className="about-gif img-fluid" />
              <img
                src="images/about_us_img.jpg"
                alt=""
                className="about-img pt-4 ps-3 pt-md-5 ps-md-5 img-fluid"
              />
            </div>

            <div className="col-lg-6 px-4 col-md-12">
              <h4 className="fw-semibold about-head">ABOUT US</h4>
              <p className="lh-lg py-2">
                Hygiene Care is a division of Empire Industries Limited, a
                century-old conglomerate with a repertoire of business interests
                and a legacy of trust. Empire Industries is a public limited
                company that is headquartered in Mumbai, India. In addition to
                its diverse portfolio of businesses, Empire Industries Limited
                has established a strong market presence in the manufacturing
                and marketing of machine tools, industrial equipment, glass
                bottles and frozen foods; while also subleasing out business
                centers along with integrated industrial and residential
                townships and introducing the concept of vending in India.
                Grabbit+: Premium Vending Solutions is the pioneer and market
                leader in the vending industry and has evolved to be the most
                preferred vending service provider in India.
              </p>
            </div>
          </div>
        </div>
      </section>


    );
  }
}
