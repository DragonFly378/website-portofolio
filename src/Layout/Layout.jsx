import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Layout = ({ children }) => {
  const location = useLocation();

  const path = location.pathname;
  // console.log(path);
  return (
    <>
      <Navbar active={path} />
      {children}
    </>
  );
};

export default Layout;
