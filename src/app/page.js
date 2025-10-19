import Image from "next/image";
import Link from "next/link";
import Navbar from "../utils/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section 
        className={`banner-sec bg-[url('../assets/01..jpg')] 
        min-h-screen bg-top bg-no-repeat bg-cover`}>
          <div className="container mx-auto px-[15px]"></div>
        </section>
      </main>
    </>
  );
}
