import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div className="min-h-screen bg-black flex justify-center items-center">
        Home Page
      </div>
    </>
  );
}
