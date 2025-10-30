import Image from "next/image";
import Link from "next/link";
import home from "../styles/home.module.css";
import Services from "@/utils/Services";

import { FaArrowUp } from "react-icons/fa6";

// Profiles
import Profile1 from "../assets/profile1.png";
import Profile2 from "../assets/profile2.png";
import Profile3 from "../assets/profile3.png";
import Profile4 from "../assets/profile4.png";

// import eclipse from "@/assets/Eclipse.png";
import About from "@/assets/About.png";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const profilesOfMembers = [
    {
      profile: Profile1,
      alternteText: "Profiles of Members",
    },
    {
      profile: Profile2,
      alternteText: "Profiles of Members",
    },
    {
      profile: Profile3,
      alternteText: "Profiles of Members",
    },
    {
      profile: Profile4,
      alternteText: "Profiles of Members",
    },
  ];

  return (
    <>
      <main>
        {/* Banner Section */}
        <section
          className={`${home.banner_sec} 
          flex items-end`}
        >
          <div className="container">
            <div className={`row ${home.banner_row}`}>
              <div className="col-4">
                {/* Members */}
                <p className="grad-text">
                  Lorem ipsum dolor sit amet consectetur. Nullam vitae leo sed
                  scelerisque.
                </p>
                <div className={`${home.memebers}`}>
                  {profilesOfMembers.map((data, index) => (
                    <Image
                      className="rounded-full"
                      key={index}
                      src={data.profile}
                      alt={data.alternteText}
                    />
                  ))}
                </div>
                <div className="grad-text">
                  <span className="primary-text">12k +</span> Membership Enjoy
                  Our Programs
                </div>

                <div className={`${home.scroll_logo} text-white mt-3 mb-3`}>
                  <span style={{ animationDelay: `${1 * 0.1}s` }}>S</span>
                  <span style={{ animationDelay: `${2 * 0.1}s` }}>c</span>
                  <span style={{ animationDelay: `${3 * 0.1}s` }}>r</span>
                  <span style={{ animationDelay: `${4 * 0.1}s` }}>o</span>
                  <span style={{ animationDelay: `${5 * 0.1}s` }}>l</span>
                  <span style={{ animationDelay: `${6 * 0.1}s` }}>l</span>
                </div>
              </div>
              <div className="col-8">
                <div className="h-full flex flex-col justify-between">
                  <h1
                    data-speed-y="5"
                    data-offset="-50"
                    className="title1 luxy-el text-white"
                  >
                    FocusFuel
                    <br />
                    <span className="primary-text">Fitness</span>
                  </h1>
                  <Link href="/visit-us" className={`${home.visit_link} mb-5`}>
                    Visit Now
                    <FaArrowUp
                      className="ml-[50px] 
                  font-light"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Services Provided Section */}
        <Services />

        {/* About Our Gym Section */}
        <section className={`${home.about_sec}`}>
          <div className="container">
            <div className={`row ${home.about_heading}`}>
              <div className="col-6">
                <h2 className={`title2 ${home.about_title}`}>About Our Gym</h2>
              </div>
              <p className="grad-text col-6">
                Empowering Every Body to Move Stronger, Live Better, and Go
                Further
              </p>
            </div>
            <div className="row">
              <div className="col-6">
                <div className={home.about_img}>
                  <Image src={About} alt="" />
                </div>
              </div>
              <div className="col-6">
                <div className="About-content">
                  <h3 className={home.about_subTitle}>
                    We believe fitness is more than just physical. It’s about
                    building confidence, discipline, and a lifestyle you can be
                    proud of.
                  </h3>
                  <div className="row">
                    <div className="col-6">
                      Founded with the version of creating a spacet for all
                      fitness levels .Our gym offers expert guidence modern
                      equipment and an uplifting atmosphere to help you achieve
                      your goals.
                    </div>
                    <div className="col-6">
                      Whether you’re a beginner or a seasoned athlete. We’re
                      here to support your journey with personalized training,
                      diverse programs and a community that motivates you every
                      step of the way
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
