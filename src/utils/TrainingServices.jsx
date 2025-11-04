import React from "react";
import home from "@/styles/home.module.css";
import { FaArrowUp } from "react-icons/fa6";

const TrainingServices = () => {
  return (
    <section className={home.trainingServices}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h2 className={`title2 ${home.about_title}`}>Services</h2>
          </div>
          <div className="col-8">
            <div>
              <div className={home.subTitle}>
                <span className={home.trainingTitle}>Personal Training</span>
                <span className={home.icons}>
                  <FaArrowUp />
                </span>
              </div>
            </div>
            <div>
              <div className={home.subTitle}>
                <span className={home.trainingTitle}>Group Training</span>
                <span className={home.icons}>
                  <FaArrowUp />
                </span>
              </div>
            </div>
            <div>
              <div className={home.subTitle}>
                <span className={home.trainingTitle}>Corporate Training</span>
                <span className={home.icons}>
                  <FaArrowUp />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingServices;
