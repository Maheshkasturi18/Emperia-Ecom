import React, { Component } from "react";
import "./Leadership.css";

export default class Leadership extends Component {
  render() {
    return (
      <section className="lead-bg">
        <div className="lead-head">
          <h1 className="lead-head-name fw-bold "> Our History</h1>
        </div>

        <div className="container py-4 lh-lg">
          <div className="row py-3">
            <div className="col-lg-6 ">
              <img
                src="images/leadership-img1.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6 ">
              <p>
                <b>Mr. Sandeep Jain </b>is the
                <b>
                  Director and CEO of Empire Industries Limited – Grabbit+ and
                  the Founder of Emperia 1900.
                </b>
                Being an alumnus of IIM Calcutta, he has played a vital role in
                making Grabbit+ paramount in its ascent as the market leader in
                vending solutions, since its inception and has contributed to
                assisting institutions across the country in maintaining hygiene
                and creating a healthier, better and safer environment for its
                employees and visitors by making a range of health and hygiene
                solutions expediently available. He has not only been a
                charismatic leader but has also excelled at turning the talent
                of his employees into performance. Mr. Sandeep Jain shares his
                thoughts and vision for the company he leads;
              </p>
            </div>
          </div>

          <p>
            In today’s environment, health and hygiene dictate most of our
            personal choices, as a clean & hygienic place is a much safer,
            healthier, and more pleasant place to live or work. We are committed
            to providing advanced quality Health & Hygiene products & making
            them conveniently available across the country.
          </p>
          <p>
            I am proud to lead a team of dedicated professionals who are
            committed to promoting public health and safety through our
            innovative hygiene care solutions. Due to the high demand for
            various categories of products and the trust bestowed on us by our
            clients during testing times, we look forward to continuing to serve
            you with the highest standards of quality and excellence. We believe
            that by doing so, we can make a positive impact on the environment
            and the communities we serve. We strive to be a responsible and
            socially conscious company, inspiring others to join us in our
            mission to promote public health and well-being. We look forward to
            continuing to serve you with the highest standards of quality and
            excellence.
          </p>

          <p>
            <b> Emperia 1900 </b>is steadfastly committed to innovation and
            improvement in our products. As a growing industry, we are
            inevitably going to face some challenges. Nevertheless, we are
            confident that, having learned the nuances of this trade and with
            the experience gleaned from these lessons, Emperia 1900 will emerge
            as an icon of hygiene care across the country and the world will
            watch its unique success story. The opportunity to create a
            world-class business from scratch is one that few people are lucky
            to have and for all of us, this experience promises to be a great
            adventure.
          </p>

          <p>
            We remain grateful for your support and encouragement through our
            journey and remain committed to augmenting our product range that
            supports a healthier living and better lifestyle.
          </p>

          <p>
            We are proud to be a part of the effort to promote public health and
            prevent the spread of infections. We believe that our products and
            services will make a meaningful difference in the lives of
            individuals and communities. We look forward to serving you and
            building a long-lasting partnership.
          </p>


          <p className="fw-bold fst-italic fs-5">
            <i className="fa-solid fa-quote-left pe-4"></i>
            Our pursuit, to promote healthy living and prevent the spread of
            infections is guided by values far greater than us. We believe in
            providing effective and innovative hygiene care solutions that
            enable individuals and communities to maintain a clean and hygienic
            environment, whilst also having a customer-centric approach and
            serving as a responsible & socially conscious company that makes a
            positive impact on the nation.
            <i className="fa-solid fa-quote-right ps-3"></i>
          </p>

          <div className="row">
            <div className="col-lg-8 d-md-flex gap-3 justify-content-start align-items-center">
              <div className="mb-3 mb-lg-0 text-center">
                <img
                  src="images/leadership-img2.jpg"
                  className="img-fluid "
                  width={"124px"}
                  height={"124px"}
                  alt=""
                />
              </div>
              <div className="text-center text-md-start">
                <h4 className="fw-bold">Mr. Sandeep Jain</h4>
                <p>
                  Director and CEO of Empire Industries Limited - Emperia1900
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
