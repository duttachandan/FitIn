import Image from "next/image";
import Link from "next/link";
import home from "../styles/home.module.css"

// Profiles 
import Profile1 from "../assets/profile1.png"
import Profile2 from "../assets/profile2.png"
import Profile3 from "../assets/profile3.png"
import Profile4 from "../assets/profile4.png"

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
    }
  ]
  return (
    <>
      <main>
        <section
          className={`${home.banner_sec} 
          flex items-end`}
        >
          <div className="container">
            <div className={`row ${home.banner_row}`}>
              <div className="col-4">
                {/* Members */}
                <p
                  className="grad-text"
                >Lorem ipsum dolor sit amet consectetur.
                  Nullam vitae leo sed scelerisque.
                </p>
                <div className={`${home.memebers}`}>
                  {
                    profilesOfMembers.map((data, index) => (
                      <Image key={index} src={data.profile} alt={data.alternteText} />
                    )
                    )
                  }
                </div>
                <div className="grad-text">
                  <span className="primary-text">12k +</span> Membership Enjoy Our Programs
                </div>
              </div>
              <div className="col-8">
                <h1 className="title1 text-white">
                  FocusFuel
                  <br />
                  <span className="primary-text">Fitness</span>
                </h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
