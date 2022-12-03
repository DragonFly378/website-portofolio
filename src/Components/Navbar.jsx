import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import navLogo from "../assets/img/navlogo.svg";
import arrowDown from "../assets/img/arrow-down.svg";
import { Link } from "react-router-dom";

const Navbar = ({ active }) => {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { name: "Home", value: "/" },
    { name: "Work", value: "/work" },
    { name: "About me", value: "/about" },
    {
      name: "Contact me 🤙",
      value: "/contact",
      className: "underline underline-offset-8 decoration-wavy",
    },
  ];

  console.log(isOpen);
  return (
    <section className="navbar-section sticky top-0 z-40 bg-dark-blue">
      {/* mobile view */}
      <div className="md:hidden w-11/12 mx-auto py-6 sticky z-40">
        <div className="flex justify-center">
          <div className="nav-brand grid gap-y-4">
            <img src={navLogo} alt="navlogo" className="w-32" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="place-self-center"
            >
              <img
                src={arrowDown}
                alt="arrow"
                className="text-white text-xl w-5 animate-bounce"
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen === true ? "h-screen top-[100px]" : "top-[-800px] "
        }   ease-in-out duration-700  nav-links flex flex-col gap-y-5 text-center py-60  m-auto absolute left-0 right-0 z-20 bg-dark-blue `}
      >
        {tabs.map((item, itemIdx) => {
          return (
            <button
              key={itemIdx}
              className={`${
                active === item.value && "text-orange font-medium"
              } text-light-blue ${item.className}`}
            >
              <Link to={`${item.value}`}>{item.name}</Link>
            </button>
          );
        })}
      </div>

      {/* web view */}
      <div className="hidden md:flex md:justify-between w-10/12 mx-auto py-8">
        <div className="nav-brand">
          <img src={navLogo} alt="" />
        </div>
        <div className="nav-links flex gap-x-8 my-auto ">
          {tabs.map((item, itemIdx) => {
            return (
              <div
                key={itemIdx}
                className={`${
                  active === item.value && "text-orange font-medium"
                } text-light-blue ${item.className}`}
              >
                <Link to={`${item.value}`}>{item.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
