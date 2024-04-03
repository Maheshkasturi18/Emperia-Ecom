import React, { Component } from "react";
import Slider from "react-slick";
import "./Ourproduct.css";
import { Link } from "react-router-dom";

export default class Ourproduct extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 4000,
          },
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
          },
        },
      ],
    };
    return (
      <div className="product-bg p-4">
        <center className="text-uppercase fs-4 fw-semibold mb-4">
          Our Products
        </center>
        <div className="container p-3">
          <Slider {...settings}>
            <div className="img-wrapper ">
              <img
                src="images/our_product_img1.jpeg"
                className="img-fluid p-2"
                alt=""
              />
              <div className="content m-2 slide-up">
                <p className="text-capitalize mb-1">
                  Emperia 1900  k-pro machine rinse 5 liters
                </p>
                <p className="mb-1">
                  <i class="fa-solid fa-indian-rupee-sign me-2"></i>4999.00
                </p>
                <Link  to="" className="btn text-uppercase border border-info text-white fw-bold">
                  add to cart
                </Link>
              </div>
            </div>

            <div className="img-wrapper">
              <img
                src="images/our_product_img2.jpg"
                className="img-fluid p-2"
                alt=""
              />
              <div className="content m-2 slide-up">
                <p className="text-capitalize mb-1">
                  garbbit first hand sanitizer 5 liters
                </p>
                <p className="mb-1">
                  <i class="fa-solid fa-indian-rupee-sign me-2"></i>999.00
                </p>
                <Link  to=""className="btn text-uppercase border border-info text-white fw-bold">
                  add to cart
                </Link>
              </div>
            </div>

            <div className="img-wrapper">
              <img
                src="images/our_product_img3.jpg"
                className="img-fluid p-2"
                alt=""
              />
              <div className="content m-2 slide-up">
                <p className="text-capitalize mb-1">
                garbbit first hand wash 5 liters
                </p>
                <p className="mb-1">
                  <i class="fa-solid fa-indian-rupee-sign me-2"></i>999.00
                </p>
                <Link  to=""className="btn text-uppercase border border-info text-white fw-bold">
                  add to cart
                </Link>
              </div>
            </div>

            <div className="img-wrapper">
              <img
                src="images/our_product_img4.jpg"
                className="img-fluid p-2"
                alt=""
              />
              <div className="content m-2 slide-up">
                <p className="text-capitalize mb-1">
                  Emperia 1900 Vol 9 shine & descaler 5 liters
                </p>
                <p className="mb-1">
                  <i class="fa-solid fa-indian-rupee-sign me-2"></i>1499.00
                </p>
                <Link  to=""className="btn text-uppercase border border-info text-white fw-bold">
                  add to cart
                </Link>
              </div>
            </div>

            <div className="img-wrapper">
              <img
                src="images/our_product_img5.jpg"
                className="img-fluid p-2"
                alt=""
              />
              <div className="content m-2 slide-up">
                <p className="text-capitalize mb-1">
                  Emperia 1900 Vol 7 floor cleaner 5 liters
                </p>
                <p className="mb-1">
                  <i class="fa-solid fa-indian-rupee-sign me-2"></i>099.00
                </p>
                <Link  to=""className="btn text-uppercase border border-info text-white fw-bold">
                  add to cart
                </Link>
              </div>
            </div>

            <div className="img-wrapper">
              <img
                src="images/our_product_img6.jpg"
                className="img-fluid p-2"
                alt=""
              />
              <div className="content m-2 slide-up">
                <p className="text-capitalize mb-1">
                  Emperia 1900 Vol 5 air freshener blossom 5 liters
                </p>
                <p className="mb-1">
                  <i class="fa-solid fa-indian-rupee-sign me-2"></i>1499.00
                </p>
                <Link  to=""className="btn text-uppercase border border-info text-white fw-bold">
                  add to cart
                </Link>
              </div>
            </div>

            <div className="img-wrapper">
              <img
                src="images/our_product_img1.jpeg"
                className="img-fluid p-2"
                alt=""
              />
              <div className="content m-2 slide-up">
                <p className="text-capitalize mb-1">
                Emperia 1900  k-pro machine rinse 5 liters
                </p>
                <p className="mb-1">
                  <i class="fa-solid fa-indian-rupee-sign me-2"></i>4999.00
                </p>
                <Link  to=""className="btn text-uppercase border border-info text-white fw-bold">
                  add to cart
                </Link>
              </div>
            </div>

            <div className="img-wrapper">
              <img
                src="images/our_product_img8.jpg"
                className="img-fluid p-2"
                alt=""
              />
              <div className="content m-2 slide-up">
                <p className="text-capitalize mb-1">
                  Emperia 1900 Vol 5 air freshener blossom 5 liters
                </p>
                <p className="mb-1">
                  <i class="fa-solid fa-indian-rupee-sign me-2"></i>1499.00
                </p>
                <Link  to=""className="btn text-uppercase border border-info text-white fw-bold">
                  add to cart
                </Link>
              </div>
            </div>

            <div className="img-wrapper">
              <img
                src="images/our_product_img9.jpg"
                className="img-fluid p-2"
                alt=""
              />
              <div className="content m-2 slide-up">
                <p className="text-capitalize mb-1">
                  Emperia 1900 Vol 4 wood maintainer 5 liters
                </p>
                <p className="mb-1">
                  <i class="fa-solid fa-indian-rupee-sign me-2"></i>2999.00
                </p>
                <Link  to=""className="btn text-uppercase border border-info text-white fw-bold">
                  add to cart
                </Link>
              </div>
            </div>

            <div className="img-wrapper">
              <img
                src="images/our_product_img5.jpg"
                className="img-fluid p-2"
                alt=""
              />
              <div className="content m-2 slide-up">
                <p className="text-capitalize mb-1">
                  Emperia 1900 Vol 7 floor cleaner 5 liters
                </p>
                <p className="mb-1">
                  <i class="fa-solid fa-indian-rupee-sign me-2"></i>999.00
                </p>
                <Link  to=""className="btn text-uppercase border border-info text-white fw-bold">
                  add to cart
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
