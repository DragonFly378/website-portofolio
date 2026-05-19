import React from "react";
import SEO from "../../Components/SEO";
import Layout from "../../Layout/Layout";
import logoImg from "../../assets/img/projects/ccphase/logo_bedge_ui.png";
import extHome from "../../assets/img/projects/ccphase/ext_Home Page.png";
import extAbout from "../../assets/img/projects/ccphase/ext_About Page.png";
import extPartners from "../../assets/img/projects/ccphase/ext_Partners.png";
import extProjects from "../../assets/img/projects/ccphase/ext_Project and News Page.png";
import extResearch from "../../assets/img/projects/ccphase/ext_Research & Publications.png";
import wpHome from "../../assets/img/projects/ccphase/wp_Home Page.png";
import wpAbout from "../../assets/img/projects/ccphase/wp_About Us.png";
import wpEvents from "../../assets/img/projects/ccphase/wp_Events.png";
import wpPublications from "../../assets/img/projects/ccphase/wp_Publication & Research Page.png";
import wpRoadmap from "../../assets/img/projects/ccphase/wp_Rodamap.png";
import wpTeams from "../../assets/img/projects/ccphase/wp_Teams Page.png";
import { AboutContent } from "../About";

const CCPHASE = React.memo(() => {
  return (
    <>
      <Layout>
        <SEO
          title="CCPHASE - FIK UI | Muhammad Hafiz Hisbullah"
          description="Case study: Designing two website systems for CCPHASE, a climate change and health research cluster under FIK Universitas Indonesia."
          path="/project/ccphase"
        />
        <section className="work-ccphase my-8 lg:my-16">
          <div className="w-11/12 lg:w-8/12 mx-auto">
            <div className="flex flex-col gap-y-16 lg:gap-y-24">

              {/* ===================== HEADER ===================== */}
              <div className="header-content flex flex-col gap-y-6 lg:gap-y-10">
                <div className="header-img w-full rounded-2xl overflow-hidden shadow-2xl shadow-orange/20 bg-gradient-to-br from-[#0a1628] to-[#132744] flex items-center justify-center p-10 lg:p-16">
                  <img
                    src={logoImg}
                    alt="CCPHASE - Climate Change, Planetary Health & Sustainable Care"
                    className="w-full max-w-2xl mx-auto"
                    loading="eager"
                    width="800"
                    height="300"
                  />
                </div>
                <div className="title-header">
                  <h1 className="judul text-orange text-3xl lg:text-5xl text-center font-rodetta tracking-wide">
                    CCPHASE
                  </h1>
                  <p className="text-light-blue text-center text-sm lg:text-lg mt-3 opacity-80">
                    Designing a Research Cluster Website for FIK Universitas Indonesia
                  </p>
                </div>
                <div className="abstract flex flex-col gap-y-5 bg-dark-blue/50 border border-orange/20 rounded-2xl p-6 lg:p-10">
                  <h2 className="header-title text-orange text-xl lg:text-3xl font-rodetta">
                    The Challenge
                  </h2>
                  <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                    <p className="mb-4">
                      How do you build a credible digital presence for a research cluster that collaborates
                      with WHO, Harvard, and leading universities worldwide — while making dense academic
                      content feel approachable and navigable?
                    </p>
                    <p>
                      This case study walks through how I designed and developed two distinct website systems for
                      CCPHASE (Climate Change, Planetary Health, and Sustainable Care), a research
                      cluster under the Faculty of Nursing Science, Universitas Indonesia — using
                      a design thinking approach to ensure every decision was rooted in real needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* ===================== INTRO & META ===================== */}
              <div className="introduction-content flex flex-col gap-y-6 lg:gap-y-8">
                <div className="introduction flex flex-col gap-y-5">
                  <h2 className="header-title text-orange text-2xl lg:text-4xl font-rodetta">
                    Meet CCPHASE
                  </h2>
                  <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                    <p className="mb-4 text-lg lg:text-xl italic text-orange/90 border-l-4 border-orange pl-5 py-2">
                      "Cross-sector research driving real impact across 12 provinces in Indonesia"
                    </p>
                    <p>
                      CCPHASE is a newly recognized research entity focused on climate change, global
                      health, and sustainable nursing — with research spanning 12 provinces across Indonesia
                      and collaborations with institutions like WHO, Harvard, and Mahidol University. When I
                      joined the project, they needed more than a website. They needed a digital platform
                      that could project their identity as a world-class research cluster to a global audience.
                    </p>
                  </div>
                </div>
                <div className="job-tools-role flex flex-col gap-y-6 lg:gap-y-10">
                  <div className="jobs grid grid-cols-12 lg:gap-x-8 gap-y-6 bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                    <div className="col-span-6 lg:col-span-3">
                      <div className="title text-orange text-base lg:text-xl font-semibold mb-2 lg:mb-3">
                        Client
                      </div>
                      <div className="caption text-light-blue text-base lg:text-lg">
                        FIK Universitas Indonesia
                      </div>
                    </div>
                    <div className="col-span-6 lg:col-span-3">
                      <div className="title text-orange text-base lg:text-xl font-semibold mb-2 lg:mb-3">
                        Deliverable
                      </div>
                      <div className="caption text-light-blue text-base lg:text-lg">
                        High-Fidelity Design + Development (2 Variants)
                      </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                      <div className="title text-orange text-base lg:text-xl font-semibold mb-2 lg:mb-3">
                        The Team
                      </div>
                      <div className="caption text-light-blue text-base lg:text-lg">
                        Muhammad Hafiz Hisbullah (Solo Project)
                      </div>
                    </div>
                  </div>
                  <div className="tools grid grid-cols-12 lg:gap-x-6 bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                    <div className="title col-span-12 text-orange text-base lg:text-xl font-semibold mb-4">
                      Tools & Technologies
                    </div>
                    <div className="list col-span-12 flex flex-wrap gap-3 text-light-blue">
                      {["Figma", "WordPress", "Netlify", "HTML/CSS/JS", "Google Docs"].map((tool, idx) => (
                        <span key={idx} className="px-4 py-2 bg-orange/10 border border-orange/30 rounded-full text-sm lg:text-base hover:bg-orange/20 transition-colors">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="role grid grid-cols-12 lg:gap-x-6 bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                    <div className="title col-span-12 text-orange text-base lg:text-xl font-semibold mb-4">
                      My Roles
                    </div>
                    <div className="list col-span-12 flex flex-wrap gap-3 text-light-blue">
                      {["Frontend Engineer", "Project Manager", "UI Designer"].map((role, idx) => (
                        <span key={idx} className="px-4 py-2 bg-orange/10 border border-orange/30 rounded-full text-sm lg:text-base hover:bg-orange/20 transition-colors">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ===================== UNDERSTANDING THE ECOSYSTEM ===================== */}
              {/* Design Thinking backbone: Empathize */}
              <div className="empathize-content flex flex-col gap-y-6 lg:gap-y-8">

                <h2 className="font-rodetta header-title text-orange text-2xl lg:text-4xl">
                  Understanding the Ecosystem
                </h2>
                <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                  <p className="mb-4">
                    Before touching any design tool, I spent time immersing myself in the world of CCPHASE.
                    I dissected their institutional profile, studied their research focus areas, sat down with
                    the academic team to understand their daily workflow, and mapped every type of content
                    that needed to live on these platforms.
                  </p>
                  <p>
                    The research focus areas alone covered Climate Change Impact on Health, Planetary Health,
                    Sustainable Nursing, Health Equity, and Community Adaptation. Add to that scientific
                    publications, active research projects, a growing team of researchers, events, a strategic
                    roadmap, and a global partner network — the content landscape was massive.
                  </p>
                </div>
                <div className="bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                  <h3 className="text-orange text-lg lg:text-xl font-semibold mb-4">What I Discovered</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-orange/80 font-semibold mb-3 text-sm uppercase tracking-wide">Content That Needs a Home</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {[
                          "Scientific Publications & Citations",
                          "Active & Completed Research Projects",
                          "Researcher & Collaborator Directory",
                          "Events, Webinars & Recordings",
                          "Strategic Development Roadmap",
                          "Global Partner Network (WHO, Harvard, etc.)",
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="text-orange flex-shrink-0">{"→"}</span>
                            <span className="text-sm lg:text-base text-light-blue">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-orange/80 font-semibold mb-3 text-sm uppercase tracking-wide">Who's Going to Use This</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {[
                          "Researchers looking for collaboration opportunities",
                          "Students exploring climate-health intersections",
                          "Institutional partners evaluating credibility",
                          "Policymakers seeking evidence-based research",
                          "Internal staff managing day-to-day content",
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="text-orange flex-shrink-0">{"→"}</span>
                            <span className="text-sm lg:text-base text-light-blue">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange/10 to-orange/5 border-l-4 border-orange rounded-r-xl p-6 lg:p-8">
                  <p className="text-white text-base lg:text-lg leading-relaxed">
                    The deeper I went, the clearer it became: CCPHASE didn't just need a pretty website.
                    They needed a system that could organize an enormous amount of academic content,
                    serve wildly different audiences, and still feel effortless to navigate.
                  </p>
                </div>
              </div>

              {/* ===================== FRAMING THE REAL PROBLEM ===================== */}
              {/* Design Thinking backbone: Define */}
              <div className="define-content flex flex-col gap-y-6 lg:gap-y-8">

                <h2 className="font-rodetta header-title text-orange text-2xl lg:text-4xl">
                  Framing the Real Problem
                </h2>
                <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                  <p className="mb-4">
                    After mapping the ecosystem, the real complexity surfaced. FIK UI didn't just need
                    one website — they needed two systems with fundamentally different goals:
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                    <h3 className="text-orange text-xl lg:text-2xl font-semibold mb-3">WordPress (Institutional)</h3>
                    <p className="text-light-blue text-base lg:text-lg leading-7 lg:leading-9 mb-4">
                      A platform managed directly by the FIK UI academic staff — people without coding
                      expertise who need to update content independently. It had to be intuitive,
                      self-service, and maintainable.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Self-Managed", "CMS-Friendly", "Institutional Tone"].map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-500/10 border border-blue-400/30 rounded-full text-xs lg:text-sm text-blue-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                    <h3 className="text-orange text-xl lg:text-2xl font-semibold mb-3">External (Global-Facing)</h3>
                    <p className="text-light-blue text-base lg:text-lg leading-7 lg:leading-9 mb-4">
                      A standalone website aimed at the international audience — researchers, partners,
                      policymakers. This one needed to impress. It had to project CCPHASE as a
                      world-class institution that operates at a global scale.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Premium Feel", "Data-Driven", "Global Audience"].map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-500/10 border border-blue-400/30 rounded-full text-xs lg:text-sm text-blue-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9 bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                  <h3 className="text-orange text-lg lg:text-xl font-semibold mb-4">The Core Tensions</h3>
                  <ul className="space-y-4">
                    {[
                      { bold: "Academic vs. Accessible", desc: "How to keep a serious scholarly tone without making the design feel stiff or intimidating?" },
                      { bold: "Dense vs. Navigable", desc: "Publications, projects, teams, events, partnerships — how to organize all of this without overwhelming users?" },
                      { bold: "Consistent vs. Distinct", desc: "Two platforms that must feel like the same brand but serve completely different contexts." },
                      { bold: "Scalable vs. Current", desc: "Research, publications, and team members will keep growing — the system needs to handle that gracefully." },
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-orange text-xl flex-shrink-0">{"→"}</span>
                        <span><strong className="text-orange">{item.bold}:</strong> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="jargon bg-gradient-to-r from-orange/10 to-orange/5 border-l-4 border-orange rounded-r-xl p-6 lg:p-8">
                  <p className="text-white text-lg lg:text-2xl font-medium italic leading-relaxed">
                    "Build two website systems — one for internal management, one for global
                    visibility — that together represent CCPHASE as a credible, world-class
                    research institution."
                  </p>
                </div>
              </div>

              {/* ===================== CRAFTING THE SOLUTION ===================== */}
              {/* Design Thinking backbone: Ideate */}
              <div className="ideate-content flex flex-col gap-y-6 lg:gap-y-8">

                <h2 className="font-rodetta header-title text-orange text-2xl lg:text-4xl">
                  Crafting the Solution
                </h2>
                <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                  <p>
                    With a clear picture of the problem, I moved into solution mode — not just
                    "what pages do we need?" but the deeper questions: How should information be
                    structured? What visual language speaks to both audiences? How do we turn dry
                    research data into something people actually want to explore?
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="bg-dark-blue/30 border border-orange/20 rounded-xl p-6">
                    <h3 className="text-orange font-semibold text-lg mb-3">Visual Identity</h3>
                    <p className="text-light-blue text-sm lg:text-base leading-7">
                      Both versions share the same CCPHASE globe-and-health logo, consistently paired
                      with Universitas Indonesia branding. Blue as the primary color communicates trust
                      and academia. The WordPress version uses a clean blue-white palette with red accents
                      tying to UI's identity, while the external version goes dark navy with electric
                      blue accents for a premium, futuristic feel.
                    </p>
                  </div>
                  <div className="bg-dark-blue/30 border border-orange/20 rounded-xl p-6">
                    <h3 className="text-orange font-semibold text-lg mb-3">Information Architecture</h3>
                    <p className="text-light-blue text-sm lg:text-base leading-7">
                      With massive content volume, I chose a flat, predictable navigation structure
                      where every page is reachable within 2 clicks from the homepage. Dynamic filtering
                      systems were built into Publications and Projects pages — designed to scale as
                      content grows over time without breaking the experience.
                    </p>
                  </div>
                  <div className="bg-dark-blue/30 border border-orange/20 rounded-xl p-6">
                    <h3 className="text-orange font-semibold text-lg mb-3">Storytelling Through Data</h3>
                    <p className="text-light-blue text-sm lg:text-base leading-7">
                      Numbers like "45+ collaborations", "1.8K+ citations", and "18+ countries" aren't
                      just thrown in as text. They're designed as visual proof points — prominent,
                      scannable elements that instantly communicate CCPHASE's research scale without
                      requiring visitors to dig through pages of content.
                    </p>
                  </div>
                </div>

                <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                  <p>
                    Both website variants share the same page structure — 8 pages total, each carefully
                    designed to handle specific content needs:
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {[
                    { title: "Home Page", desc: "Hero section with core messaging, impact statistics, latest research previews, and team introduction." },
                    { title: "About / Who We Are", desc: "Founding history, vision & mission, 4 key pillars (Research, Education, Innovation, Advocacy)." },
                    { title: "Projects & News", desc: "Research project directory with In Progress and Completed categories, filters, and card layouts." },
                    { title: "Research & Publications", desc: "Scientific publication repository with featured publications and topic-based filtering." },
                    { title: "Partners & Collaborations", desc: "Global strategic partners (WHO, Harvard, National University, Mahidol) with partnership benefits." },
                    { title: "Teams Page", desc: "Researcher and collaborator directory with clean profile cards." },
                    { title: "Events & Webinar", desc: "Featured events, upcoming events, and past events with recordings." },
                    { title: "Strategic Roadmap", desc: "Visual roadmap showing long-term research direction and development milestones." },
                  ].map((page, idx) => (
                    <div key={idx} className="bg-dark-blue/30 border border-orange/10 rounded-xl p-5 lg:p-6 hover:border-orange/30 transition-colors">
                      <h3 className="text-orange font-semibold text-base lg:text-lg mb-2">{page.title}</h3>
                      <p className="text-light-blue text-sm lg:text-base leading-6 lg:leading-7">{page.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ===================== BRINGING IT TO LIFE ===================== */}
              {/* Design Thinking backbone: Prototype */}
              <div className="prototype-content flex flex-col gap-y-16 lg:gap-y-20">
                <div className="flex flex-col gap-y-4">

                  <h2 className="font-rodetta header-title text-orange text-2xl lg:text-4xl">
                    Bringing It to Life
                  </h2>
                  <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                    <p>
                      With the strategy locked in, I moved into high-fidelity design and development.
                      Two siblings — same DNA, different wardrobes. Here's how they turned out.
                    </p>
                  </div>
                </div>

                {/* WordPress */}
                <div className="wp-content flex flex-col gap-y-6 lg:gap-y-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <h3 className="font-rodetta header-title text-orange text-xl lg:text-3xl">
                      WordPress — Built for Internal Teams
                    </h3>
                    <a
                      href="https://frontiers.ui.ac.id/ccphase/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-orange/10 hover:bg-orange text-light-blue hover:text-dark-blue border-2 border-orange px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 w-fit"
                    >
                      {"Visit Live Site →"}
                    </a>
                  </div>
                  <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                    <p>
                      Clean blue-and-white institutional aesthetic. Every component was designed to be
                      replicable using standard WordPress blocks — so the academic staff could update
                      content without ever touching code.
                    </p>
                  </div>
                  <div className="grid grid-cols-12 gap-4 lg:gap-6">
                    <div className="col-span-12 rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                      <img src={wpHome} alt="CCPHASE WordPress - Home Page" className="w-full" loading="lazy" width="1200" height="800" />
                    </div>
                    <div className="col-span-12 lg:col-span-6 rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                      <img src={wpAbout} alt="CCPHASE WordPress - About Us" className="w-full" loading="lazy" width="600" height="400" />
                    </div>
                    <div className="col-span-12 lg:col-span-6 rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                      <img src={wpPublications} alt="CCPHASE WordPress - Publications & Research" className="w-full" loading="lazy" width="600" height="400" />
                    </div>
                    <div className="col-span-12 lg:col-span-4 rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                      <img src={wpEvents} alt="CCPHASE WordPress - Events" className="w-full" loading="lazy" width="400" height="300" />
                    </div>
                    <div className="col-span-12 lg:col-span-4 rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                      <img src={wpTeams} alt="CCPHASE WordPress - Teams" className="w-full" loading="lazy" width="400" height="300" />
                    </div>
                    <div className="col-span-12 lg:col-span-4 rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                      <img src={wpRoadmap} alt="CCPHASE WordPress - Roadmap" className="w-full" loading="lazy" width="400" height="300" />
                    </div>
                  </div>
                </div>

                {/* External */}
                <div className="ext-content flex flex-col gap-y-6 lg:gap-y-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <h3 className="font-rodetta header-title text-orange text-xl lg:text-3xl">
                      External — Designed for the World
                    </h3>
                    <a
                      href="https://ccphase.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-orange/10 hover:bg-orange text-light-blue hover:text-dark-blue border-2 border-orange px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 w-fit"
                    >
                      {"Visit Live Site →"}
                    </a>
                  </div>
                  <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                    <p>
                      Dark navy canvas with electric blue accents. This is where CCPHASE speaks to
                      the world — a premium, futuristic feel with strong data visualizations and hero
                      imagery designed to captivate international audiences at first glance.
                    </p>
                  </div>
                  <div className="grid grid-cols-12 gap-4 lg:gap-6">
                    <div className="col-span-12 rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                      <img src={extHome} alt="CCPHASE External - Home Page" className="w-full" loading="lazy" width="1200" height="800" />
                    </div>
                    <div className="col-span-12 lg:col-span-6 rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                      <img src={extAbout} alt="CCPHASE External - About Page" className="w-full" loading="lazy" width="600" height="400" />
                    </div>
                    <div className="col-span-12 lg:col-span-6 rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                      <img src={extResearch} alt="CCPHASE External - Research & Publications" className="w-full" loading="lazy" width="600" height="400" />
                    </div>
                    <div className="col-span-12 lg:col-span-6 rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                      <img src={extProjects} alt="CCPHASE External - Projects & News" className="w-full" loading="lazy" width="600" height="400" />
                    </div>
                    <div className="col-span-12 lg:col-span-6 rounded-xl overflow-hidden shadow-lg shadow-orange/10">
                      <img src={extPartners} alt="CCPHASE External - Partners & Collaborations" className="w-full" loading="lazy" width="600" height="400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* ===================== THE IMPACT ===================== */}
              {/* Design Thinking backbone: Test / Deliver */}
              <div className="deliver-content flex flex-col gap-y-6 lg:gap-y-8">

                <h2 className="font-rodetta header-title text-orange text-2xl lg:text-4xl">
                  The Impact
                </h2>
                <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                  <p className="mb-4">
                    Both websites were completed and fully delivered to FIK UI — high-fidelity designs
                    in Figma, WordPress implementation live on the institutional domain, and the external
                    site deployed and running. The client was particularly impressed by how the design
                    managed to represent the caliber and scale of CCPHASE at an international level.
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { number: "12+", label: "Provinces Covered" },
                    { number: "45+", label: "Collaborations" },
                    { number: "1.8K+", label: "Citations" },
                    { number: "18+", label: "Countries" },
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-dark-blue/30 border border-orange/20 rounded-xl p-5 text-center">
                      <div className="text-orange text-2xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                      <div className="text-light-blue text-xs lg:text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-orange/10 to-orange/5 border-l-4 border-orange rounded-r-xl p-6 lg:p-8">
                  <p className="text-white text-lg lg:text-xl font-medium italic leading-relaxed">
                    "What made this project memorable was its complexity: I wasn't just designing
                    screens — I was helping the client answer strategic questions about how to
                    position CCPHASE in the eyes of the world."
                  </p>
                </div>
              </div>

              {/* ===================== WHAT I TOOK AWAY ===================== */}
              <div className="takeaway-content flex flex-col gap-y-6 lg:gap-y-8">

                <h2 className="font-rodetta header-title text-orange text-2xl lg:text-4xl">
                  What I Took Away
                </h2>

                <div className="desc text-light-blue text-base lg:text-lg leading-7 lg:leading-9 space-y-6">
                  <p>
                    This project pushed me to think beyond pixels. Managing a project end-to-end —
                    from stakeholder conversations and content architecture to design systems, frontend
                    development, and handoff documentation — sharpened how I approach complex,
                    multi-audience products.
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="bg-dark-blue/30 border border-orange/20 rounded-xl p-6">
                      <h3 className="text-orange font-semibold text-lg mb-2">Multi-Audience Design</h3>
                      <p className="text-sm">Designing for academics, students, policymakers, and internal staff — all with different expectations from the same brand.</p>
                    </div>
                    <div className="bg-dark-blue/30 border border-orange/20 rounded-xl p-6">
                      <h3 className="text-orange font-semibold text-lg mb-2">Adaptive Systems</h3>
                      <p className="text-sm">Building two design systems for different platform constraints (WordPress vs custom) without losing visual cohesion.</p>
                    </div>
                    <div className="bg-dark-blue/30 border border-orange/20 rounded-xl p-6">
                      <h3 className="text-orange font-semibold text-lg mb-2">Strategic Thinking</h3>
                      <p className="text-sm">Every visual decision had a reason: who's the audience, what's the message, and how does this scale as the cluster grows.</p>
                    </div>
                  </div>

                  <p className="text-orange/90 italic border-l-4 border-orange pl-5 py-3">
                    CCPHASE taught me that the best design work happens when you stop thinking
                    about screens and start thinking about the story your client needs to tell.
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

CCPHASE.displayName = "CCPHASE";

export default CCPHASE;
