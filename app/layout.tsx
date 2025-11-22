import "./globals.css";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Navigation from "./Navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const analogTypewriter = localFont({
  src: "./fonts/Analog Typewriter.ttf",
  variable: "--font-analog",
  display: "swap",
});

export const metadata = {
  title: "My Portfolio",
  description: "Designed by Sheyda",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${analogTypewriter.variable}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
