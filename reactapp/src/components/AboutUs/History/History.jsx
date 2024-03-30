import React, { Component } from "react";
import "./History.css";

export default class History extends Component {
  render() {
    return (
      <section className="his-bg">

      <div className="hist-head">
        <h1 className="hist-head-name fw-bold text-white"> Our History</h1>
      </div>


        <div className="container py-4 lh-lg">
          <p>
          <b> Our journey began a century ago</b> when we started as a textile
            production house in India. Over the years, we have grown into a
            diversified group with a presence in multiple industries and
            sectors. <b>Empire Industries Limited, with its repertoire of
            businesses, has established a strong market presence in the
            manufacture and marketing of machine tools, industrial equipment,
            glass bottles, business centers, integrated industrial and
            residential townships, frozen foods and vending machines.</b>
          </p>
          <p>
            Empire Industries Limited., through its pioneering efforts,
            introduced the internationally understood concept of vending, in
            India.<b> Grabbit + was launched with the vision to be the most
            preferred vending solution provider by making world-class, quality
            vending machines for corporate offices in India.</b>
          </p>

          <div className="row py-3">
            <div className="col-lg-6">
              <p>
                During the surge of Covid-19, individuals and communities were
                faced with the most difficult challenges. The economy was
                distraught as the supply of the most basic necessities was
                inaccessible.<b> Grabbit+</b> saw this as an opportunity to contribute
                to the lives of many. <b>Grabbit+</b> not only offered vending services
                during this time but also assisted institutions across the
                country in maintaining hygiene and creating a healthier, better
                and safer environment for its employees and visitors by making a
                range of health and hygiene solutions expediently available.
                This marked the beginning of the Health & Hygiene vertical,
                which is known for developing high-quality products and
                providing world-class services to its customers. <b>Grabbit+</b>
                started contributing to the nation’s hygiene and was committed
                to serving with the same dedication and excellence that have
                been our hallmark for a hundred years.
              </p>
            </div>
            <div className="col-lg-6 "  data-aos="fade-left">
              <img
                src="images/history-img.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>

          <p>
            We have leveraged our decades of experience in research and
            development to create products that are safe, effective, and easy to
            use. As a company with a century-long legacy, we understand the
            importance of responsibility towards society. That is why all our
            products are carefully formulated to meet the highest standards of
            quality and safety.
          </p>
        </div>
      </section>
    );
  }
}
