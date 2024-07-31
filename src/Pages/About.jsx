import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileLines } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Layout from "../Layout/Layout";

import img from "../assets/img/apis.png";
import Jumbotron from "../Components/Jumbotron";
import { sosmed } from "../datas";
import Connect from "../Components/Connect";

export const About = ({ page }) => {
  return (
    <>
      {page ? (
        <Layout>
          <div className="flex flex-col my-8 lg:my-10">
            <Jumbotron />
            <AboutContent />
          </div>
        </Layout>
      ) : (
        <div className="flex flex-col my-8 lg:my-10">
          <AboutContent />
        </div>
      )}
    </>
  );
};

export const AboutContent = () => {
  return (
    <>
      <section className="about-section my-8 lg:my-10">
        <div className="w-11/12 lg:w-6/12 mx-auto flex flex-col gap-y-3 lg:gap-y-8  ">
          <div className="content flex flex-col lg:gap-y-3 gap-y-1">
            <div className="img flex mx-auto w-44 lg:w-80 mb-4 ">
              <img src={img} alt="apis" />
            </div>
            <div className="greet-text text-center lg:text-3xl text-lg font-rodetta">
              Hi, i’m <br /> Muhammad Hafiz HIsbullah 👋
            </div>

            <div className="job text-center text-light-blue opacity-75 text-md lg:text-lg">
              Product Design || Frontend Developer
            </div>

            <Connect />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
