import React from "react";

const UserContext = React.createContext()

export default UserContext;

// UserContextProvider
//         ↓
// Provider ke andar value pass hui
//         ↓
// Login component setUser() se data bhej raha
//         ↓
// Profile component useContext() se data le raha