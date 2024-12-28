"use client";
import localFont from "next/font/local";
import { Poppins, Lato } from "next/font/google";
import "./globals.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast"; // Import Toaster
import { AuthProvider } from "./Context/authContext";

const ReduxProvider = dynamic(() => import("@/app/redux/redux-provider"), {
  ssr: false,
});


const gilroyExtraBold = localFont({
  src: "./fonts/Gilroy-Heavy.ttf",
  variable: "--font-gilroy-extra-bold",
  weight: "800",
});

const gilroyBold = localFont({
  src: "./fonts/Gilroy-Bold.ttf",
  variable: "--font-gilroy-bold",
  weight: "700",
});

const gilroyMedium = localFont({
  src: "./fonts/Gilroy-Medium.ttf",
  variable: "--font-gilroy-medium",
  weight: "600",
});

const gilroyRegular = localFont({
  src: "./fonts/Gilroy-Regular.ttf",
  variable: "--font-gilroy-regular",
  weight: "500",
});

const gilroyLight = localFont({
  src: "./fonts/Gilroy-Light.ttf",
  variable: "--font-gilroy-light",
  weight: "400",
});

// Google Font (Poppins)
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

// Google Font (Lato)
const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` 
          ${gilroyExtraBold.variable} 
          ${gilroyBold.variable} 
          ${gilroyMedium.variable} 
          ${gilroyRegular.variable} 
          ${gilroyLight.variable} 
          ${poppins.variable}
          ${lato.variable}
          antialiased`}
      >
        <AuthProvider>
          <ReduxProvider>
            {/* Toaster added here */}
            <Toaster position="top-right" reverseOrder={false} />
            <div>{children}</div>
          </ReduxProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
