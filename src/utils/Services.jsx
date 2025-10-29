"use client";
import React from "react";
import home from "@/styles/home.module.css";
import Image from "next/image";

// Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Personal Traning
import Trainer from "../assets/Trainer1.png";
import Trainer2 from "../assets/Trainer2.png";
import Trainer3 from "../assets/Trainer3.png";

const Services = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      }
    ],
  };

  return (
    <section className="services-sec">
      <div className={`container ${home.slick_container}`}>
        <Slider {...settings}>
          <div className={home.slider_card}>
            <div className={`${home.services_card}`}>
              <h2 className={`title2 ${home.services_title}`}>
                Personal Traning
              </h2>
              <div className={home.services_count}>01</div>
              <div className={home.services_img}>
                <Image src={Trainer} alt="Trainer No 1" />
              </div>
            </div>
          </div>
          <div className={home.slider_card}>
            <div className={`${home.services_card}`}>
              <h2 className={`title2 ${home.services_title}`}>
                Personal Traning
              </h2>
              <div className={home.services_count}>01</div>
              <div className={home.services_img}>
                <Image src={Trainer} alt="Trainer No 1" />
              </div>
            </div>
          </div>
          <div className={home.slider_card}>
            <div className={`${home.services_card}`}>
              <h2 className={`title2 ${home.services_title}`}>
                Personal Traning
              </h2>
              <div className={home.services_count}>01</div>
              <div className={home.services_img}>
                <Image src={Trainer} alt="Trainer No 1" />
              </div>
            </div>
          </div>
          <div className={home.slider_card}>
            <div className={`${home.services_card}`}>
              <h2 className={`title2 ${home.services_title}`}>
                Personal Traning
              </h2>
              <div className={home.services_count}>01</div>
              <div className={home.services_img}>
                <Image src={Trainer} alt="Trainer No 1" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Services;
