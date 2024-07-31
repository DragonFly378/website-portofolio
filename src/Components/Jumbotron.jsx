import React from "react";
import logo from "../assets/img/dragonfly.svg";
import rolesimg from "../assets/img/roles.png";
import jumbotronBg from "../assets/img/jumbotron_bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sosmed } from "../datas";
import Connect from "./Connect";

const Jumbotron = () => {
  return (
    <>
      <section className={`jumbotron-section`}>
        <div
          className="header-summary mt-12 pt-10 pb-16 lg:mt-0 lg:pt-24 lg:pb-36 2xl:py-48 bg-no-repeat bg-cover md:bg-contain"
          style={{ backgroundImage: `url(${jumbotronBg})` }}
        >
          <div className="w-11/12 lg:w-6/12 mx-auto flex flex-col gap-y-2 lg:gap-y-4">
            <div className="logo-capung flex mx-auto w-24 lg:w-36">
              <img src={logo} alt="logo" />
            </div>
            <div className="header-text flex flex-col gap-y-0 lg:gap-y-1">
              <div className="greet text-center text-light-blue text-sm lg:text-xl">
                Hi, Assalamu’alaikum
                <span className="text-base lg:text-2xl"> 🙌 </span>
              </div>
              <div className="font-bold text-light-blue text-sm text-center lg:text-2xl lg:tracking-widest lg:leading-7 leading-7">
                Muhammad Hafiz Hisbullah
              </div>
              <div className="greet text-center text-orange text-sm lg:text-xl">
                is a
              </div>
            </div>

            <div className="roles justify-center flex ">
              <img
                src={rolesimg}
                alt="myroles"
                className="w-[320px] lg:w-[500px]"
              />
            </div>

            <Connect />
          </div>
        </div>
        <div className="w-11/12 lg:w-6/12 mx-auto py-18">
          <div className="header-desc text-center text-light-blue text-[12px] leading-5 tracking-wide lg:text-xl">
            A person with deep-seated passion for Frontend Development and UI/UX
            Design. My journey in the tech world has equipped me with a solid
            foundation in design principles, frontend technologies, and a keen
            eye for crafting user-centric solutions.
          </div>
        </div>
      </section>
    </>
  );
};

export default Jumbotron;
