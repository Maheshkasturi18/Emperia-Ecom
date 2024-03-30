import React,{Component} from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Ourclients.css"


export default class Ourclients extends Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              autoplay: true,
             autoplaySpeed: 4000,
             pauseOnHover: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
              autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true,     
            }
          },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 4000,
              pauseOnHover: true,
            }
          }
        ]
      };
      return (
        <div className=" bg p-5 ">
        
          <center className="text-uppercase text-white fs-4 fw-semibold mb-4">Our Client</center>
          <div className="container ">
          <Slider {...settings}>
            <div>
              <img src="images/our_client_img1.jpg" className="img-fluid p-2" alt="" />
            </div>
            <div>
            <img src="images/our_client_img2.jpg"  className="img-fluid p-2"  alt="" />
            </div>
            <div>
            <img src="images/our_client_img3.jpg"  className="img-fluid p-2" alt="" />
            </div>
            <div>
            <img src="images/our_client_img4.jpg" className="img-fluid p-2"  alt="" />
            </div>
            <div>
            <img src="images/our_client_img5.jpg"  className="img-fluid p-2" alt="" />
            </div>
            <div>
            <img src="images/our_client_img6.jpg"  className="img-fluid p-2" alt="" />
            </div>
            <div>
            <img src="images/our_client_img7.jpg" className="img-fluid p-2"  alt="" />
            </div>
            <div>
            <img src="images/our_client_img8.jpg"  className="img-fluid p-2" alt="" />
            </div>
            <div>
            <img src="images/our_client_img9.jpg" className="img-fluid p-2"  alt="" />
            </div>
            <div>
            <img src="images/our_client_img10.jpg"  className="img-fluid p-2" alt="" />
            </div>
          </Slider>
          </div>
          
        </div>
      );
    }
  }