import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Shop",
  description: "Shopping with myShop",
  icons:[
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
    { rel: "apple-touch-icon", url: "/favicon-180x180.png", sizes: "180x180" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
          <div>
          {children}
          </div>
          <Footer />
      </body>
    </html>
  );
}
