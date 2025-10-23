import Image from "next/image";
import Link from "next/link";
import home from "../styles/home.module.css"

export default function Home() {
  return (
    <>
      <main>
        <section
          className={`${home.banner_sec} 
          flex items-end`}
        >
          <div className="container">
            <div className="row">
              <div className="col-4">
                {/* Members */}
                <p className="grad-text">Lorem ipsum dolor sit amet consectetur. Nullam vitae leo sed scelerisque.</p>
              </div>
              <div className="col-8"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
