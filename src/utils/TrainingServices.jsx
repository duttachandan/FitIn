"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa6";
import Image1 from "@/assets/hoverImage.png";
import home from "@/styles/home.module.css";

const TrainingServices = () => {
  const [hover, setHover] = useState(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const [renderPos, setRenderPos] = useState({ x: 0, y: 0 });

  const animationRef = useRef(null);

  const onMouseMove = (e, index) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    targetPos.current = { x, y };
    setHover(index);
  };

  const onMouseLeave = () => {
    setHover(null);
  };

  // 🌀 Smoothly interpolate toward the target position
  useEffect(() => {
    const animate = () => {
      currentPos.current.x +=
        (targetPos.current.x - currentPos.current.x) * 0.12;
      currentPos.current.y +=
        (targetPos.current.y - currentPos.current.y) * 0.12;

      setRenderPos({
        x: currentPos.current.x,
        y: currentPos.current.y,
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const isImageVisible = (index) => index === hover;

  const trainingModules = [
    { trainingName: "Personal Training" },
    { trainingName: "Group Training" },
    { trainingName: "Corporate Training" },
  ];

  return (
    <section className={home.trainingServices}>
      <div className="container">
        <div className="row">
          {/* Heading */}
          <div className="col-4">
            <h2 className={`title2 ${home.about_title}`}>Services</h2>
          </div>

          {/* Hover Portion */}
          <div className="col-8">
            {trainingModules.map((elem, index) => (
              <div key={index}>
                <div
                  className={`${home.subTitle} relative`}
                  onMouseMove={(e) => onMouseMove(e, index)}
                  onMouseLeave={onMouseLeave}
                >
                  <span className={home.trainingTitle}>
                    {elem.trainingName}
                  </span>
                  <span className={home.icons}>
                    <FaArrowUp />
                  </span>

                  <div
                    className={`absolute pointer-events-none transition-opacity duration-300 ease-out ${
                      isImageVisible(index) ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      transform: `translate(${renderPos.x + 30}px, ${
                        renderPos.y - 60
                      }px) rotate(6.79deg)`,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <Image
                      src={Image1}
                      data-aos="zoom-in"
                      alt="Hovered Image"
                      className="max-w-[20.234vw] select-none"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingServices;
