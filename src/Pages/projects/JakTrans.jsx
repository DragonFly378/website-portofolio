import React from "react";
import Layout from "../../Layout/Layout";
import headerImg from "../../assets/img/projects/jaktrans/banner_jaktrans.png";
import discover from "../../assets/img/projects/jaktrans/discover.png";
import issuetree from "../../assets/img/projects/jaktrans/issuetree.png";
import grouping from "../../assets/img/projects/jaktrans/grouping.png";
import mandates from "../../assets/img/projects/jaktrans/mandates.png";
import insights from "../../assets/img/projects/jaktrans/insights.png";
import sketch from "../../assets/img/projects/jaktrans/sketch.png";
import conceptmodel from "../../assets/img/projects/jaktrans/conceptmodel.png";
import jtbd from "../../assets/img/projects/jaktrans/jtbd.png";
import userflow from "../../assets/img/projects/jaktrans/userflow.png";
import userflow_jtbd from "../../assets/img/projects/jaktrans/userflow_jtbd.png";
import ia from "../../assets/img/projects/jaktrans/ia.png";
import wireframe from "../../assets/img/projects/jaktrans/wireframe.png";
import voice from "../../assets/img/projects/jaktrans/voice.png";
import moodboard from "../../assets/img/projects/jaktrans/moodboard.png";
import ui_sample from "../../assets/img/projects/jaktrans/ui_sample.png";
import ui_all from "../../assets/img/projects/jaktrans/ui_all.png";
import design_elements from "../../assets/img/projects/jaktrans/design_elements.png";
import pallete from "../../assets/img/projects/jaktrans/pallete.png";
import style_guide from "../../assets/img/projects/jaktrans/style_guide.png";
import participants from "../../assets/img/projects/jaktrans/participants.png";
import ut_results from "../../assets/img/projects/jaktrans/ut_results.png";
import conclusion from "../../assets/img/projects/jaktrans/conclusion.png";
import { AboutContent } from "../About";

