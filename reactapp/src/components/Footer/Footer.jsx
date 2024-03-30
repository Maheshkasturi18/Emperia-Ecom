import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className=" text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h4 className="mb-3">About Company</h4>

              <ul className="list-unstyled mb-0 lh-lg">
                <li>
                  <a href="#!" className="text-dark text-decoration-none">
                    Company History
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark text-decoration-none">
                    Leadership
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark text-decoration-none">
                    Core Values
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h4 className="mb-3">Quick Links</h4>

              <ul className="list-unstyled lh-lg">
                <li>
                  <a href="/" className="text-dark text-decoration-none">
                    Manufacturing and Distribution
                  </a>
                </li>
                <li>
                  <a href="/" className="text-dark text-decoration-none">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/" className="text-dark text-decoration-none">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="/" className="text-dark text-decoration-none">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/" className="text-dark text-decoration-none">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h4 className="mb-3">Our Products</h4>

              <ul className="list-unstyled mb-0 lh-lg">
                <li>
                  <a href="#!" className="text-dark text-decoration-none">
                    Personal Care
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark text-decoration-none">
                    Bathroom Care
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark text-decoration-none">
                    Floor & Surface Care
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark text-decoration-none">
                    General Care
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-dark text-decoration-none">
                    Kitchen Care
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h4 className="mb-3">Contact Info</h4>

              <ul className="list-unstyled">
                <li>
                  <p className="lh-lg">
                    Empire Industries Limited - Hygiene Care, Empire Complex,
                    414, Senapati Bapat Marg, Lower Parel (W), Mumbai - 400013
                  </p>
                  <p><a href="/" className="text-dark text-decoration-none">1800 209 2526</a></p>
                  <p><a href="/" className="text-dark text-decoration-none">care@grabbitempire.com</a></p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="container  d-lg-flex p-3 border-top border-grey justify-content-between ">
          <div className="copyright">
            <div>
              Copyright © 2023 Emperia 1900
            </div>

            <div>
               Powered by <a href="/" target="_blank" className="tushar text-decoration-none "> Tushar Chawatekar </a>
            </div>
          </div>



          <div className="d-flex justify-content-center mt-2">
            <ul class="d-flex gap-3 list-unstyled ">
              <li>
                <a href="/" target="_blank">
                  <i class="fa-brands fa-facebook fs-4 fb"></i>
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  <i class="fa-brands fa-instagram fs-4 ig"></i>
                </a>
              </li>
              <li>
                <a href="/" target="_blank">
                  
                  <i class="fa-brands fa-linkedin fs-4 in"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fa-brands fa-twitter fs-4 twt"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fa-brands fa-youtube fs-4 yt"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
