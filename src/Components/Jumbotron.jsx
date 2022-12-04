import React from "react";
import logo from "../assets/img/dragonfly.svg";

const Jumbotron = () => {
  return (
    <>
      <section className="jumbotron-section mt- md:mt-24">
        <div className="w-11/12 md:w-6/12 mx-auto flex flex-col gap-y-3 md:gap-y-8">
          <div className="logo-capung flex mx-auto w-24 md:w-36">
            <img src={logo} alt="logo" />
          </div>
          <div
            style={{ fontFamily: "Rodetta" }}
            className="greet text-center text-orange text-md md:text-3xl "
          >
            Hi, Assalamu’alaikum
            <span className="text-2xl md:text-4xl"> 🙌 </span>
          </div>
          <div className="desc text-light-blue ">
            <div className="font-bold text-sm md:text-2xl md:mb-2 mb md:tracking-widest md:leading-7 leading-7">
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
            <div className="text-justify text-xs md:text-xl tracking-wide md:tracking-widest md:leading-7 leading-5">
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
