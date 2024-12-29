// "use client";
// import React, { useEffect, useMemo } from "react";
// import { useSelector } from "react-redux";
// import { useRouter, usePathname } from "next/navigation";
// import { toast } from "react-hot-toast";

// function ProtectedRoute({ children }) {
//   const { authState } = useSelector((state) => state.auth);
//   const router = useRouter();
//   const pathname = usePathname();
//   const publicRoutes = useMemo(
//     () => ["/login", "/register", "/artist-register", "/forget-password","/otp","/reset-password"],
//     []
//   );

//   useEffect(() => {
//     const normalizedPathname = pathname?.split("?")[0];
//     if (!authState && !publicRoutes.includes(normalizedPathname)) {
//       if (normalizedPathname !== "/login") { // Prevent redundant toast on logout
//         toast.error("You must be logged in to view this page.");
//       }
//       router.push("/login");
//     }
//   }, [authState, pathname, router, publicRoutes]);
//   const normalizedPathname = pathname?.split("?")[0];
//   if (!authState && !publicRoutes.includes(normalizedPathname)) {
//     return <div>Loading...</div>;
//   }

//   return <>{children}</>;
// }

// export default ProtectedRoute;


"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const [token, setToken] = useState(null); // State to store the token
  const router = useRouter();
  const pathname = usePathname();

  const publicRoutes = [
    "/login",
    "/register",
    "/artist-register",
    "/forget-password",
    "/otp",
    "/reset-password",
  ];

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    setToken(storedToken);

    const normalizedPathname = pathname?.split("?")[0];
    if (!storedToken && !publicRoutes.includes(normalizedPathname)) {
      // toast.error("You must be logged in to view this page.");
      router.push("/login");
    }
  }, [pathname, router]);

  const normalizedPathname = pathname?.split("?")[0];

  if (!token && !publicRoutes.includes(normalizedPathname)) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;


