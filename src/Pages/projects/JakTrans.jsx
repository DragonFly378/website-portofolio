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

const JakTrans = React.memo(() => {
  return (
    <>
      <Layout>
        <section className="work-jaktrans my-8 lg:my-16">
          <div className="w-11/12 lg:w-8/12 mx-auto">
            <div className="flex flex-col gap-y-16 lg:gap-y-24">
              <div className="header-content flex flex-col gap-y-6 lg:gap-y-10">
                <div className="header-img w-full rounded-2xl overflow-hidden shadow-2xl shadow-orange/20">
                  <img
                    src={headerImg}
                    alt="JakTrans - Public Transportation App"
                    className="w-full"
                    loading="eager"
                    width="1200"
                    height="600"
                  />
                </div>
                <div className="title-header">
                  <h1 className="judul text-orange text-3xl lg:text-5xl text-center font-rodetta tracking-wide">
                    JAKTRANS
                  </h1>
                  <p className="text-light-blue text-center text-sm lg:text-lg mt-3 opacity-80">
                    Simplifying Jakarta's Public Transportation Experience
                  </p>
                </div>
                <div className="abstract flex flex-col gap-y-5 bg-dark-blue/50 border border-orange/20 rounded-2xl p-6 lg:p-10">
                  <h2 className="header-title text-orange text-xl lg:text-3xl font-rodetta">
                    The Challenge
                  </h2>
                  <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                    <p className="mb-4">
                      Imagine this: You're standing at a bus stop in Jakarta, phone in hand, trying to figure out
                      which bus to take, when it'll arrive, and how to connect to the next line. Sound familiar?
                    </p>
                    <p>
                      This case study explores how I designed a unified digital platform for Jakarta's public
                      transportation users—bringing together schedules, routes, and real-time vehicle locations
                      into one seamless experience. The goal? To transform the daily commute from a stressful
                      puzzle into a smooth, confident journey for millions of Jakarta residents and visitors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="introduction-content flex flex-col gap-y-6 lg:gap-y-8">
                <div className="introduction flex flex-col gap-y-5">
                  <h2 className="header-title text-orange text-2xl lg:text-4xl font-rodetta">
                    Meet JakTrans
                  </h2>
                  <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                    <p className="mb-4 text-lg lg:text-xl italic text-orange/90 border-l-4 border-orange pl-5 py-2">
                      "All your travel needs in Jakarta, unified in one place"
                    </p>
                    <p>
                      JakTrans brings everything you need for navigating Jakarta's public transportation into
                      a single, intuitive app. No more juggling multiple apps or wondering which route to take.
                      Routes, schedules, vehicle types, real-time tracking—it's all here, ready when you are.
                    </p>
                  </div>
                </div>
                <div className="job-tools-role flex flex-col gap-y-6 lg:gap-y-10">
                  <div className="jobs grid grid-cols-12 lg:gap-x-8 gap-y-6 bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">

                    <div className="Duration col-span-6 lg:col-span-3">
                      <div className="title text-orange text-base lg:text-xl font-semibold mb-2 lg:mb-3">
                        ⏱️ Duration
                      </div>
                      <div className="caption text-light-blue text-base lg:text-lg">
                        16 Weeks
                      </div>
                    </div>
                    <div className="client col-span-12 lg:col-span-6">
                      <div className="title text-orange text-base lg:text-xl font-semibold mb-2 lg:mb-3">
                        👥 The Team
                      </div>
                      <div className="caption text-light-blue text-base lg:text-lg">
                        Muhammad Hafiz Hisbullah (Solo Project)
                      </div>
                    </div>
                  </div>
                  <div className="tools grid grid-cols-12 lg:gap-x-6 bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                    <div className="title col-span-12 text-orange text-base lg:text-xl font-semibold mb-4">
                      🛠️ Tools & Technologies
                    </div>
                    <div className="list col-span-12 flex flex-wrap gap-3 text-light-blue">
                      {["Figma", "Figjam", "Visual Studio Code", "HTML", "Tailwind CSS", "JavaScript", "ReactJs", "Spreadsheet"].map((tool, idx) => (
                        <span key={idx} className="px-4 py-2 bg-orange/10 border border-orange/30 rounded-full text-sm lg:text-base hover:bg-orange/20 transition-colors">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="role grid grid-cols-12 lg:gap-x-6 bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                    <div className="title col-span-12 text-orange text-base lg:text-xl font-semibold mb-4">
                      🎯 My Roles
                    </div>
                    <div className="list col-span-12 flex flex-wrap gap-3 text-light-blue">
                      {["UX Designer", "UX Researcher", "UX Writer", "UI Designer", "Frontend Developer"].map((role, idx) => (
                        <span key={idx} className="px-4 py-2 bg-orange/10 border border-orange/30 rounded-full text-sm lg:text-base hover:bg-orange/20 transition-colors">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="objective-content flex flex-col gap-y-6 lg:gap-y-8">
                <h2 className="font-rodetta header-title text-orange text-2xl lg:text-4xl">
                  The Objective
                </h2>
                <div className="jargon bg-gradient-to-r from-orange/10 to-orange/5 border-l-4 border-orange rounded-r-xl p-6 lg:p-8">
                  <p className="text-white text-lg lg:text-2xl font-medium italic leading-relaxed">
                    "Create a mobile platform that makes accessing Jakarta's public transportation
                    information feel effortless and integrated."
                  </p>
                </div>
                <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                  <p>
                    As a Product Designer, I dove deep into understanding what commuters truly need.
                    The mission was clear: unite all of Jakarta's scattered public transit information—Transjakarta,
                    Commuterline, MRT, LRT—into one cohesive, user-friendly experience. Because navigating the
                    city shouldn't feel like solving a puzzle.
                  </p>
                </div>
              </div>

              <div className="discover-content flex flex-col gap-y-6 lg:gap-y-8">
                <h2 className="font-rodetta header-title text-orange text-2xl lg:text-4xl">
                  🔍 Discovery Phase
                </h2>
                <div className="caption flex flex-col gap-y-6 lg:gap-y-8">
                  <div className="grid grid-cols-12 gap-y-6 lg:gap-x-8">
                    <div className="col-span-12 lg:col-span-6 rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                      <img
                        className="w-full"
                        src={discover}
                        alt="Discovery phase research methods"
                        loading="lazy"
                        width="600"
                        height="400"
                      />
                    </div>
                    <article className="col-span-12 lg:col-span-6 text-light-blue text-base lg:text-lg leading-7 lg:leading-9 flex flex-col gap-y-4">
                      <p>
                        Before designing any solution, I needed to understand the real problems commuters face.
                        What frustrates them? What do they need? Here's how I uncovered the truth:
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <span className="text-orange text-xl">→</span>
                          <span><strong>User Research</strong> — Understanding commuter behaviors and pain points</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-orange text-xl">→</span>
                          <span><strong>In-depth Interviews</strong> — Real conversations with real users</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-orange text-xl">→</span>
                          <span><strong>Issue Tree</strong> — Breaking down complex problems systematically</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-orange text-xl">→</span>
                          <span><strong>Desk Research</strong> — Analyzing existing data and trends</span>
                        </li>
                      </ul>
                    </article>
                  </div>
                  <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9 bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                    <h3 className="text-orange text-lg lg:text-xl font-semibold mb-4">The Context</h3>
                    <p className="mb-4">
                      Jakarta's public transportation network is vast—Transjakarta, Commuterline, MRT, LRT—all
                      serving millions of commuters daily. In 2019 alone, the Commuterline carried 900,000 passengers
                      per day, while Transjakarta transported 735,000 passengers across all corridors.
                    </p>
                    <p className="mb-4">
                      But here's the problem: While these services exist, the experience of using them is fragmented.
                      Want to travel from Jakarta to Bogor Botanical Gardens? You'll need to figure out which
                      Commuterline to take, where to transfer, and how to connect to local transport—all while
                      checking multiple apps and sources.
                    </p>
                    <p className="text-orange/80 font-medium">
                      The core issue? Accessibility. Information is scattered, routes are unclear, and planning
                      multi-modal journeys feels like detective work.
                    </p>
                  </div>
                </div>
              </div>

              <div className="issuetree-content flex flex-col gap-y-6 lg:gap-y-8">
                <h2 className="font-rodetta header-title text-orange text-2xl lg:text-4xl">
                  🌳 Breaking Down the Problem
                </h2>

                <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                  <p>
                    To tackle this challenge systematically, I used an <strong>Issue Tree framework</strong>.
                    Starting with one core problem statement, I broke it down into smaller, actionable insights:
                  </p>
                  <p className="mt-4 text-lg lg:text-xl italic text-orange/90 border-l-4 border-orange pl-5 py-2">
                    "How can we help users easily see schedules across different transportation services?"
                  </p>
                </div>

                <div
                  className="image-container lg:h-[500px] overflow-y-auto border-2 border-orange/30 rounded-xl shadow-lg shadow-orange/20 bg-dark-blue/20"
                  style={{ scrollbarColor: "#FBA346 transparent", scrollbarWidth: "thin" }}
                >
                  <img
                    src={issuetree}
                    alt="Issue Tree - Problem breakdown analysis"
                    className="w-full"
                    loading="lazy"
                    width="1200"
                    height="800"
                  />
                </div>
              </div>

              <div className="define-content flex flex-col gap-y-6 lg:gap-y-8">
                <h2 className="font-rodetta header-title text-orange text-2xl lg:text-4xl">
                  💬 Understanding Real Users
                </h2>

                <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                  <p>
                    Nothing beats talking to real people. I sat down with actual commuters—students, workers,
                    regular users of Jakarta's public transport—and listened. Their frustrations, their workarounds,
                    their daily struggles.
                  </p>
                  <p className="mt-4 text-orange/80">
                    These conversations revealed patterns that data alone couldn't show. Here's what I discovered:
                  </p>
                </div>

                <div className="user-research grid grid-cols-12 gap-y-6 lg:gap-x-8">
                  <div className="habbit col-span-12 lg:col-span-7 bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                    <div className="title text-orange text-xl lg:text-2xl font-semibold mb-5 flex items-center gap-3">
                      <span>🔄</span> User Behaviors & Pain Points
                    </div>
                    <ul className="space-y-4 text-light-blue text-base lg:text-lg">
                      <li className="flex items-start gap-3">
                        <span className="text-orange text-xl flex-shrink-0">→</span>
                        <span>
                          <strong>The Queue Problem:</strong> Many commuters skip checking schedules, leading to
                          long waits and overcrowding at stops
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange text-xl flex-shrink-0">→</span>
                        <span>
                          <strong>The App-Switching Hassle:</strong> Users juggle multiple apps to plan
                          multi-modal trips—exhausting and error-prone
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange text-xl flex-shrink-0">→</span>
                        <span>
                          <strong>Time Wasted:</strong> Without schedule visibility, commuters lose precious
                          time waiting or taking inefficient routes
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="scope col-span-12 lg:col-span-5 bg-orange/10 border border-orange/30 rounded-xl p-6 lg:p-8">
                    <div className="title text-orange text-xl lg:text-2xl font-semibold mb-5 flex items-center gap-3">
                      <span>👥</span> Research Participants
                    </div>
                    <ul className="space-y-3 text-light-blue text-base lg:text-lg">
                      <li className="flex items-center gap-3">
                        <span className="text-orange">✓</span> Women and Men
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-orange">✓</span> 3 Participants
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-orange">✓</span> Aged 17 - 40
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-orange">✓</span> Residing in Jabodetabek
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-orange">✓</span> Students & Workers
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-orange">✓</span> Active transit users
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grouping-mandates-content flex flex-col gap-y-6 lg:gap-y-8">
                <h2 className="font-rodetta header-title text-orange text-2xl lg:text-4xl">
                  📊 From Research to Design Principles
                </h2>
                <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                  <p>
                    Raw research data is overwhelming. So I organized interview responses into clear patterns,
                    then transformed those patterns into <strong>design mandates</strong>—actionable principles
                    that would guide every design decision moving forward.
                  </p>
                  <p className="mt-4 text-orange/80">
                    Think of it as translating "user frustrations" into "design opportunities."
                  </p>
                </div>
                <div className="image-grouping-mandate flex flex-col gap-y-6">
                  <div className="rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                    <img
                      src={grouping}
                      alt="User response grouping analysis"
                      className="w-full"
                      loading="lazy"
                      width="1200"
                      height="600"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                    <img
                      src={mandates}
                      alt="Design mandates from research"
                      className="w-full"
                      loading="lazy"
                      width="1200"
                      height="600"
                    />
                  </div>
                </div>
                <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9 bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                  <h3 className="text-orange text-xl lg:text-2xl font-semibold mb-4">Separating Problems from Insights</h3>
                  <p className="mb-4">
                    With patterns identified, I separated them into two categories:
                  </p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
                    <div className="bg-orange/10 border border-orange/30 rounded-xl p-5">
                      <div className="text-orange text-2xl mb-2">🚨</div>
                      <h4 className="text-orange font-semibold mb-2">Problems</h4>
                      <p className="text-sm">Issues users face daily—these become "How Might We" questions</p>
                      <p className="text-sm mt-2 italic opacity-80">Example: "Too many separate apps" → "How might we unify the experience?"</p>
                    </div>
                    <div className="bg-orange/10 border border-orange/30 rounded-xl p-5">
                      <div className="text-orange text-2xl mb-2">💡</div>
                      <h4 className="text-orange font-semibold mb-2">Insights</h4>
                      <p className="text-sm">User desires and expectations—these guide our features</p>
                      <p className="text-sm mt-2 italic opacity-80">Example: Users want simplicity, time estimates, and cost-effective routing</p>
                    </div>
                  </div>
                  <p className="text-orange/80">
                    This framework ensured every feature we'd design would solve a real problem or fulfill an actual need.
                  </p>
                </div>
                <div className="image-insight-problem rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                  <img
                    src={insights}
                    alt="Problems and insights categorization"
                    className="w-full"
                    loading="lazy"
                    width="1200"
                    height="600"
                  />
                </div>
              </div>

              <div className="conceptmodel-content flex flex-col gap-y-6 lg:gap-y-8">
                <h2 className="font-rodetta header-title text-orange text-2xl lg:text-4xl">
                  ✏️ Sketching the Solution
                </h2>

                <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                  <p>
                    With research insights in hand, I grabbed a pen and started sketching. No fancy tools yet—just
                    raw ideas flowing from user needs to potential solutions. What would an app look like if it
                    truly understood a commuter's journey?
                  </p>
                  <div className="bg-orange/10 border-l-4 border-orange rounded-r-xl p-5 my-4">
                    <p className="text-orange/90 font-medium">
                      Users needed: Easy route access • Clear schedules • Multiple transport options • Journey planning
                    </p>
                  </div>
                </div>

                <div className="image-sketch w-full lg:w-8/12 mx-auto rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                  <img
                    src={sketch}
                    alt="Initial concept sketches"
                    className="w-full"
                    loading="lazy"
                    width="800"
                    height="600"
                  />
                </div>

                <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9 bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                  <h3 className="text-orange text-xl lg:text-2xl font-semibold mb-4">Building the Concept Model</h3>
                  <p>
                    The <strong className="text-orange">Concept Model</strong> is where ideas become structure. It maps out:
                  </p>
                  <ul className="space-y-3 my-4">
                    <li className="flex items-start gap-3">
                      <span className="text-orange text-xl">→</span>
                      <span>What the app will do (functionality)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange text-xl">→</span>
                      <span>What features it will include</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange text-xl">→</span>
                      <span>How users will interact with it</span>
                    </li>
                  </ul>
                  <p className="text-orange/80">
                    Think of it as the blueprint before construction begins—a shared vision everyone can understand.
                  </p>
                </div>

                <div className="image-conceptmodel rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                  <img
                    src={conceptmodel}
                    alt="Comprehensive concept model diagram"
                    className="w-full"
                    loading="lazy"
                    width="1200"
                    height="800"
                  />
                </div>
              </div>

              <div className="jtbd-content flex flex-col gap-y-6 lg:gap-y-8">
                <h2 className="font-rodetta header-title text-orange text-2xl lg:text-4xl">
                  🎯 Jobs To Be Done: Walking in Their Shoes
                </h2>

                <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                  <p>
                    Here's a powerful shift in perspective: Instead of asking "What features do users want?", I asked
                    "What job are users trying to accomplish?" This is the essence of the <strong className="text-orange">Jobs To Be Done (JTBD)</strong> framework.
                  </p>
                  <div className="bg-gradient-to-r from-orange/10 to-orange/5 border-l-4 border-orange rounded-r-xl p-6 lg:p-8 my-4">
                    <p className="text-white text-lg lg:text-xl font-medium mb-3">
                      The Real Job:
                    </p>
                    <p className="italic">
                      "When I need to get from point A to point B using public transport, I want to know my options,
                      timing, and connections—all in one place—so I can arrive on time without stress or confusion."
                    </p>
                  </div>
                  <p className="text-orange/80">
                    By stepping into users' shoes, I could design for outcomes, not just features.
                  </p>
                </div>

                <div className="image-jtbd rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                  <img
                    src={jtbd}
                    alt="Jobs To Be Done framework analysis"
                    className="w-full"
                    loading="lazy"
                    width="1200"
                    height="800"
                  />
                </div>
              </div>

              <div className="userflow-content flex flex-col gap-y-6 lg:gap-y-8">
                <h2 className="font-rodetta header-title text-orange text-2xl lg:text-4xl">
                  🗺️ Mapping the User Journey
                </h2>
                <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                  <p>
                    Now came the critical part: designing how users would actually move through the app. Every tap,
                    every screen, every decision point needed to feel natural and effortless.
                  </p>
                  <p className="mt-4">
                    I mapped out the <strong className="text-orange">user flow</strong> from the moment someone opens JakTrans to the moment they
                    confidently board their transport. No dead ends. No confusion. Just clarity.
                  </p>
                  <div className="bg-orange/10 border border-orange/30 rounded-xl p-5 my-4">
                    <p className="text-orange font-semibold mb-2">The Flow Priority:</p>
                    <p className="text-sm">
                      Open app → See nearby routes → Check schedules → Plan journey → Get real-time updates → Arrive confidently
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-12 lg:gap-x-8 gap-y-6 mb-4">
                  <div className="image-userflow col-span-12 rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                    <img
                      src={userflow}
                      alt="Complete user flow diagram"
                      className="w-full"
                      loading="lazy"
                      width="1200"
                      height="800"
                    />
                  </div>
                  <div className="image-userflow_jtbd order-2 lg:order-1 col-span-12 w-10/12 mx-auto lg:w-full lg:col-span-6 rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                    <img
                      src={userflow_jtbd}
                      alt="User flow based on JTBD framework"
                      className="w-full"
                      loading="lazy"
                      width="600"
                      height="800"
                    />
                  </div>
                  <div className="desc lg:order-2 col-span-12 lg:col-span-6 text-light-blue text-base lg:text-lg leading-7 lg:leading-9 flex flex-col justify-center">
                    <h3 className="text-orange text-xl lg:text-2xl font-semibold mb-4">JTBD Meets User Flow</h3>
                    <p>
                      This flow isn't just about screens—it's about <strong>jobs completed</strong>. Using insights from the
                      <span className="text-orange"> Jobs To Be Done framework</span>, every step addresses a real user goal:
                    </p>
                    <ul className="space-y-2 my-4 text-sm lg:text-base">
                      <li className="flex items-start gap-2">
                        <span className="text-orange">✓</span>
                        <span>Finding the right transport mode</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange">✓</span>
                        <span>Understanding timing and connections</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange">✓</span>
                        <span>Getting from A to B without anxiety</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="information-architecture bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                  <h3 className="title text-orange text-xl lg:text-3xl font-semibold mb-5 flex items-center gap-3">
                    <span>🏗️</span> Information Architecture (IA)
                  </h3>
                  <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9 mb-6">
                    <p>
                      With the flow defined, I needed to structure the information itself. <strong className="text-orange">Information Architecture</strong> is
                      the invisible scaffolding that makes navigation feel intuitive—users shouldn't have to think about where to find things;
                      they should just find them.
                    </p>
                  </div>
                  <div className="image-ia rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                    <img
                      src={ia}
                      alt="Information architecture structure"
                      className="w-full"
                      loading="lazy"
                      width="1200"
                      height="800"
                    />
                  </div>
                </div>
              </div>

              <div className="wireframe-content flex flex-col gap-y-6 lg:gap-y-8">
                <h2 className="font-rodetta header-title text-orange text-2xl lg:text-4xl">
                  📐 Wireframing: Structure Before Style
                </h2>

                <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                  <p>
                    With the architecture in place, it was time to bring ideas to life—without the distraction of colors,
                    fonts, or fancy graphics. <strong className="text-orange">Wireframes</strong> are the skeleton of the design, showing
                    structure and layout without visual polish.
                  </p>
                  <div className="bg-orange/10 border-l-4 border-orange rounded-r-xl p-5 my-4">
                    <p className="text-orange font-semibold mb-2">Key Goals:</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span>→</span> Unified interface (no more app-switching)</li>
                      <li className="flex items-start gap-2">
                        <span>→</span> Real-time updates visible at a glance</li>
                      <li className="flex items-start gap-2">
                        <span>→</span> Trip planning tools accessible in seconds</li>
                      <li className="flex items-start gap-2">
                        <span>→</span> Clear hierarchy guiding users naturally</li>
                    </ul>
                  </div>
                  <p className="text-orange/80">
                    These wireframes translate research, flows, and architecture into tangible screens—the first
                    glimpse of what JakTrans would become.
                  </p>
                </div>

                <div className="image-wireframe rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                  <img
                    src={wireframe}
                    alt="Low-fidelity wireframes showing app structure"
                    className="w-full"
                    loading="lazy"
                    width="1200"
                    height="800"
                  />
                </div>

                <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9 bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                  <h3 className="text-orange text-xl lg:text-2xl font-semibold mb-4">Why Wireframes Matter</h3>
                  <p>
                    Wireframes let us focus on <em>functionality</em> before <em>aesthetics</em>. By aligning closely with
                    prioritized features and user needs, we could validate the layout and interaction patterns early—saving
                    time and ensuring the foundation was solid before adding visual design.
                  </p>
                  <p className="mt-4 text-orange/80 italic">
                    Think of it as building the frame of a house before choosing paint colors.
                  </p>
                </div>
              </div>

              <div className="voice-content flex flex-col gap-y-6 lg:gap-y-8">
                <h2 className="font-rodetta header-title text-orange text-2xl lg:text-4xl">
                  💬 Finding the Right Voice
                </h2>

                <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                  <p>
                    Design isn't just visual—it's also how we <em>speak</em> to users. Words matter. The right tone can make
                    users feel guided and confident, while the wrong tone can create confusion or frustration.
                  </p>
                  <div className="bg-gradient-to-r from-orange/10 to-orange/5 border-l-4 border-orange rounded-r-xl p-6 lg:p-8 my-4">
                    <p className="text-white text-lg lg:text-xl font-medium mb-3">
                      JakTrans' Tone of Voice:
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-orange text-3xl mb-2">✨</div>
                        <p className="font-semibold text-orange">Clear</p>
                      </div>
                      <div className="text-center">
                        <div className="text-orange text-3xl mb-2">🤝</div>
                        <p className="font-semibold text-orange">Formal</p>
                      </div>
                      <div className="text-center">
                        <div className="text-orange text-3xl mb-2">💙</div>
                        <p className="font-semibold text-orange">Respectful</p>
                      </div>
                      <div className="text-center">
                        <div className="text-orange text-3xl mb-2">🎉</div>
                        <p className="font-semibold text-orange">Enthusiastic</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-orange/80">
                    This tone builds trust and reliability while staying approachable—guiding users without overwhelming them.
                  </p>
                </div>

                <div className="image-voice rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                  <img
                    src={voice}
                    alt="Tone of voice guidelines and examples"
                    className="w-full"
                    loading="lazy"
                    width="1200"
                    height="600"
                  />
                </div>
              </div>

              <div className="moodboard-content flex flex-col gap-y-6 lg:gap-y-8">
                <h2 className="font-rodetta header-title text-orange text-2xl lg:text-4xl">
                  🎨 Setting the Visual Mood
                </h2>

                <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                  <p>
                    Before diving into colors and typography, I created a <strong className="text-orange">moodboard</strong>—a
                    visual collection that captures the feeling and aesthetic JakTrans should evoke. Not just "what it looks like,"
                    but "how it makes you feel."
                  </p>
                  <div className="bg-orange/10 border-l-4 border-orange rounded-r-xl p-5 my-4">
                    <p className="text-orange font-semibold mb-2">Mood Goals:</p>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <p>✓ Reliable & trustworthy</p>
                      <p>✓ Modern & efficient</p>
                      <p>✓ Calm & clear</p>
                      <p>✓ Accessible & friendly</p>
                    </div>
                  </div>
                  <p className="text-orange/80">
                    This moodboard became our north star—keeping the entire visual design cohesive and intentional.
                  </p>
                </div>

                <div className="image-moodboard rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                  <img
                    src={moodboard}
                    alt="Visual moodboard with design inspiration"
                    className="w-full"
                    loading="lazy"
                    width="1200"
                    height="800"
                  />
                </div>
              </div>

              <div className="userinterface-content flex flex-col gap-y-6 lg:gap-y-8">
                <h2 className="font-rodetta header-title text-orange text-2xl lg:text-4xl">
                  🎨 Bringing It to Life: The UI Design
                </h2>
                <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                  <p>
                    This is where everything comes together. After research, wireframes, and planning—now comes the
                    <strong className="text-orange"> visual magic</strong>. But here's the thing: great UI isn't about looking pretty.
                    It's about making complexity feel simple.
                  </p>
                  <div className="bg-gradient-to-r from-orange/10 to-orange/5 border-l-4 border-orange rounded-r-xl p-6 my-4">
                    <p className="text-white font-medium text-lg mb-2">Design Philosophy:</p>
                    <p className="italic">
                      "Clean, uncluttered, and instantly understandable—users should focus on their journey, not on figuring out the app."
                    </p>
                  </div>
                </div>
                <div className="image-uisample w-full lg:w-10/12 mx-auto rounded-xl overflow-hidden shadow-2xl shadow-orange/20">
                  <img
                    src={ui_sample}
                    alt="High-fidelity UI design samples"
                    className="w-full"
                    loading="lazy"
                    width="1000"
                    height="800"
                  />
                </div>
                <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9 bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                  <h3 className="text-orange text-xl lg:text-2xl font-semibold mb-4">Why Clean Design Wins</h3>
                  <p className="mb-4">
                    When users open JakTrans, they're usually in a hurry—rushing to catch a bus, checking if they'll make their connection.
                    The last thing they need is visual clutter. Clean design means:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-orange text-xl">→</span>
                      <span><strong>Instant clarity</strong> — critical info at a glance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange text-xl">→</span>
                      <span><strong>Intuitive navigation</strong> — no hunting for features</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange text-xl">→</span>
                      <span><strong>Reduced cognitive load</strong> — less thinking, more doing</span>
                    </li>
                  </ul>
                </div>

                <div className="properties flex flex-col gap-y-6 lg:gap-y-10">
                  <div className="design-elements bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                    <h3 className="title text-orange text-xl lg:text-3xl font-semibold mb-6 flex items-center gap-3">
                      <span>🧩</span> Design Elements
                    </h3>
                    <div className="grid grid-cols-12 lg:gap-x-8 gap-y-6">
                      <div className="image-design_elements order-2 lg:order-1 col-span-12 w-10/12 lg:w-full mx-auto lg:col-span-5 rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                        <img
                          src={design_elements}
                          alt="UI design elements and components"
                          className="w-full"
                          loading="lazy"
                          width="600"
                          height="800"
                        />
                      </div>
                      <div className="desc lg:order-2 col-span-12 lg:col-span-7 text-light-blue text-base lg:text-lg leading-7 lg:leading-9 flex flex-col justify-center">
                        <p className="mb-4">
                          Every button, icon, and component was designed with purpose. Simple doesn't mean boring—it means
                          <strong className="text-orange"> intentional</strong>.
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <span className="text-orange text-xl">✓</span>
                            <span>Clear affordances (buttons look clickable)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-orange text-xl">✓</span>
                            <span>Consistent patterns (learn once, use everywhere)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-orange text-xl">✓</span>
                            <span>Minimal visual noise (focus on what matters)</span>
                          </li>
                        </ul>
                        <p className="mt-4 text-orange/80 italic">
                          The result? Users accomplish their goals faster and with confidence.
                        </p>
                      </div>
                    </div>
                  </div>
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

                <div className="image-ui_all mx-auto rounded-xl overflow-hidden shadow-2xl shadow-orange/20">
                  <img
                    src={ui_all}
                    alt="Complete UI design showcase"
                    className="w-full"
                    loading="lazy"
                    width="1200"
                    height="1000"
                  />
                </div>
                <div className="final-note bg-gradient-to-r from-orange/10 to-orange/5 border border-orange/20 rounded-xl p-6 lg:p-8 text-center">
                  <p className="text-white text-lg lg:text-2xl font-medium italic">
                    "From scattered frustration to unified clarity—JakTrans transforms how Jakarta commutes."
                  </p>
                </div>
              </div>

              <div className="usability-content flex flex-col gap-y-6 lg:gap-y-8">
                <h2 className="font-rodetta header-title text-orange text-2xl lg:text-4xl">
                  🧪 Testing with Real Users
                </h2>

                <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                  <p>
                    Design is never finished until real users have tried it. No matter how thoughtful the research or polished
                    the design, <strong className="text-orange">usability testing</strong> reveals the truth—what works, what confuses, what delights.
                  </p>
                  <div className="bg-orange/10 border-l-4 border-orange rounded-r-xl p-5 my-4">
                    <p className="text-orange font-semibold mb-2">Why Fresh Eyes Matter:</p>
                    <p className="text-sm">
                      I deliberately chose participants who weren't part of the initial research. Fresh perspectives prevent confirmation
                      bias and uncover issues that familiar users might overlook. Different expectations = different insights.
                    </p>
                  </div>
                  <p className="text-orange/80">
                    This phase turned assumptions into evidence—validating what worked and exposing what needed refinement.
                  </p>
                </div>

                <div className="properties flex flex-col gap-y-6 lg:gap-y-10">
                  <div className="participant-profiles bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                    <h3 className="title text-orange text-xl lg:text-3xl font-semibold mb-5 flex items-center gap-3">
                      <span>👥</span> Who Tested JakTrans
                    </h3>
                    <div className="grid grid-cols-12 lg:gap-x-8 gap-y-6">
                      <div className="desc col-span-12 text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                        <p>
                          I recruited three participants aged 21-25—millennials actively using Jakarta's public transportation.
                          This demographic represents a significant user segment: tech-savvy, time-conscious, and familiar with
                          mobile apps for everyday tasks.
                        </p>
                        <p className="mt-4 text-orange/80">
                          Perfect candidates to stress-test JakTrans in real-world scenarios.
                        </p>
                      </div>
                      <div className="image-participants col-span-12 w-full mx-auto lg:col-span-8 rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                        <img
                          src={participants}
                          alt="Usability testing participant profiles"
                          className="w-full"
                          loading="lazy"
                          width="1000"
                          height="600"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="results bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                    <h3 className="title text-orange text-xl lg:text-3xl font-semibold mb-5 flex items-center gap-3">
                      <span>📊</span> What We Discovered
                    </h3>
                    <div className="grid grid-cols-12 lg:gap-x-8 gap-y-6">
                      <div className="desc col-span-12 text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                        <p className="mb-4">
                          During testing sessions, I observed everything: task completion times, points of confusion, moments
                          of delight, and user comments. Each interaction became data—both quantitative (how long?) and
                          qualitative (how did it feel?).
                        </p>
                        <div className="bg-orange/10 border-l-4 border-orange rounded-r-xl p-5">
                          <p className="text-orange font-semibold mb-2">Analysis Framework:</p>
                          <ul className="space-y-2 text-sm">
                            <li>• Task performance observation</li>
                            <li>• Difficulty identification</li>
                            <li>• Completion time tracking</li>
                            <li>• User feedback capture (strengths & weaknesses)</li>
                          </ul>
                        </div>
                      </div>
                      <div className="image-ut_results col-span-12 w-full mx-auto rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                        <img
                          src={ut_results}
                          alt="Usability testing results and findings"
                          className="w-full"
                          loading="lazy"
                          width="1200"
                          height="800"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="conclusion">
                    <div className="grid grid-cols-12 lg:gap-x-8 gap-y-6">
                      <div className="image-conclusion col-span-12 w-full mx-auto lg:col-span-5 rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                        <img
                          src={conclusion}
                          alt="Testing conclusions and insights"
                          className="w-full"
                          loading="lazy"
                          width="600"
                          height="800"
                        />
                      </div>
                      <div className="the-conclusion col-span-12 w-full mx-auto lg:col-span-7 flex flex-col gap-y-6">
                        <article className="thegood bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                          <div className="title text-green-400 text-xl lg:text-2xl font-semibold mb-4 flex items-center gap-3">
                            <span>✅</span> What Worked
                          </div>
                          <blockquote className="desc italic text-light-blue text-base lg:text-lg leading-7 lg:leading-8 border-l-4 border-green-400 pl-5">
                            "Overall, the app is pretty good. I could choose the transportation I wanted, find the nearest station,
                            and—most importantly—see where the train was at that moment. That real-time tracking was a game-changer."
                          </blockquote>
                          <p className="text-green-400/80 text-sm mt-3">— Test Participant</p>
                        </article>
                        <article className="thebad bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                          <div className="title text-red-400 text-xl lg:text-2xl font-semibold mb-4 flex items-center gap-3">
                            <span>⚠️</span> What Needs Work
                          </div>
                          <blockquote className="desc italic text-light-blue text-base lg:text-lg leading-7 lg:leading-8 border-l-4 border-red-400 pl-5">
                            "The estimated arrival time is crucial—I need to know when the train will reach my station. Also, the
                            search bar saying 'Where to today?' is confusing. If I type 'Bogor,' I expect to see all transport options
                            to Bogor, not just stations named Bogor."
                          </blockquote>
                          <p className="text-red-400/80 text-sm mt-3">— Test Participant</p>
                        </article>
                        <div className="insights bg-orange/10 border border-orange/30 rounded-xl p-5">
                          <p className="text-orange font-semibold mb-2">Key Learnings:</p>
                          <ul className="space-y-2 text-sm text-light-blue">
                            <li>✓ Real-time tracking was the standout feature</li>
                            <li>✓ Arrival time estimates need more prominence</li>
                            <li>✓ Search functionality requires clearer expectations</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="takeaway-content flex flex-col gap-y-6 lg:gap-y-8">
                <h2 className="font-rodetta header-title text-orange text-2xl lg:text-4xl">
                  🚀 Key Takeaways & Future Vision
                </h2>

                <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9 space-y-6">
                  <div className="bg-gradient-to-r from-orange/10 to-orange/5 border-l-4 border-orange rounded-r-xl p-6 lg:p-8">
                    <p className="text-white text-lg lg:text-xl font-medium mb-4">
                      What I Learned
                    </p>
                    <p>
                      This project taught me that great UX isn't about adding features—it's about removing friction.
                      Jakarta's commuters don't need another app; they need one app that understands their journey
                      from start to finish.
                    </p>
                  </div>

                  <p>
                    Through empathetic research, strategic design decisions, and iterative testing, JakTrans evolved
                    into more than just a transportation app. It became a tool for confidence—helping people navigate
                    the city with clarity, not confusion.
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="bg-dark-blue/30 border border-orange/20 rounded-xl p-6">
                      <div className="text-orange text-3xl mb-3">🎯</div>
                      <h3 className="text-orange font-semibold text-lg mb-2">User-Centric</h3>
                      <p className="text-sm">Every decision rooted in real user needs and behaviors</p>
                    </div>
                    <div className="bg-dark-blue/30 border border-orange/20 rounded-xl p-6">
                      <div className="text-orange text-3xl mb-3">✨</div>
                      <h3 className="text-orange font-semibold text-lg mb-2">Simplicity First</h3>
                      <p className="text-sm">Complex systems, simple interface—that's the goal</p>
                    </div>
                    <div className="bg-dark-blue/30 border border-orange/20 rounded-xl p-6">
                      <div className="text-orange text-3xl mb-3">🔄</div>
                      <h3 className="text-orange font-semibold text-lg mb-2">Continuous Iteration</h3>
                      <p className="text-sm">Learning from users and improving with every update</p>
                    </div>
                  </div>

                  <p className="text-orange/90 italic border-l-4 border-orange pl-5 py-3">
                    The journey doesn't end here. As Jakarta's transportation evolves, so will JakTrans—always
                    listening, always improving, always serving the diverse community that depends on it.
                  </p>
                </div>
              </div>

              <AboutContent />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
});

JakTrans.displayName = "JakTrans";

export default JakTrans;
