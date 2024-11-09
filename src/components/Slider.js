import React from "react";
import ecommerce_1 from "../images/ecommerce_1.jpeg";
import ecommerce_2 from "../images/ecommerce_2.jpeg";
import ecommerce_3 from "../images/ecommerce_3.jpg";
import "./Slider.css"

function Slider()
{
    return (
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={ecommerce_1} className="d-block w-100 height-500" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={ecommerce_2} className="d-block w-100 height-500" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={ecommerce_3} className="d-block w-100 height-500" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    );
}

export default Slider;