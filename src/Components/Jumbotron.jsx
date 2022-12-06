import React from "react";
import logo from "../assets/img/dragonfly.svg";

const Jumbotron = () => {
  return (
    <>
      <section className="jumbotron-section mt- lg:mt-24">
        <div className="w-11/12 lg:w-6/12 mx-auto flex flex-col gap-y-3 lg:gap-y-8">
          <div className="logo-capung flex mx-auto w-24 lg:w-36">
            <img src={logo} alt="logo" />
          </div>
          <div
            style={{ fontFamily: "Rodetta" }}
            className="greet text-center text-orange text-md lg:text-3xl "
          >
            Hi, Assalamu’alaikum
            <span className="text-2xl lg:text-4xl"> 🙌 </span>
          </div>
          <div className="desc text-light-blue ">
            <div className="font-bold text-sm lg:text-2xl lg:mb-2 mb lg:tracking-widest lg:leading-7 leading-7">
              {" "}
              I’m Hafiz -{" "}
              <span className="underline text-cyan-500">
                Product Designer{" "}
              </span>{" "}
              &{" "}
              <span className="underline text-pink-400">
                {" "}
                Frontend Developer{" "}
              </span>{" "}
              💻{" "}
            </div>
            <div className="text-justify text-xs lg:text-2xl tracking-wide lg:tracking-widest lg:leading-10 leading-5">
              Computer Science student, interested in technology, visual design.
              Experienced in designing and building website with mobile
              capabilities, accompanied by a design process in the form of user
              centered design, has worked on team projects as a frontend
              developer as well as a UI/UX designer.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jumbotron;
