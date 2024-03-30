import React, { Component } from "react";
// import Slider from "react-slick";
// import { baseUrl } from "./config";
import "./Ourvision.css";

export default class Ourvision extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="container-fluid  d-none d-sm-none d-md-block d-lg-block">
            <div className="row">
              <div
                id="carouselExampleSlidesOnly"
                class="carousel slide p-0"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="card-img-overlay">
                    <div className="container-lg">
                      <div className="row">
                        <div className="col-sm-6 d-flex flex-column  py-5 m-3 ">
                          <h5 className="card-title mb-lg-3">Our Vision</h5>
                          <p className="card-text flex-wrap mb-lg-4 ">
                            To promote public health and hygiene by providing
                            leading hygiene care solutions that enable
                            individuals and communities to maintain a healthy
                            and safe environment.
                          </p>
                          <div className="button">
                            <button className="btn1  px-3 py-2 ">
                              Read More
                            </button>
                          </div>
                        </div>

                        <div className="col-sm-7"></div>
                      </div>
                    </div>
                  </div>

                  <div class="carousel-item active">
                    <img
                      src="images/our_vision_img1.png"
                      class="img-fluid d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img
                      src="images/our_vision_img2.png"
                      class="img-fluid d-block w-100 "
                      alt="..."
                      height={"526px"}
                    />
                  </div>
                </div>

                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* for mobile view */}

        <section className=" d-sm-block d-md-block">
          <div className="container-fluid-lg d-sm-block d-md-none d-lg-none">
            <div
              id="carouselExampleAutoplaying"
              class="carousel slide "
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="images/mh1.png" class="d-block w-100  " alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                  <img src="images/mh2.png" class="d-block w-100  " alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <div className="container-fluid-lg">
              <div className="bg py-3">
                <h5 class="card-title px-3 mb-3 text-black">Our Vision</h5>
                <p class="card-text flex-wrap  px-3">
                  To promote public health and hygiene by providing leading
                  hygiene care solutions that enable individuals and communities
                  to maintain a healthy and safe environment.
                </p>
                <div className="button mx-3">
                  <button className=" btn px-3 py-1 border-1 border-black">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
