import localFont from "next/font/local";
import { Poppins, Lato } from "next/font/google";
import "./globals.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Toaster } from "react-hot-toast";
import StoreProvider from "./StoreProvider";
import ProtectedRoute from "./ProtectedRoute";

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
      <title>Distrosub</title>
      <meta
        name="description"
        content="This is your app's description for SEO."
      />
      <meta
        name="keywords"
        content="next.js, redux, persistence, gilroy fonts"
      />
      <meta name="author" content="Your Name" />
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
        <StoreProvider>
          <Toaster position="top-right" reverseOrder={false} />
          <ProtectedRoute>{children}</ProtectedRoute>
        </StoreProvider>
      </body>
    </html>
  );
}
