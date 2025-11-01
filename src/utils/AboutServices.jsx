import React from 'react'
import home from "@/styles/home.module.css"
import Image from 'next/image'


import Frame from "@/assets/Frame-25.png"

const AboutServices = () => {
    return (
        <section className={home.second_services}>
            <div className="container">
                <div className={`row ${home.about_heading}`}>
                    <div className="col-6">
                        <h2 className={`title2 ${home.about_title}`}>About Our Gym</h2>
                    </div>
                    <p className="grad-text col-6">
                        Turn your  workout into a lifestyle that moves you forward
                    </p>
                </div>
                <div className='row'>
                    <div className="col-6">
                        <div className={home.second_services_image}>
                            <Image src={Frame} alt="Services Characters Image" />
                        </div>
                    </div>
                    <div className="col-6">
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutServices
