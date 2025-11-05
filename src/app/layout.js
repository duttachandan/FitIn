import Cursor from "@/features/Cursor";
import "./globals.css";
import Navbar from "@/utils/Navbar";
import Footer from "@/utils/Footer";
import SmoothScrollWrapper from "@/utils/SmoothScrollWrapper";
import AnimateOnScroll from "@/utils/AnimateOnScroll";
import ScrolltoTop from "@/utils/ScrolltoTop";

export const metadata = {
  title: "FitIn",
  description: "FitIn Your Next Fitness Application, 30+ trained Professionals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <AnimateOnScroll>
          <Navbar />
          <SmoothScrollWrapper>
            {children}
            <Footer />
          </SmoothScrollWrapper>
          <Cursor />
        </AnimateOnScroll>
        <ScrolltoTop />
      </body>
    </html>
  );
}
