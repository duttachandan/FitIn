import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <section
          className={`banner-sec bg-[url('../assets/01..png')] 
        min-h-screen bg-top bg-no-repeat bg-cover`}
        >
          <div className="container mx-auto px-[15px]"></div>
        </section>
      </main>
    </>
  );
}
