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

const About = ({ page }) => {
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
          <Jumbotron />
          <AboutContent />
        </div>
      )}
    </>
  );
};

export const AboutContent = () => {
  const sosmed = [
    {
      name: "instagram",
      icon: faInstagram,
      link: "https://www.instagram.com/hafizhb28/",
    },
    {
      name: "github",
      icon: faGithub,
      link: "https://github.com/DragonFly378",
    },
    {
      name: "linkedin",
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/muhammadhafizhisbullah/",
    },
    {
      name: "cv",
      icon: faFileLines,
      link: "https://drive.google.com/file/d/1Kg5RPTY8F7RAGiTIsKKtvMoCQFRUboLG/view?usp=sharing",
    },
    {
      name: "email",
      icon: faEnvelope,
      link: "mailto:hafizhizbullah28@gmail.com",
    },
  ];
  return (
    <>
      <section className="about-section my-8 lg:my-10">
        <div className="w-11/12 lg:w-6/12 mx-auto flex flex-col gap-y-3 lg:gap-y-8  ">
          <div className="content flex flex-col lg:gap-y-3 gap-y-1">
            <div className="img flex mx-auto w-44 lg:w-80 mb-4 ">
              <img src={img} alt="apis" />
            </div>
            <div
              className="greet-text text-center lg:text-3xl text-lg font-rodetta"
            >
              Hi, i’m <br /> Muhammad Hafiz HIsbullah 👋
            </div>

            <div className="job text-center text-light-blue opacity-75 text-md lg:text-lg">
              Product Design || Frontend Developer
            </div>

            <div className="text-orange text-center mx-auto mt-5 lg:mt-5 text-sm lg:text-base">
              Let's Connect!
              <div className="social-media flex  text-light-blue gap-x-4 lg:gap-x-8 mt-3 lg:mt-4">
                {sosmed.map((item, itemIdx) => {
                  return (
                    <a
                      key={itemIdx}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        className="lg:text-2xl text-xl"
                        icon={item.icon}
                      />{" "}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
