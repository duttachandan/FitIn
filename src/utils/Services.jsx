"use client";
import React from "react";
import home from "@/styles/home.module.css";
import Image from "next/image";

// Splide Carousel
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Default theme (you can switch to /core or /skyblue)

// Personal Training Images
import Trainer from "../assets/Trainer1.png";
import Trainer2 from "../assets/Trainer2.png";
import Trainer3 from "../assets/Trainer3.png";

const Services = () => {
  const options = {
    type: "loop",
    perPage: 3,
    autoplay: true,
    interval: 2000,
    pagination: false,
    arrows: false,
    breakpoints: {
      1024: { perPage: 2 },
      576: { perPage: 1 },
    },
  };

  const trainers = [
    {
      img: Trainer,
      title: "Personal Training",
      count: "01",
    },
    {
      img: Trainer2,
      title: "Group Workout",
      count: "02",
    },
    {
      img: Trainer3,
      title: "Muscle Building",
      count: "03",
    },
  ];

  return (
    <section className="services-sec">
      <div className={`container ${home.slick_container}`}>
        <Splide options={options} aria-label="Services Carousel">
          {trainers.map((img, i) => (
            <SplideSlide key={i}>
              <div className={home.slider_card}>
                <div className={home.services_card}>
                  <h2 className={`title2 ${home.services_title}`}>
                    {img.title}
                  </h2>
                  <div className={home.services_count}>{img.count}</div>
                  <div className={home.services_img}>
                    <Image
                      src={img.img}
                      alt={`Trainer No ${i + 1}`}
                      width={300}
                      height={300}
                      priority={i === 0} // Optimize first image
                    />
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Services;
