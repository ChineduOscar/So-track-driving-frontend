import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "So-track Driving School | Best Driving School in Port Harcourt",
  description:
    "Government-approved driving school in Port Harcourt. Trained over 3000+ students. Professional driving lessons, driver's license processing, vehicle licensing, and renewal services.",
  keywords: [
    "Driving School Port Harcourt",
    "Driving School in Port Harcourt",
    "Driving School in Nigeria",
    "SO-TRACK Driving School",
    "Driving Lessons Port Harcourt",
    "Driver's License Processing",
    "Vehicle License Renewal",
    "Government Approved Driving School",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
