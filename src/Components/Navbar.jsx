import React, { useState, useMemo, useCallback } from "react";

import navLogo from "../assets/img/navlogo.svg";
import arrowDown from "../assets/img/arrow-down.svg";
import arrowUp from "../assets/img/arrow-up.svg";

import { Link } from "react-router-dom";

const Navbar = React.memo(({ active }) => {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = useMemo(() => [
    { name: "Home", value: "/" },
    { name: "Projects", value: "/projects" },
    { name: "Shots", value: "/shots" },
    {
      name: "Contact me 🤙",
      value: "/contact",
      className: "underline underline-offset-8 decoration-wavy",
    },
  ], []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <section className="navbar-section py-5 sticky top-0 z-40 bg-dark-blue bg-opacity-60 backdrop-blur-[30px]">
      {/* mobile view */}
      <div className="lg:hidden w-11/12 mx-auto py sticky z-40">
        <div className="flex justify-center">
          <div className="nav-brand flex gap-x-4">
            <button
              onClick={toggleMenu}
              className="place-self-center"
              aria-label="Toggle menu"
            >
              <img
                src={isOpen ? arrowUp : arrowDown}
                alt="arrow"
                className="text-white text-xl w-5 mt-2 animate-bounce"
              />
            </button>
            <button
              onClick={toggleMenu}
              className="place-self-center"
            >
              <img src={navLogo} alt="navlogo" className="w-40" />
            </button>

            <button
              onClick={toggleMenu}
              className="place-self-center"
              aria-label="Toggle menu"
            >
              <img
                src={isOpen ? arrowUp : arrowDown}
                alt="arrow"
                className="text-white text-xl w-5 mt-2 animate-bounce"
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "h-screen top-[0px]" : "top-[-800px]"
        } nav-links bg-dark-blue text-light-blue my-auto text-center py-60 absolute left-0 right-0 z-20 ease-in-out duration-700`}
      >
        <div className="flex flex-col gap-y-5">
          {tabs.map((item, itemIdx) => (
            <Link
              key={itemIdx}
              to={item.value}
              className={`${
                active === item.value && "text-orange font-medium"
              } ${
                item.className || ""
              } hover:underline hover:underline-offset-8 hover:decoration-wavy hover:text-orange transition ease-in-out delay-150`}
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* web view */}
      <div className="hidden lg:flex lg:justify-between w-6/12 mx-auto py-2">
        <Link to="/" className="nav-brand">
          <img src={navLogo} alt="Logo" />
        </Link>
        <div className="nav-links flex gap-x-8 my-auto text-light-blue">
          {tabs.map((item, itemIdx) => (
            <Link
              key={itemIdx}
              to={item.value}
              className={`${
                active === item.value && "text-orange font-medium"
              } ${
                item.className || ""
              } hover:underline hover:underline-offset-8 hover:decoration-wavy hover:text-orange transition ease-in-out delay-150`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
