// // src/context/AuthContext.js

// import React, { createContext, useContext, useState } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const login = (email, password) => {
//     // Simulate an API call for login
//     if (email && password) {
//       setUser({ email }); // You can also include more user details here
//     }
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };


"use client"
import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  const registerUser = (userData) => {
    setUsers((prevUsers) => [...prevUsers, userData]);
  };

  const login = (email, password) => {
    // Simulate an API call for login
    const foundUser = users.find(user => user.email === email && user.password === password);
    if (foundUser) {
      setUser(foundUser); 
    } else {
      // Handle login failure
      console.error("Invalid email or password");
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, users, registerUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
