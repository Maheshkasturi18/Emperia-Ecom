import React, { Component } from "react";
import Slider from "react-slick";
import "./Testimonial.css";

export default class Testimonial extends Component {
  render() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 1 ,
              slidesToScroll: 1,
              infinite: false,
              dots: true,
              autoplay: true,
             autoplaySpeed: 3000,
            }
          },
          
        ]
      };
    return (
      <div className="testimonial-bg p-4">
        <center className="text-uppercase text-white fs-4 fw-semibold mb-4">
          Testimonials
        </center>
        <div className="container p-4">
          <Slider {...settings}>
            <div>
              <center>
                <img src="images/testimonial_img1.jpg" className="testi_img mb-3" alt="" />

                <i className="fa-solid fa-star star"></i>
                <i className="fa-solid fa-star  star"></i>
                <i className="fa-solid fa-star  star"></i>
                <i className="fa-solid fa-star  star"></i>
                <i className="fa-solid fa-star  star"></i>

                <h4 className="mt-3 text-white">Hitesh Makwana</h4>

                <p> Senior Administrator,Cimpress India Private Ltd.</p>
              </center>
            </div>

            <div>
              <center>
                <img
                  src="images/testimonial_img2.jpg"
                  className="testi_img mb-3"
                  alt=""
                />

                <i className="fa-solid fa-star star"></i>
                <i className="fa-solid fa-star star"></i>
                <i className="fa-solid fa-star star"></i>
                <i className="fa-solid fa-star star"></i>
                <i className="fa-solid fa-star star"></i>

                <h4 className="mt-3 text-white">Pushpa Joshi</h4>

                <p>
                  Admin Executive,Rockwell Automation India Private Ltd.
                </p>
              </center>
            </div>

            <div>
              <center>
                <img
                  src="images/testimonial_img3.jpg"
                  className="testi_img mb-3"
                  alt=""
                />

                <i className="fa-solid fa-star star"></i>
                <i className="fa-solid fa-star star"></i>
                <i className="fa-solid fa-star star"></i>
                <i className="fa-solid fa-star star"></i>
                <i className="fa-solid fa-star star"></i>

                <h4 className="mt-3 text-white">Neeru Mittal</h4>

                <p>Associate(ES&A),The Tata Power Company Private Limited</p>
              </center>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
