import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Layout from "../Layout/Layout";

import img from "../assets/img/apis.png";
import { Link } from "react-router-dom";

const About = ({ page }) => {
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
      name: "website",
      icon: faGlobe,
      link: "https://www.dragonfly378.my.id",
    },
  ];
  return (
    <>
      {page ? (
        <Layout>
          <section className="about-section mt-8 md:mt-24">
            <div className="w-11/12 md:w-6/12 mx-auto flex flex-col gap-y-3 md:gap-y-8  ">
              <div className="content flex flex-col md:gap-y-3 gap-y-1">
                <div className="img flex mx-auto w-44 md:w-72 mb-4 ">
                  <img src={img} alt="apis" />
                </div>
                <div
                  className="greet-text text-center md:text-2xl text-lg "
                  style={{ fontFamily: "Rodetta" }}
                >
                  Hi, i’m <br /> Muhammad Hafiz HIsbullah 👋
                </div>

                <div className="job text-center text-light-blue opacity-75 text-md">
                  Product Design || Frontend Developer
                </div>

                <div className="social-media flex mx-auto text-light-blue gap-x-4 mt-5 md:gap-x-8 md:mt-8">
                  {sosmed.map((item, itemIdx) => {
                    return (
                      <a key={itemIdx} href={item.link} target="_blank">
                        <FontAwesomeIcon
                          className="md:text-2xl text-xl"
                          icon={item.icon}
                        />{" "}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </Layout>
      ) : (
        <section className="about-section mt-8 md:mt-24">
          <div className="w-11/12 md:w-6/12 mx-auto flex flex-col gap-y-3 md:gap-y-8  ">
            <div className="content flex flex-col md:gap-y-3 gap-y-1">
              <div className="img flex mx-auto w-44 md:w-72 mb-4 ">
                <img src={img} alt="apis" />
              </div>
              <div
                className="greet-text text-center md:text-2xl text-lg "
                style={{ fontFamily: "Rodetta" }}
              >
                Hi, i’m <br /> Muhammad Hafiz HIsbullah 👋
              </div>

              <div className="job text-center text-light-blue opacity-75 text-md">
                Product Design || Frontend Developer
              </div>

              <div className="social-media flex mx-auto text-light-blue gap-x-4 mt-5 md:gap-x-8 md:mt-8">
                {sosmed.map((item, itemIdx) => {
                  return (
                    <a key={itemIdx} href={item.link} target="_blank">
                      <FontAwesomeIcon
                        className="md:text-2xl text-xl"
                        icon={item.icon}
                      />{" "}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default About;
