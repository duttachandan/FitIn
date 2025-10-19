import "./globals.css";

export const metadata = {
  title: "FitIn",
  description: "FitIn Your Next Fitness Application, 30+ trained Professionals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