const JakTrans = () => {
  return (
    <>
      <Layout>
        <section className="work-jaktrans my-8 lg:my-16">
          <div className="w-11/12 lg:w-8/12 mx-auto">
            <div className="flex flex-col gap-y-14">
              <div className="header-content flex flex-col gap-y-4 lg:gap-y-8">
                {" "}
                <div className="header-img w-full">
                  <img src={headerImg} alt="jaktrans" />
                </div>
                <div className="title-header">
                  {" "}
                  <div className="judul text-orange text-xl lg:text-4xl text-center font-rodetta">
                    JAKTRANS
                  </div>
                </div>
                <div className="abstract flex flex-col gap-y-4">
                  <h3 className="header-title text-orange text-lg lg:text-2xl  font-rodetta">
                    Abstract
                  </h3>
                  <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                    In this case study, I am required to create a digital
                    platform that will be used by public transportation users in
                    Jakarta. The primary objective is to address the challenge
                    of ensuring seamless access to essential information such as
                    schedules, routes, and the real-time locations of public
                    transportation vehicles. By providing a user-friendly
                    interface and incorporating features like real-time
                    tracking, route planning, and timely updates on schedule
                    changes or disruptions, the platform aims to enhance the
                    overall commuting experience for Jakarta's residents and
                    visitors. Additionally, leveraging mobile compatibility and
                    possibly integrating with existing transportation systems
                    can further streamline accessibility and usability,
                    ultimately contributing to improved efficiency and
                    convenience in navigating Jakarta's public transportation
                    network.
                  </div>
                </div>
              </div>

              <div className="introduction-content flex flex-col gap-y-2 lg:gap-y-4">
                <div className="introduction flex flex-col gap-y-4">
                  <h3 className=" header-title text-orange text-lg lg:text-2xl  font-rodetta">
                    Introduction
                  </h3>
                  <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                    "JakTrans" is the latest application that integrates all
                    your travel needs in Jakarta into one easily accessible
                    platform. You can quickly access information about routes,
                    schedules, and types of public transportation, and plan your
                    journey with a simple application. Experience the comfort
                    and convenience of finding all Jakarta public transportation
                    data with just one touch!
                  </div>
                </div>
                <div className="job-tools-role flex flex-col gap-y-4 lg:gap-y-8">
                  <div className="jobs grid grid-cols-12 lg:gap-x-6 gap-y-4">
                    <div className="client col-span-6 lg:col-span-3">
                      <div className="title text-orange text-lg lg:text-2xl lg:mb-3">
                        Client
                      </div>
                      <div className="caption text-light-blue text-base lg:text-lg">
                        Insan Desain
                      </div>
                    </div>{" "}
                    <div className="client col-span-6 lg:col-span-3">
                      <div className="title text-orange text-lg lg:text-2xl lg:mb-3">
                        Duration
                      </div>
                      <div className="caption text-light-blue text-base lg:text-lg">
                        16 Weeks
                      </div>
                    </div>{" "}
                    <div className="client col-span-12 lg:col-span-6">
                      <div className="title text-orange text-lg lg:text-2xl lg:mb-3">
                        The Team
                      </div>
                      <div className="caption text-light-blue text-base lg:text-lg">
                        Muhammad Hafiz Hisbullah
                      </div>
                    </div>
                  </div>
                  <div className="tools grid grid-cols-12 lg:gap-x-6">
                    <div className="title col-span-12 text-orange text-lg lg:text-xl mb-2">
                      Tools
                    </div>
                    <div className="list col-span-12 flex flex-col lg:flex-row justify-between text-light-blue lg:text-lg">
                      <ul className="list-disc list-inside grid grid-cols-6 lg:flex lg:flex-col ">
                        <li className="col-span-3 text-base lg:text-lg">
                          Figma
                        </li>
                        <li className="col-span-3 text-base lg:text-lg">
                          Figjam
                        </li>
                      </ul>{" "}
                      <ul className="list-disc list-inside grid grid-cols-6 lg:flex lg:flex-col ">
                        <li className="col-span-3 text-base lg:text-lg">
                          Visual Studio Code
                        </li>
                        <li className="col-span-3 text-base lg:text-lg">
                          HTML
                        </li>
                      </ul>{" "}
                      <ul className="list-disc list-inside grid grid-cols-6 lg:flex lg:flex-col ">
                        <li className="col-span-3 text-base lg:text-lg">
                          Tailwind
                        </li>
                        <li className="col-span-3 text-base lg:text-lg">
                          Javascript
                        </li>
                      </ul>{" "}
                      <ul className="list-disc list-inside grid grid-cols-6 lg:flex lg:flex-col ">
                        <li className="col-span-3 text-base lg:text-lg">
                          ReactJs
                        </li>
                        <li className="col-span-3 text-base lg:text-lg">
                          Spreadsheet
                        </li>
                      </ul>{" "}
                    </div>
                  </div>{" "}
                  <div className="role grid grid-cols-12 lg:gap-x-6">
                    <div className="title col-span-12 text-orange text-lg lg:text-xl mb-2">
                      My Role
                    </div>
                    <div className="list col-span-12  flex flex-col lg:flex-row lg:gap-x-5 text-light-blue lg:text-lg">
                      <ul className="list-disc list-inside grid grid-cols-6 lg:flex lg:flex-col ">
                        <li className="col-span-3 text-base lg:text-lg">
                          UX Designer
                        </li>
                        <li className="col-span-3 text-base lg:text-lg">
                          UX Researcher
                        </li>
                      </ul>{" "}
                      <ul className="list-disc list-inside grid grid-cols-6 lg:flex lg:flex-col ">
                        <li className="col-span-3 text-base lg:text-lg">
                          UX Writer
                        </li>
                        <li className="col-span-3 text-base lg:text-lg">
                          UI Designer
                        </li>
                      </ul>{" "}
                      <ul className="list-disc list-inside grid grid-cols-6 lg:flex lg:flex-col ">
                        <li className="col-span-3 text-base lg:text-lg">
                          Frontend Developer
                        </li>
                      </ul>{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className="objective-content flex flex-col gap-y-2 lg:gap-y-4">
                <h3 className="font-rodetta header-title text-orange text-lg lg:text-2xl">
                  Objectives
                </h3>
                <div className="jargon text-white text-center font-bold italic font-nunito lg:text-2xl">
                  "Developing a mobile app-based platform so that public
                  transportation users in Jakarta can comfortably access
                  integrated service information."
                </div>
                <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                  As a Product Designer, my role involves understanding and
                  addressing the needs of public transportation users, enabling
                  them to access all public vehicle information in Jakarta
                  through a single application.
                </div>
              </div>

              <div className="discover-content flex flex-col gap-y-2 lg:gap-y-4">
                <h3 className="font-rodetta header-title text-orange text-lg lg:text-2xl">
                  Discover
                </h3>
                <div className="caption flex flex-col gap-y-4 lg:gap-y-4">
                  <div className="grid grid-cols-12 gap-y-2 lg:gap-x-4">
                    <img
                      className="col-span-12 lg:col-span-6"
                      src={discover}
                      alt="discover"
                    />
                    <article className="col-span-12 lg:col-span-6 text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                      It would be good if in solving a solution, we should know
                      what problems occur in society regarding public
                      transportation.
                      <ul className="list-disc list-inside">
                        <li>User Research</li>
                        <li>In-depth Interview </li>
                        <li>Issue Tree </li>
                        <li>Desk Research</li>
                      </ul>
                    </article>
                  </div>
                  <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                    Transportation can be defined as the effort and activity of
                    carrying or transporting goods and/or passengers from one
                    place to another (Sugianto, 2020). Currently, public
                    transportation services available in Jakarta, such as
                    Transjakarta, Commuterline, MRT, and others, are provided by
                    the government. People can enjoy these facilities to reach
                    their destinations. For example, if we live in Jakarta and
                    want to travel to Bogor Botanical Gardens, we can use public
                    transportation like the Commuterline to Bogor station, then
                    continue by taking an angkot (public minivan) towards Bogor
                    Botanical Gardens.
                    <br />
                    <br />
                    Data from the Central Statistics Agency (BPS) in 2019 showed
                    that the average daily passengers of the Jabodetabek
                    Commuterline were 900 thousand, while for Transjakarta, data
                    obtained from the Transjakarta public information service
                    (PPID) in 2019 stated that the daily passenger data for all
                    corridors was 735 thousand. Since the operation of public
                    transportation in Jakarta, several problems and criticisms
                    have arisen. One of the problems experienced by the public
                    and public transportation users is the difficulty in
                    accessing information and routes between public
                    transportation modes.
                  </div>
                </div>
              </div>

              <div className="issuetree-content flex flex-col gap-y-2 lg:gap-y-4">
                <h3 className="font-rodetta header-title text-orange text-lg lg:text-2xl">
                  Issue Tree
                </h3>

                <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                  To assist in problem-solving in a structured and systematic
                  way, we use the Issue Tree framework. We start with a simple
                  statement: "Public transportation users find it difficult to
                  see schedules between different fleets (Transjakarta,
                  Commuterline, LRT, MRT)."
                </div>

                <div
                  className="image-container lg:h-[400px] overflow-y-scroll border border-light-blue border-opacity-30 rounded-md"
                  style={{ scrollbarColor: "#FBA346 transparent" }}
                >
                  <img src={issuetree} alt="issuetree" />
                </div>
              </div>

              <div className="define-content flex flex-col gap-y-2 lg:gap-y-4">
                <h3 className="font-rodetta header-title text-orange text-lg lg:text-2xl">
                  Defining Users and Research
                </h3>

                <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                  To gather insights into the challenges faced by public
                  transportation users, we sat down with a variety of
                  individuals and had conversations with them. It was a
                  fascinating experience because we got to interact directly
                  with them, listening to their stories and understanding their
                  perspectives firsthand.
                </div>

                <div className="user-research grid grid-cols-12 gap-y-4 gap-x-12">
                  <div className="habbit col-span-12 lg:col-span-6">
                    <div className="title text-orange text-lg lg:text-2xl lg:mb-3">
                      The Habbit
                    </div>
                    <ul className="list-inside list-disc text-light-blue w-9/12 lg:w-full">
                      <li>
                        Often, people using public transportation without
                        checking schedules increase the risk of queues at
                        stops/stations
                      </li>
                      <li>
                        Users switching between public transportation modes find
                        it difficult because route information is scattered
                        across different applications
                      </li>
                      <li>
                        People tend to waste time on the road due to not knowing
                        public transportation schedules.
                      </li>
                    </ul>
                  </div>{" "}
                  <div className="scope col-span-12 lg:col-span-4">
                    <div className="title text-orange text-lg lg:text-2xl lg:mb-3">
                      The Scope
                    </div>
                    <ul className="list-inside list-disc text-light-blue">
                      <li>Women and Men </li>
                      <li>3 Participants </li>
                      <li>Aged 17 - 40 </li>
                      <li>Residing in Jabodetabek </li>
                      <li>Students and Workers </li>
                      <li>Have used public transportation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grouping-mandates-content flex flex-col gap-y-2 lg:gap-y-4">
                <h3 className="font-rodetta header-title text-orange text-lg lg:text-2xl">
                  Let’s <span className="text-white">“Grouping”</span> and
                  Making the <span className="text-white">“Mandates”</span>
                </h3>
                <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                  The grouping I conducted involved analyzing the responses of
                  the interviewees, identifying recurring patterns, and then
                  using those patterns to generate design mandates. These design
                  mandates serve as guidelines for creating solutions or
                  improvements based on the needs and preferences expressed by
                  the participants.
                </div>
                <div className="image-grouping-mandate flex flex-col gap-y-6">
                  <img src={grouping} alt="grouping" />{" "}
                  <img src={mandates} alt="mandates" />
                </div>
                <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                  Grouping and Design Mandates have been completed, so the next
                  step is to separate the patterns that become problems or
                  insights. This is done to identify the actual issues that
                  users experience when using public transportation. The
                  patterns categorized as "problems" will serve as benchmarks
                  for creating solutions in the application later on. For
                  example, one issue I found is users complaining about the
                  fragmentation of many separate public transportation
                  applications. Therefore, I'll turn it into a "How Might We"
                  question. Similarly, patterns categorized as "Insights"
                  include simplicity of features, travel time estimation, and
                  users feeling financially assisted by effective route
                  planning.
                </div>{" "}
                <div className="image-insight-problem">
                  {" "}
                  <img src={insights} alt="insights" />
                </div>
              </div>

              <div className="conceptmodel-content flex flex-col gap-y-2 lg:gap-y-4">
                <h3 className="font-rodetta header-title text-orange text-lg lg:text-2xl">
                  Build the <span className="text-white">"Concept Model"</span>
                </h3>

                <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                  Before creating the concept model, I made scribbles about the
                  application to be developed. The data used came from previous
                  research and had been processed into design mandates
                  containing user issues when using public transportation. They
                  want easy access to information about routes, schedules, and
                  types of public transportation, as well as planning their
                  journey. Comfort and convenience are something they expect.
                </div>

                <div className="image-sketch w-6/12 mx-auto">
                  {" "}
                  <img src={sketch} alt="sketch" />
                </div>

                <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                  The purpose of developing a{" "}
                  <span className="text-orange">Concept Model</span> is to
                  provide a comprehensive understanding of the application's
                  functionality, the features it will offer, and how users will
                  engage with it.
                </div>

                <div className="image-conceptmodel">
                  {" "}
                  <img src={conceptmodel} alt="conceptmodel" />
                </div>
              </div>

              <div className="jtbd-content flex flex-col gap-y-2 lg:gap-y-4">
                <h3 className="font-rodetta header-title text-orange text-lg lg:text-2xl">
                  Jobs To Be Done
                </h3>

                <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                  As a designer, I strive to empathize with what users
                  experience when using public transportation so that I can find
                  optimal solutions. I understand that by using the Jobs To Be
                  Done (JTBD) framework, I can adopt the user's perspective as
                  if I were a public transportation user myself.
                </div>

                <div className="image-jtbd">
                  {" "}
                  <img src={jtbd} alt="jtbd" />
                </div>
              </div>

              <div className="userflow-content flex flex-col gap-y-2 lg:gap-y-4">
                <h3 className="font-rodetta header-title text-orange text-lg lg:text-2xl">
                  User Flow & Information Architecture
                </h3>
                <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                  I delve into crafting the user flow for the application.
                  Understanding the frustrations and needs expressed by users,
                  such as the hassle of dealing with multiple transportation
                  apps, I aim to streamline their journey with a seamless and
                  intuitive user experience.
                  <br />
                  <br />
                  Starting from the point where users open the application, the
                  user flow will guide them through accessing essential
                  information like route options, schedules, and types of
                  transportation available. Simplifying the process of planning
                  their journey will be a priority, ensuring that users can
                  effortlessly find the most efficient routes and estimated
                  travel times.
                </div>
                <div className="grid grid-cols-12 lg:gap-x-5 gap-y-4 mb-2">
                  <div className="image-userflow col-span-12 mb-2">
                    {" "}
                    <img src={userflow} alt="userflow" />
                  </div>
                  <div className="image-userflow_jtbd order-2 lg:order-1 col-span-12 w-8/12 mx-auto lg:w-full lg:col-span-6">
                    {" "}
                    <img src={userflow_jtbd} alt="userflow_jtbd" />
                  </div>
                  <div className="desc lg:order-2 col-span-12 lg:col-span-6 text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                    Using the insights gained from empathizing with public
                    transportation users and employing the{" "}
                    <span className="text-orange">Jobs To Be Done (JTBD)</span>{" "}
                    framework, instead of just looking at what features users
                    want, JTBD looks at the problems they're trying to solve or
                    the goals they're trying to achieve.
                  </div>
                </div>
                <div className="information-architecture">
                  <div className="title text-orange text-lg lg:text-2xl lg:mb-3">
                    Information Architecture (IA)
                  </div>{" "}
                  <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                    The next step is to design its information architecture.
                    Information Architecture (IA) refers to the structure and
                    organization of information within the application, ensuring
                    that users can easily find what they need and navigate
                    through the app intuitively.
                  </div>
                  <div className="image-ia my-3">
                    {" "}
                    <img src={ia} alt="ia" />
                  </div>
                </div>{" "}
              </div>

              <div className="wireframe-content flex flex-col gap-y-2 lg:gap-y-4">
                <h3 className="font-rodetta header-title text-orange text-lg lg:text-2xl">
                  Wireframe
                </h3>

                <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                  Continuing from the previous discussion on information
                  architecture, the next step in the process is to create
                  wireframes for the application. Wireframes are skeletal
                  outlines that represent the basic structure and layout of each
                  screen or page within the app. Moreover, addressing users'
                  frustrations with the fragmentation of multiple transportation
                  apps, the wireframes will demonstrate how different features
                  and functionalities are integrated seamlessly within the
                  application. This may include showing how users can access
                  ticket purchasing, real-time updates, and trip planning tools
                  from a unified interface.
                </div>

                <div className="image-wireframe">
                  {" "}
                  <img src={wireframe} alt="wireframe" />
                </div>

                <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                  By creating wireframes that align closely with the prioritized
                  features, information architecture, and user needs identified
                  earlier in the process, designers can effectively communicate
                  the layout and functionality of the application before
                  proceeding to the visual design phase.
                </div>
              </div>

              <div className="voice-content flex flex-col gap-y-2 lg:gap-y-4">
                <h3 className="font-rodetta header-title text-orange text-lg lg:text-2xl">
                  Tone of Voice
                </h3>

                <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                  Given the user-centric approach and insights gained from
                  empathizing with public transportation users, the tone of
                  voice in UX writing will be{" "}
                  <span className="text-orange font-medium">
                    Clear, Formal, Respectful, and Enthusiastic.
                  </span>{" "}
                  It will aim to create a sense of trust and reliability while
                  also being approachable and easy to understand.
                </div>

                <div className="image-voice">
                  {" "}
                  <img src={voice} alt="voice" />
                </div>
              </div>

              <div className="moodboard-content flex flex-col gap-y-2 lg:gap-y-4">
                <h3 className="font-rodetta header-title text-orange text-lg lg:text-2xl">
                  Moodboard for inspiration{" "}
                </h3>

                <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                  A mood board is a visual representation of the overall
                  aesthetic, style, and mood that the application aims to
                  convey. It serves as a reference point for designers, helping
                  them to establish a cohesive visual identity and design
                  language for the app. By creating a mood board that reflects
                  the desired aesthetic and mood for the application, designers
                  can ensure that the visual design elements contribute to a
                  positive and engaging user experience, ultimately enhancing
                  the usability and effectiveness of the public transportation
                  schedule app.
                </div>

                <div className="image-moodboard">
                  {" "}
                  <img src={moodboard} alt="moodboard" />
                </div>
              </div>

              <div className="userinterface-content flex flex-col gap-y-2 lg:gap-y-4">
                <h3 className="font-rodetta header-title text-orange text-lg lg:text-2xl">
                  The UI Solution
                </h3>
                <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                  Continuing from the previous stages of the design process,
                  it's crucial to prioritize a clean design for the public
                  transportation schedule application. A clean design is
                  essential because it simplifies the user interface, making it
                  easier for users to access transportation information without
                  feeling overwhelmed or confused by cluttered visuals.
                </div>
                <div className="image-uisample w-8/12 mx-auto">
                  {" "}
                  <img src={ui_sample} alt="ui_sample" />
                </div>
                <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                  By keeping the design clean and uncluttered, users can quickly
                  find the information they need, such as route options,
                  schedules, and types of transportation. Clear navigation and
                  intuitive layout ensure that users can easily navigate between
                  different features and functionalities without getting lost or
                  frustrated.
                </div>

                <div className="properties flex flex-col gap-y-4 lg:gap-y-8">
                  <div className="design-elements">
                    <div className="title text-orange text-lg lg:text-2xl lg:mb-3">
                      Design Elements
                    </div>{" "}
                    <div className="grid grid-cols-12 lg:gap-x-5 gap-y-4 mb-2">
                      <div className="image-design_elements order-2 lg:order-1 col-span-12 w-8/12 lg:w-full mx-auto lg:col-span-5">
                        {" "}
                        <img src={design_elements} alt="design_elements" />
                      </div>
                      <div className="desc lg:order-2 col-span-12 lg:col-span-7 text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                        Creating simple and clean design components ensures user
                        comfort and understanding. Clear elements like buttons
                        and icons make functionality obvious, while consistency
                        across the interface aids navigation. Minimalist design
                        reduces visual clutter, allowing users to focus on
                        essential tasks. This approach enhances usability,
                        making it easier for users to achieve their goals and
                        fostering satisfaction with the application.
                      </div>
                    </div>
                  </div>{" "}
                  <div className="style-guide">
                    <div className="title text-orange text-lg lg:text-2xl lg:mb-3">
                      Style Guide
                    </div>{" "}
                    <div className="grid grid-cols-12 lg:gap-x-5 gap-y-4 mb-2">
                      <div className="col-span-12 grid grid-cols-12 lg:gap-x-5 gap-y-4 mb-2">
                        <div className="image-style_guide order-2 lg:order-1 col-span-12 w-8/12 lg:w-full mx-auto lg:col-span-5">
                          {" "}
                          <img src={style_guide} alt="style_guide" />
                        </div>
                        <div className="desc lg:order-2 col-span-12 lg:col-span-7 text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                          A style guide serves as a reference document that
                          outlines the visual and branding guidelines to
                          maintain consistency across the application. This
                          includes defining margins, padding, grid systems, and
                          component sizing to ensure a harmonious visual
                          hierarchy and user interface.
                        </div>
                        <div className="desc col-span-12 order-last text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify mt-3">
                          The style guide will encompass various aspects of the
                          application's design, including typography, color
                          palette, iconography, spacing, and layout. Each
                          element will be carefully selected to reflect the
                          desired aesthetic and mood established earlier in the
                          process, aligning with the needs and preferences of
                          public transportation users.
                        </div>
                      </div>
                      <div className="col-span-12 grid grid-cols-12 lg:gap-x-5 gap-y-4 mb-2">
                        <div className="image-pallete col-span-12">
                          {" "}
                          <img src={pallete} alt="pallete" />
                        </div>
                        <div className="desc col-span-12 text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify mt-3">
                          The color palette will incorporate colors that evoke
                          reliability, efficiency, and user-friendliness, as
                          identified in the mood board. Iconography will be
                          intuitive and universally understood, aiding
                          navigation and communication of key concepts.
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                </div>

                <div className="image-ui_all mx-auto">
                  {" "}
                  <img src={ui_all} alt="ui_all" />
                </div>
              </div>

              <div className="usability-content flex flex-col gap-y-2 lg:gap-y-4">
                <h3 className="font-rodetta header-title text-orange text-lg lg:text-2xl">
                  Usability testing for validate design
                </h3>

                <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                  To validate the designs that have been created, I conducted
                  usability testing with several individuals. The candidates I
                  selected were different from those involved in the initial
                  user research. This approach aims to avoid bias, as their
                  expectations of the application may differ. By involving a
                  diverse group of participants in the usability testing phase,
                  I can gather more comprehensive feedback and insights into how
                  the design performs in real-world scenarios. This allows me to
                  identify any usability issues, areas for improvement, or
                  unexpected user behaviors that may not have been apparent
                  during the design process. Ultimately, usability testing helps
                  ensure that the final design meets the needs and expectations
                  of a broader range of users and delivers a more effective and
                  user-friendly experience.
                </div>

                <div className="properties flex flex-col gap-y-4 lg:gap-y-8">
                  <div className="participant-profiles">
                    <div className="title text-orange text-lg lg:text-2xl lg:mb-3">
                      Participant Profiles
                    </div>{" "}
                    <div className="grid grid-cols-12 lg:gap-x-5 gap-y-4 mb-2">
                      <div className="desc  col-span-12  text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                        I obtained three sample participants for the usability
                        testing, all aged approximately 21 to 25 years old. I
                        believe this age range will provide a sample of public
                        transportation users from the millennial demographic.
                      </div>{" "}
                      <div className="image-participants col-span-12 w-full mx-auto lg:col-span-7">
                        {" "}
                        <img src={participants} alt="participants" />
                      </div>
                    </div>
                  </div>{" "}
                  <div className="results">
                    <div className="title text-orange text-lg lg:text-2xl lg:mb-3">
                      Results{" "}
                    </div>{" "}
                    <div className="grid grid-cols-12 lg:gap-x-5 gap-y-4 mb-2">
                      <div className="desc  col-span-12  text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                        The results of the testing I processed are based on the
                        analysis during the session, such as observing users'
                        task performance, identifying any difficulties they
                        encountered, noting the time taken to complete tasks,
                        and recording points of explanation from users (both
                        shortcomings and strengths). I then categorized these
                        findings into several groups, with each category
                        containing a task flow and serving as data points for
                        analysis.
                      </div>{" "}
                      <div className="image-ut_results col-span-12 w-full mx-auto lg:col-span-10">
                        {" "}
                        <img src={ut_results} alt="ut_results" />
                      </div>
                    </div>
                  </div>
                  <div className="conclusion">
                    <div className="grid grid-cols-12 lg:gap-x-5 gap-y-4 mb-2">
                      <div className="image-conclusion col-span-12 w-full mx-auto lg:col-span-6">
                        {" "}
                        <img src={conclusion} alt="conclusion" />
                      </div>
                      <div className="the-conclusion col-span-12 w-full mx-auto lg:col-span-6 flex flex-col gap-y-3">
                        <article className="thegood">
                          <div className="title text-orange text-lg lg:text-2xl">
                            The Good
                          </div>{" "}
                          <q className="desc italic text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                            Overall, the app is pretty good. Like earlier, I
                            could choose the public transportation I wanted to
                            take, and I also found the nearest station from my
                            location. The most important thing is that I could
                            see where the train was located at that moment.
                          </q>{" "}
                        </article>
                        <article className="thebad">
                          <div className="title text-orange text-lg lg:text-2xl">
                            The Bad
                          </div>{" "}
                          <q className="desc italic text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                            In my opinion, the estimated arrival time of the
                            train is crucial. We should be able to see
                            approximately what time the train will arrive at our
                            station. Also, the search bar component on the home
                            screen is ambiguous because it says, 'Where to
                            today?' This means that if I want to go to Bogor
                            station, I should just type 'Bogor,' right? My
                            expectation is that I would then see what types of
                            transportation are available to Bogor station.
                          </q>{" "}
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="takeaway-content flex flex-col gap-y-2 lg:gap-y-4">
                <h3 className="font-rodetta header-title text-orange text-lg lg:text-2xl">
                  Development and Future Work
                </h3>

                <div className="desc text-light-blue text-sm lg:text-base leading-6 lg:leading-8 text-justify">
                  In conclusion, the UI/UX case for the public transportation
                  application in Jakarta has been a journey of understanding and
                  addressing the diverse needs of users navigating the city's
                  transportation system. Through empathetic user research,
                  thoughtful design decisions, and rigorous testing, we aimed to
                  create an application that simplifies the commute experience
                  for Jakarta's residents and visitors alike.
                  <br /> <br />
                  By prioritizing simplicity, clarity, and efficiency in design,
                  we endeavored to provide users with easy access to essential
                  information such as route options, schedules, and real-time
                  updates. Our goal was to empower users to plan their journeys
                  with confidence and ease, whether they're heading to work,
                  school, or exploring the city.
                  <br /> <br />
                  Throughout the process, we remained committed to fostering a
                  seamless and enjoyable user experience, guided by the
                  principles of user-centric design and continuous improvement.
                  While the journey may have its challenges, we believe that by
                  listening to user feedback, iterating on our designs, and
                  staying true to our mission, we can create a public
                  transportation application that truly serves the needs of
                  Jakarta's diverse community.
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

export default JakTrans;
