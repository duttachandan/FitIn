import React from "react";
import home from "@/styles/home.module.css";
import Image from "next/image";

import Frame from "@/assets/Frame-25.png";
import Right from "@/assets/Right.png";

const AboutServices = () => {
  return (
    <section className={home.second_services}>
      <div className="container">
        {/* Heading */}
        <div className={`row ${home.about_heading}`}>
          <div className="col-6">
            <h2 className={`title2 ${home.about_title}`}>About Our Gym</h2>
          </div>
          <p className="grad-text col-6">
            Turn your workout into a lifestyle that moves you forward
          </p>
        </div>

        {/* Gym Services */}
        <div className="row items-center flex-wrap-reverse">
          <div className="col-6">
            <div className={home.second_services_image}>
              <Image src={Frame} alt="Services Characters Image" />
            </div>
          </div>
          <div className="col-6">
            <div className={`${home.second_services_content} row mx-[-12px]`}>
              <div className={home.col_6}>
                <div className={home.card}>
                  <Image src={Right} alt="Right Tick" />
                  <h4>Certified & Experience Coachees</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Donec justo volutpat
                    dictumst suspendisse sed sed at libero. Sed congue diam nisl
                    lobortis diam ut.
                  </p>
                </div>
              </div>
              <div className={home.col_6}>
                <div className={home.card}>
                  <Image src={Right} alt="Right Tick" />
                  <h4>Certified & Experience Coachees</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Donec justo volutpat
                    dictumst suspendisse sed sed at libero. Sed congue diam nisl
                    lobortis diam ut.
                  </p>
                </div>
              </div>
              <div className={home.col_6}>
                <div className={home.card}>
                  <Image src={Right} alt="Right Tick" />
                  <h4>Certified & Experience Coachees</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Donec justo volutpat
                    dictumst suspendisse sed sed at libero. Sed congue diam nisl
                    lobortis diam ut.
                  </p>
                </div>
              </div>
              <div className={home.col_6}>
                <div className={home.card}>
                  <Image src={Right} alt="Right Tick" />
                  <h4>Certified & Experience Coachees</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Donec justo volutpat
                    dictumst suspendisse sed sed at libero. Sed congue diam nisl
                    lobortis diam ut.
                  </p>
                </div>
              </div>
              <div className={home.col_6}>
                <div className={home.card}>
                  <Image src={Right} alt="Right Tick" />
                  <h4>Certified & Experience Coachees</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Donec justo volutpat
                    dictumst suspendisse sed sed at libero. Sed congue diam nisl
                    lobortis diam ut.
                  </p>
                </div>
              </div>
              <div className={home.col_6}>
                <div className={home.card}>
                  <Image src={Right} alt="Right Tick" />
                  <h4>Certified & Experience Coachees</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Donec justo volutpat
                    dictumst suspendisse sed sed at libero. Sed congue diam nisl
                    lobortis diam ut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
