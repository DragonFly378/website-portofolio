import React from "react";
import Layout from "../../Layout/Layout";
import headerImg from "../../assets/img/projects/rwpintar/header.png";
import interviewResultImg from "../../assets/img/projects/rwpintar/interview_result.png";
import interviewUser from "../../assets/img/projects/rwpintar/interview_user.png";
import persona1 from "../../assets/img/projects/rwpintar/persona_1.png";
import persona2 from "../../assets/img/projects/rwpintar/persona_2.png";
import userFlow from "../../assets/img/projects/rwpintar/flow.png";
import diagram from "../../assets/img/projects/rwpintar/diagram.png";
import prototype from "../../assets/img/projects/rwpintar/protoyype.png";
import testing from "../../assets/img/projects/rwpintar/testing.png";
import mockup from "../../assets/img/projects/rwpintar/mockup.png";
import { AboutContent } from "../About";

const RwPintar = () => {
  return (
    <>
      <Layout>
        <section className="work-rwpintar my-8 lg:my-16">
          <div className="w-11/12 lg:w-8/12 mx-auto">
            <div className="flex flex-col gap-y-14">
              <div className="intro-content flex flex-col gap-y-4 lg:gap-y-8">
                {" "}
                <div className="header-img w-full">
                  <img src={headerImg} alt="rwpintar" />
                </div>
                <div className="title-header">
                  {" "}
                  <div className="font-rodetta judul text-orange text-xl lg:text-4xl text-center">
                    RW PINTAR
                  </div>
                  <div className="roles text-center text-orange mt-2">
                    Me as: <br />
                    Product Designer & Frontend Developer
                  </div>
                </div>
                <h3 className="font-rodetta header-title text-orange text-lg lg:text-2xl">
                  Introduction
                </h3>
                <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8">
                  RWPINTAR is a database website for storing data and letters
                  belonging to residents of Batu Ceper, Central Jakarta, not
                  only that, this website also has several features including RW
                  complaint services, discussion forums, and also blogs for
                  traders there. This is a Human Computer Interaction course
                  assignment that my team of 3 people (including myself) made in
                  third smester (2020). This project helped me to deepen my UX
                  and Visual Design skills.
                </div>
              </div>
              <div className="background-content flex flex-col gap-y-2 lg:gap-y-4">
                {" "}
                <h3 className="font-rodetta header-title text-orange text-lg lg:text-2xl">
                  Background
                </h3>
                <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                  Humans are social creatures, because almost every day humans
                  interact with other humans. These interactions lead to a
                  tendency to make communication media directly or through
                  communication tools. Seeing this, humans are increasingly
                  skilled at creating a communication tool such as a gadget with
                  the aim of facilitating communication between humans. Gadgets
                  are communication tools that have many functions and different
                  features. Gadgets themselves have become a necessity in
                  communication in the 21st century. In addition to being a
                  communication tool between humans, gadgets are also often used
                  in information storage media such as photos, videos, files and
                  others.
                  <br />
                  <br />I along with a team of 3 people (including myself)
                  searched for what problems were around our neighborhood,
                  starting from interviewing local residents, filtering data,
                  and analyzing what solutions could be used to solve this
                  problem, and finally an idea was created, namely RWPINTAR. My
                  team consists of 3 people, 1 person as team leader, 1 more as
                  engineer and I play the role of designing product, UX and UI
                  strategies in the team. Some of what I did when I was at
                  NOMADS are as follows:
                </div>
              </div>
              <div className="interview-content flex flex-col gap-y-2 lg:gap-y-4">
                {" "}
                <h3 className="font-rodetta header-title text-orange text-lg lg:text-2xl">
                  User Interview
                </h3>
                <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8">
                  Before we executed the idea, we conducted interviews with
                  several residents of Batu Ceper. This interview was conducted
                  so that we can ensure that what we feel is supported by the
                  existing facts, this is explained by the residents of Batu
                  Ceper themselves.
                </div>
                <div className="interview-img flex flex-col gap-y-4">
                  <img
                    src={interviewResultImg}
                    alt="interviewResultImg"
                    className="w-full"
                  />
                  <img
                    src={interviewUser}
                    alt="interviewUser"
                    className="w-10/12 mx-auto"
                  />
                </div>
              </div>
              <div className="persona-content flex flex-col gap-y-2 lg:gap-y-4">
                {" "}
                <h3 className="font-rodetta header-title text-orange text-lg lg:text-2xl">
                  Persona
                </h3>
                <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8">
                  Based on the interviews we did, we chose 2 people who
                  represented the residents of Batu Ceper, namely youth and
                  active residents. We were lucky to get samples from our
                  closest friends and neighborhood.
                </div>
                <div className="interview-img flex flex-col gap-y-1">
                  <img src={persona1} alt="persona1" className="w-full" />{" "}
                  <img src={persona2} alt="persona2" className="w-full" />
                </div>
              </div>
              <div className="flow-content flex flex-col gap-y-2 lg:gap-y-4">
                {" "}
                <h3 className="font-rodetta header-title text-orange text-lg lg:text-2xl">
                  User Flow
                </h3>
                <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8">
                  Next we create a user flow to make it easier for us when we
                  will create a visual design, user flow is very helpful in
                  terms of designing in the early stages of development, the
                  flow from beginning to end is described there, it can contain
                  user and admin activities.
                </div>
                <div className="interview-img flex flex-col gap-y-1">
                  <img src={userFlow} alt="userFlow" className="w-full" />{" "}
                  <img src={diagram} alt="diagram" className="w-full" />
                </div>
              </div>
              <div className="mockup-content flex flex-col gap-y-2 lg:gap-y-4">
                {" "}
                <h3 className="font-rodetta header-title text-orange text-lg lg:text-2xl">
                  Mockup
                </h3>
                <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8">
                  From user flow that we have, mockup should follow the
                  requirements from users needed because the goals of this
                  project is we build something what Batu Ceper's citizen need.
                  With the existing concept, as well as some references that I
                  took from various sources, we are finally at the design
                  visualization stage, this design is responsive on various
                  devices, so it can be opened anywhere and anytime.
                </div>
                <div className="interview-img flex flex-col gap-y-1">
                  <img src={mockup} alt="mockup" className="w-full" />{" "}
                </div>
              </div>
              <div className="prototype-content flex flex-col gap-y-2 lg:gap-y-4">
                {" "}
                <h3 className="font-rodetta header-title text-orange text-lg lg:text-2xl">
                  Prototype & Testing
                </h3>
                <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8">
                  Making prototype schemes that have been made so that users can
                  understand and interact directly with the website, we aim at
                  this at the same time to get feedback from users. The
                  prototype also helps us to present the mockup to the engineer.
                  After getting enough feedback, we can find out where the
                  location needs to be improved and reprocessed, then we go back
                  to testing the user, and so on until we get the best results.
                </div>
                <div className="interview-img flex flex-col gap-y-1">
                  <img src={prototype} alt="prototype" className="w-full" />{" "}
                  <img
                    src={testing}
                    alt="testing"
                    className="w-10/12 mx-auto"
                  />
                </div>
              </div>
              <div className="prototype-content flex flex-col gap-y-2 lg:gap-y-4">
                {" "}
                <h3 className="font-rodetta header-title text-orange text-lg lg:text-2xl">
                  Result and Takeaways
                </h3>
                <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8">
                  During the UX process, I collaborated with many parties,
                  including the engineer team, Ridho, and also the team leader
                  who I could ask if I needed anything from this project, I am
                  happy to be collaborating with local residents and I hope this
                  project can help with problems which exists. Thank You!
                  Xixixi..
                </div>
              </div>
              <AboutContent />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default RwPintar;
