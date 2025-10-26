import Cursor from "@/features/Cursor";
import "./globals.css";
import Navbar from "@/utils/Navbar";
import Footer from "@/utils/Footer";

export const metadata = {
  title: "FitIn",
  description: "FitIn Your Next Fitness Application, 30+ trained Professionals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        <Navbar  />
        {children}
        <Footer />
      </body>
    </html>
  );
}
