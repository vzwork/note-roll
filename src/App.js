import React, { createContext } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import app from "./firebase";

import Navbar from "./components/Navbar/Navbar";
import Account from "./pages/Account/Account";
import SignIn from "./pages/Account/NoAuth/SignIn";
import SignUp from "./pages/Account/NoAuth/SignUp";
import Reset from "./pages/Account/NoAuth/Reset";
import Home from "./pages/Home/Home";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="account" element={<Account />}>
          <Route index element={<SignIn />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="reset" element={<Reset />} />
          <Route path="*" element={<SignIn />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
