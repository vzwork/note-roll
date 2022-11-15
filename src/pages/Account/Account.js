import React, { useEffect, useState } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import Navbar from "../../components/Navbar/Navbar";

const Account = () => {
  const auth = getAuth();
  const [user] = useAuthState(auth);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Account;
