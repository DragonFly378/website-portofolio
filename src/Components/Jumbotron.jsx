import React from "react";
import logo from "../assets/img/dragonfly.svg";
import rolesimg from "../assets/img/roles.png";
import jumbotronBg from "../assets/img/jumbotron_bg.png";

const Jumbotron = () => {
  return (
    <>
      <section className={`jumbotron-section`}>
        <div
          className="header-summary mt-12 pt-10 pb-16 lg:mt-0 lg:pt-24 lg:pb-36 bg-no-repeat bg-cover"
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
              <div className="font-bold text-orange text-sm text-center lg:text-2xl lg:tracking-widest lg:leading-7 leading-7">
                Muhammad Hafiz Hisbullah
              </div>
              <div className="text-center text-light-blue font-thin text-sm lg:text-xl tracking-wide lg:tracking-widest lg:leading-10 leading-5">
                is a recent computer science graduate based in Jakarta with a
                passion for both
              </div>
            </div>
            <div className="roles justify-center flex ">
              <img
                src={rolesimg}
                alt="myroles"
                className="w-[320px] lg:w-[450px]"
              />
            </div>
          </div>
        </div>
        <div className="w-11/12 lg:w-6/12 mx-auto py-18 lg:py-24">
          <div className="header-desc text-center text-light-blue text-[12px] leading-5 tracking-wide lg:text-xl">
            Throughout my journey, I have immersed myself in various projects
            where I've contributed as a Frontend Developer, primarily utilizing
            React JS, Tailwind CSS, and currently delving deeper into Next Js.
            Beyond my development expertise, I also have experience as a Product
            Designer. My fascination with design extends to exploring new ideas
            and implementing them with a user-centric approach, ensuring optimal
            usability and comfort for the end-users.
          </div>
        </div>
      </section>
    </>
  );
};

export default Jumbotron;
