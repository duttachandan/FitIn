import Image from "next/image";
import Link from "next/link";
import home from "../styles/home.module.css";

import { FaArrowUp } from "react-icons/fa6";

// Profiles
import Profile1 from "../assets/profile1.png";
import Profile2 from "../assets/profile2.png";
import Profile3 from "../assets/profile3.png";
import Profile4 from "../assets/profile4.png";

export default function Home() {
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
                      key={index}
                      src={data.profile}
                      alt={data.alternteText}
                    />
                  ))}
                </div>
                <div className="grad-text">
                  <span className="primary-text">12k +</span> MembershipEnjoy
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
                  <h1 className="title1 text-white">
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

        {/* Grop Workout Section */}
        
      </main>
    </>
  );
}
