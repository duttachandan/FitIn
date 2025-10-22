import "./globals.css";
import Navbar from "@/utils/Navbar";

export const metadata = {
  title: "FitIn",
  description: "FitIn Your Next Fitness Application, 30+ trained Professionals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
