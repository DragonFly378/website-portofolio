import React from "react";
import SEO from "../Components/SEO";
import Layout from "../Layout/Layout";
import { AboutContent } from "./About";

const Summary = React.memo(() => {
  const stats = [
    { number: "4", label: "Products Built & Deployed" },
    { number: "20+", label: "Automation Scripts" },
    { number: "200+", label: "SQL Queries Written" },
    { number: "40+", label: "Dashboard Pages" },
    { number: "10+", label: "Territory Managers Served" },
    { number: "~90%", label: "Time Saved per Task" },
  ];

  const products = [
    {
      name: "Dashboard OneDirection",
      stack: ["Laravel", "Blade", "MySQL", "Hadoop", "LDAP", "Chart.js"],
      features: [
        "40+ views/pages, 25+ controllers",
        "Revenue tracking (BB, Voice, DLS, SMS)",
        "BB Pack performance & daily trend",
        "Market share, campaign management, cohort analysis",
        "MyTsel, network/site profile, warmap, sales driver",
        "Automated data sync commands",
      ],
      impact:
        "Satu dashboard terpusat untuk monitoring business performance seluruh Eastern Jabotabek. Menggantikan proses manual Excel-based reporting.",
      images: [
        { src: "/dashboard_summary.png", alt: "Dashboard OneDirection - Summary" },
        { src: "/dashboard_bbpack_daily.png", alt: "Dashboard OneDirection - BB Pack Daily" },
        { src: "/dashboard_dls.png", alt: "Dashboard OneDirection - DLS" },
        { src: "/dashboard_dls_bogem.png", alt: "Dashboard OneDirection - DLS Bogem" },
      ],
    },
    {
      name: "RO5E 5G Outlet Dashboard",
      stack: ["React", "TypeScript", "Vite", "Tailwind", "shadcn/ui"],
      features: [
        "Login dengan Outlet ID",
        "Dashboard revenue 5G vs baseline",
        "Growth metrics & ranking per group (King/Knight/Pawn)",
        "Progress bar visual pencapaian target",
        "Revenue breakdown per bulan",
      ],
      impact:
        "Territory reps bisa self-service monitor performa outlet tanpa request data manual.",
      images: [
        { src: "/ro5e_site.png", alt: "RO5E 5G Outlet Dashboard", narrow: true },
      ],
    },
    {
      name: "Scanner SBP",
      stack: ["React", "Vite", "Tailwind", "shadcn/ui", "QR Scanner"],
      features: [
        "QR code scanning via camera",
        "Outlet data lookup & management",
        "Sales force tracking per outlet",
        "Session-based export (CSV & Excel)",
        "Maps integration for outlet location",
      ],
      impact:
        "Digitalisasi proses scan & tracking di lapangan — sebelumnya manual paper-based.",
      images: [
        { src: "/tsel_scanner_site.png", alt: "Scanner SBP - Telkomsel", narrow: true },
      ],
    },
    {
      name: "Bola Gembira Microsite",
      stack: ["React", "TypeScript", "Vite", "Tailwind", "Web Share API"],
      features: [
        "Linktree-style one-page microsite",
        "Cara beli paket multi-channel (MyTelkomsel, UMB, Outlet)",
        "Cara aktivasi multi-method (Kartu Perdana, Digipos, IndiHome)",
        "Web Share API integration",
        "Mobile-first responsive design",
      ],
      impact:
        "Satu link untuk semua info campaign — mempermudah distribusi ke field & customer.",
      images: [
        { src: "/bogem_site.png", alt: "Bola Gembira Microsite", narrow: true },
      ],
    },
  ];

  const scripts = [
    {
      name: "daily.sh",
      desc: "Revenue & NAS data extraction — runs daily via cron",
    },
    {
      name: "bp.sh",
      desc: "Full ETL: Hadoop extract, gzip, MySQL load, summary transform",
    },
    {
      name: "io.sh",
      desc: "IndiHome IO ordering data pipeline (New Sales tracking)",
    },
    {
      name: "run_all_wl_weekly.sh",
      desc: "Comprehensive user profiling — 500+ line SQL, 30+ CTEs & JOINs",
    },
    {
      name: "bb_mom_yoy_daily/",
      desc: "Broadband Pack MoM & YoY daily trend comparison",
    },
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      color: "text-rose-400",
      bgColor: "bg-rose-400",
      skills: [
        { name: "React", years: "3+ thn" },
        { name: "TypeScript", years: "2+ thn" },
        { name: "Tailwind CSS", years: "3+ thn" },
        { name: "Vite", years: "2+ thn" },
        { name: "Laravel Blade", years: "2+ thn" },
        { name: "HTML/CSS", years: "4+ thn" },
      ],
    },
    {
      title: "Backend & Database",
      color: "text-blue-400",
      bgColor: "bg-blue-400",
      skills: [
        { name: "Laravel (PHP)", years: "2+ thn" },
        { name: "MySQL", years: "3+ thn" },
        { name: "Node.js", years: "1+ thn" },
        { name: "REST API", years: "3+ thn" },
        { name: "LDAP Auth", years: "1+ thn" },
      ],
    },
    {
      title: "Data Engineering",
      color: "text-emerald-400",
      bgColor: "bg-emerald-400",
      skills: [
        { name: "HiveQL", years: "2+ thn" },
        { name: "Hadoop/Beeline", years: "2+ thn" },
        { name: "SQL (Complex)", years: "3+ thn" },
        { name: "ETL Pipeline", years: "2+ thn" },
        { name: "Bash Scripting", years: "2+ thn" },
      ],
    },
    {
      title: "Tools & Platform",
      color: "text-amber-400",
      bgColor: "bg-amber-400",
      skills: [
        { name: "Git", years: "3+ thn" },
        { name: "Meta Ads", years: "1+ thn" },
        { name: "MyAds", years: "1+ thn" },
        { name: "Figma", years: "2+ thn" },
        { name: "Google Analytics", years: "1+ thn" },
      ],
    },
  ];

  const platforms = [
    "Netflix",
    "Disney+",
    "Vidio",
    "Vision+",
    "Viu",
    "WeTV",
    "HBO",
    "iQiyi",
    "ShortMax",
    "YouTube Premium",
    "Amazon Prime",
  ];

  const reasons = [
    {
      title: "Deep Domain Knowledge",
      desc: "1-2 tahun memahami ekosistem bisnis Telkomsel Eastern Jabotabek — dari level data infrastructure sampai business metrics. Sudah familiar dengan tools, proses, dan stakeholders.",
    },
    {
      title: "Proven Track Record",
      desc: "4 produk internal sudah built & deployed, 20+ automation scripts berjalan daily, 200+ queries serving kebutuhan 10+ territory managers. Kontribusi nyata yang terukur.",
    },
    {
      title: "Efficiency-First Mindset",
      desc: "Selalu mencari cara untuk mengotomasi proses manual. Data extraction dari 2-3 jam manual menjadi 10-15 menit via automated pipeline — penghematan ~90% waktu per task.",
    },
    {
      title: "Full-Stack Capability",
      desc: "Tidak hanya bisa query data, tapi juga build dashboard, web apps, dan automation pipeline. Kombinasi langka: data engineering + frontend development + business understanding.",
    },
    {
      title: "Long-Term Commitment",
      desc: "Ingin grow bersama Telkomsel. Dengan status kartap, bisa berkontribusi lebih besar untuk pengembangan tools & efficiency di level regional maupun nasional.",
    },
  ];

  return (
    <Layout>
      <SEO
        title="Summary - Muhammad Hafiz Hisbullah"
        description="Portfolio summary: Operational Support & Product Engineer at Telkomsel Eastern Jabotabek. Building tools, automating processes, driving efficiency."
        path="/summary"
      />
      <section className="summary-page my-8 lg:my-16">
        <div className="w-11/12 lg:w-8/12 mx-auto">
          <div className="flex flex-col gap-y-16 lg:gap-y-24">

            {/* ===================== HERO HEADER ===================== */}
            <div className="hero-header flex flex-col items-center gap-y-5 text-center">
              <p className="text-orange/80 text-sm lg:text-base font-semibold tracking-widest uppercase">
                Portfolio & Impact Summary
              </p>
              <h1 className="text-orange text-3xl lg:text-5xl font-rodetta tracking-wide">
                Muhammad Hafiz Hisbullah
              </h1>
              <p className="text-light-blue text-lg lg:text-xl">
                Operational Support & Product Engineer
              </p>
              <p className="text-light-blue/80 text-base lg:text-lg">
                Telkomsel Eastern Jabotabek
              </p>
              <div className="w-16 h-0.5 bg-orange/40 rounded-full" />
              <p className="text-orange/90 text-base lg:text-lg italic max-w-xl">
                "Building Tools, Automating Processes, Driving Efficiency"
              </p>
            </div>

            {/* ===================== PROFIL SINGKAT ===================== */}
            <div className="profile-section flex flex-col gap-y-6 lg:gap-y-8">
              <h2 className="text-orange text-2xl lg:text-4xl font-rodetta">
                Profil Singkat
              </h2>
              <div className="grid grid-cols-12 gap-y-6 lg:gap-x-8 bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                <div className="col-span-12 lg:col-span-3">
                  <div className="text-orange text-base lg:text-lg font-semibold mb-2">
                    Pendidikan
                  </div>
                  <div className="text-light-blue text-base lg:text-lg">
                    S1 Ilmu Komputer — Universitas Negeri Jakarta
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-3">
                  <div className="text-orange text-base lg:text-lg font-semibold mb-2">
                    Posisi Saat Ini
                  </div>
                  <div className="text-light-blue text-base lg:text-lg">
                    Operational Support & Product Engineer (Vendor)
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-3">
                  <div className="text-orange text-base lg:text-lg font-semibold mb-2">
                    Lokasi
                  </div>
                  <div className="text-light-blue text-base lg:text-lg">
                    Eastern Jabotabek (Bogor, Depok, Bekasi, Sukabumi, Garut)
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-3">
                  <div className="text-orange text-base lg:text-lg font-semibold mb-2">
                    Fokus Kerja
                  </div>
                  <div className="text-light-blue text-base lg:text-lg">
                    Data automation, dashboard development, campaign support
                  </div>
                </div>
              </div>
            </div>

            {/* ===================== IMPACT STATS ===================== */}
            <div className="stats-section flex flex-col gap-y-6 lg:gap-y-8">
              <h2 className="text-orange text-2xl lg:text-4xl font-rodetta">
                Impact at a Glance
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-dark-blue/30 border border-orange/10 rounded-xl p-6 text-center"
                  >
                    <div className="text-orange text-3xl lg:text-4xl font-bold mb-2">
                      {stat.number}
                    </div>
                    <div className="text-light-blue/80 text-sm lg:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===================== EFFICIENCY IMPACT ===================== */}
            <div className="efficiency-section flex flex-col gap-y-6 lg:gap-y-8">
              <h2 className="text-orange text-2xl lg:text-4xl font-rodetta">
                Manual vs Otomasi
              </h2>
              <p className="text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                Salah satu kontribusi utama adalah membangun sistem otomasi yang mengubah
                proses pelaporan data dari yang sebelumnya manual menjadi fully automated.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-dark-blue/30 border border-rose-500/20 rounded-xl p-6 lg:p-8">
                  <h3 className="text-rose-400 text-xl lg:text-2xl font-semibold mb-4">
                    Sebelum (Manual)
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Extract data manual dari server: 2-3 jam per task",
                      "Copy-paste ke Excel, format manual",
                      "Kirim file satu-satu ke territory manager",
                      "Tidak ada dashboard — semua berbasis file Excel",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-rose-400 flex-shrink-0">{"x"}</span>
                        <span className="text-light-blue text-sm lg:text-base">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-dark-blue/30 border border-emerald-500/20 rounded-xl p-6 lg:p-8">
                  <h3 className="text-emerald-400 text-xl lg:text-2xl font-semibold mb-4">
                    Sesudah (Otomasi)
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Automated pipeline: 10-15 menit per task (cron job)",
                      "Data langsung masuk MySQL, auto-transform",
                      "Dashboard real-time, territory akses mandiri",
                      "40+ halaman dashboard, self-service monitoring",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-emerald-400 flex-shrink-0">{"✓"}</span>
                        <span className="text-light-blue text-sm lg:text-base">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-orange/10 to-orange/5 border-l-4 border-orange rounded-r-xl p-6 lg:p-8">
                <p className="text-white text-base lg:text-lg leading-relaxed">
                  Efisiensi: <strong className="text-orange">2-3 jam manual</strong> menjadi{" "}
                  <strong className="text-orange">10-15 menit otomatis</strong> — penghematan{" "}
                  <strong className="text-orange">~90% waktu</strong> per task.
                </p>
              </div>
            </div>

            {/* ===================== PRODUCTS BUILT ===================== */}
            <div className="products-section flex flex-col gap-y-6 lg:gap-y-8">
              <h2 className="text-orange text-2xl lg:text-4xl font-rodetta">
                Products Built
              </h2>
              <p className="text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                4 produk internal yang sudah built, deployed, dan digunakan secara aktif
                oleh tim di Telkomsel Eastern Jabotabek.
              </p>
              <div className="flex flex-col gap-y-8">
                {products.map((product, idx) => (
                  <div
                    key={idx}
                    className="bg-dark-blue/30 border border-orange/10 rounded-xl overflow-hidden"
                  >
                    <div className="h-1 bg-gradient-to-r from-orange to-orange/40" />
                    <div className="p-6 lg:p-8 flex flex-col gap-y-5">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-3">
                        <h3 className="text-orange text-xl lg:text-2xl font-semibold">
                          {product.name}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {product.stack.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="px-3 py-1 bg-orange/10 border border-orange/30 rounded-full text-xs lg:text-sm text-light-blue"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-2">
                        {product.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2">
                            <span className="text-orange flex-shrink-0">{"→"}</span>
                            <span className="text-light-blue text-sm lg:text-base">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                      {product.images && product.images.length > 0 && (
                        <div className={`grid gap-3 ${product.images.length > 1 ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"}`}>
                          {product.images.map((img, imgIdx) => (
                            <div key={imgIdx} className={`rounded-xl overflow-hidden shadow-lg shadow-orange/10 border border-orange/10 ${img.narrow ? "max-w-sm mx-auto" : ""}`}>
                              <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-auto object-cover"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-4">
                        <p className="text-emerald-300 text-sm lg:text-base">
                          <strong>Impact:</strong> {product.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===================== DATA AUTOMATION ===================== */}
            <div className="automation-section flex flex-col gap-y-6 lg:gap-y-8">
              <h2 className="text-orange text-2xl lg:text-4xl font-rodetta">
                Data Automation & ETL
              </h2>
              <p className="text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                Membangun sistem otomasi data harian dari Hadoop/Hive — pipeline yang
                mengekstrak, memproses, dan menyajikan data bisnis secara otomatis untuk
                seluruh tim territory.
              </p>

              {/* Pipeline */}
              <div className="bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                <h3 className="text-orange text-lg lg:text-xl font-semibold mb-5">
                  Automated ETL Pipeline
                </h3>
                <div className="flex flex-col lg:flex-row items-stretch gap-4">
                  {[
                    {
                      step: "Hadoop / Hive",
                      desc: "Big Data source (100M+ records)",
                      color: "border-blue-400/30",
                      textColor: "text-blue-400",
                    },
                    {
                      step: "Bash + SSH",
                      desc: "Automated extraction & compression",
                      color: "border-rose-400/30",
                      textColor: "text-rose-400",
                    },
                    {
                      step: "MySQL",
                      desc: "Structured storage & transformation",
                      color: "border-amber-400/30",
                      textColor: "text-amber-400",
                    },
                    {
                      step: "Dashboard",
                      desc: "Real-time business monitoring",
                      color: "border-emerald-400/30",
                      textColor: "text-emerald-400",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 flex-1">
                      <div
                        className={`flex-1 bg-dark-blue/50 border ${item.color} rounded-lg p-4`}
                      >
                        <div className={`font-semibold ${item.textColor} mb-1`}>
                          {item.step}
                        </div>
                        <div className="text-light-blue/70 text-xs lg:text-sm">
                          {item.desc}
                        </div>
                      </div>
                      {idx < 3 && (
                        <span className="text-orange text-xl hidden lg:block">{"→"}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Scripts */}
              <div className="bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                <h3 className="text-orange text-lg lg:text-xl font-semibold mb-5">
                  Key Automation Scripts
                </h3>
                <div className="space-y-4">
                  {scripts.map((script, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4"
                    >
                      <code className="text-orange font-semibold text-sm lg:text-base shrink-0 lg:w-56">
                        {script.name}
                      </code>
                      <span className="text-light-blue/80 text-sm lg:text-base">
                        {script.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Automation Scope */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                  <h3 className="text-orange text-lg font-semibold mb-4">
                    Daily Automation
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Revenue & NAS data (BB, Voice, DLS, SMS)",
                      "Business Performance summary by region/cluster",
                      "BB Pack daily trend (CVM, Core, ACQ, PV)",
                      "MoM & YoY comparison automation",
                      "MyTsel performance tracking",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-orange flex-shrink-0">{"→"}</span>
                        <span className="text-light-blue text-sm lg:text-base">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                  <h3 className="text-orange text-lg font-semibold mb-4">
                    Weekly Automation
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Whitelist generation (30+ user dimensions)",
                      "ARPU segmentation, DRGB, CVM profiling",
                      "Device type, banking apps, MyTsel usage",
                      "Quota consumption & recharge behavior",
                      "Split & distribute ke masing-masing territory",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-orange flex-shrink-0">{"→"}</span>
                        <span className="text-light-blue text-sm lg:text-base">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ===================== CAMPAIGN & MARKETING ===================== */}
            <div className="campaign-section flex flex-col gap-y-6 lg:gap-y-8">
              <h2 className="text-orange text-2xl lg:text-4xl font-rodetta">
                Campaign & Digital Marketing
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                  <h3 className="text-orange text-lg font-semibold mb-4">
                    Campaign Management
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Meta Ads management untuk Telkomsel Eastern",
                      "MyAds campaign creation & monitoring",
                      "Campaign performance reporting (weekly/monthly)",
                      "Invoice tracking & budget management",
                      "A/B testing audience segments",
                      "Content creation (Instagram posts, decks)",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-orange flex-shrink-0">{"→"}</span>
                        <span className="text-light-blue text-sm lg:text-base">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                  <h3 className="text-orange text-lg font-semibold mb-4">
                    Audience Targeting (Big Data)
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Whitelist generation dari Hadoop/Hive",
                      "Profiling: ARPU, apps, device, CVM, geography",
                      "30+ user dimensions for audience segmentation",
                      "Targeted campaign list per territory",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-blue-400 flex-shrink-0">{"→"}</span>
                        <span className="text-light-blue text-sm lg:text-base">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8">
                <h3 className="text-orange text-lg font-semibold mb-4">
                  Digital Service Campaign Coverage
                </h3>
                <div className="flex flex-wrap gap-3 text-light-blue">
                  {platforms.map((platform, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-orange/10 border border-orange/30 rounded-full text-sm lg:text-base hover:bg-orange/20 transition-colors"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ===================== TECHNICAL SKILLS ===================== */}
            <div className="skills-section flex flex-col gap-y-6 lg:gap-y-8">
              <h2 className="text-orange text-2xl lg:text-4xl font-rodetta">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {skillCategories.map((category, catIdx) => (
                  <div
                    key={catIdx}
                    className="bg-dark-blue/30 border border-orange/10 rounded-xl p-6 lg:p-8"
                  >
                    <h3
                      className={`${category.color} text-lg lg:text-xl font-semibold mb-5`}
                    >
                      {category.title}
                    </h3>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIdx) => (
                        <div
                          key={skillIdx}
                          className="flex items-center justify-between"
                        >
                          <span className="text-light-blue text-sm lg:text-base">
                            {skill.name}
                          </span>
                          <span
                            className={`${category.bgColor} text-white/90 px-3 py-1 rounded-full text-xs font-bold`}
                          >
                            {skill.years}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===================== BEYOND TELKOMSEL ===================== */}
            <div className="beyond-section flex flex-col gap-y-6 lg:gap-y-8">
              <h2 className="text-orange text-2xl lg:text-4xl font-rodetta">
                Beyond Telkomsel
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-dark-blue/30 border border-orange/10 rounded-xl overflow-hidden">
                  <div className="h-1 bg-amber-400" />
                  <div className="p-6 lg:p-8">
                    <h3 className="text-amber-400 text-lg lg:text-xl font-semibold mb-1">
                      Teras Brew & Roastery
                    </h3>
                    <p className="text-light-blue/70 text-sm mb-4">
                      Co-Founder | Coffee Business
                    </p>
                    <div className="space-y-2">
                      {[
                        "Bisnis kopi dari hulu ke hilir",
                        "Registered: NIB, HAKI, UMK",
                        "Product: roasted beans, manual brew",
                        "Marketing: social media & branding",
                        "Client: Telkomsel, wedding events",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-amber-400 flex-shrink-0">{"→"}</span>
                          <span className="text-light-blue text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-dark-blue/30 border border-orange/10 rounded-xl overflow-hidden">
                  <div className="h-1 bg-blue-500" />
                  <div className="p-6 lg:p-8">
                    <h3 className="text-blue-400 text-lg lg:text-xl font-semibold mb-1">
                      Teras Labs
                    </h3>
                    <p className="text-light-blue/70 text-sm mb-4">
                      Co-Founder | Software House
                    </p>
                    <div className="space-y-2">
                      {[
                        "Revenue: > 3 digit juta (cumulative)",
                        "10+ client projects delivered",
                        "Services: web dev, mobile app, design",
                        "Product: Teras POS (Point of Sale)",
                        "Partnership: MAKA Group & others",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-blue-400 flex-shrink-0">{"→"}</span>
                          <span className="text-light-blue text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-dark-blue/30 border border-orange/10 rounded-xl overflow-hidden">
                  <div className="h-1 bg-emerald-500" />
                  <div className="p-6 lg:p-8">
                    <h3 className="text-emerald-400 text-lg lg:text-xl font-semibold mb-1">
                      Teaching & Content
                    </h3>
                    <p className="text-light-blue/70 text-sm mb-4">
                      Educator | Content Creator
                    </p>
                    <div className="space-y-2">
                      {[
                        "Workshop SMKN 8 Jakarta",
                        "Day 1: Website Development",
                        "Day 2: Product Design",
                        "Active content creator",
                        "Mentoring junior developers",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-400 flex-shrink-0">{"→"}</span>
                          <span className="text-light-blue text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-orange/10 to-orange/5 border-l-4 border-orange rounded-r-xl p-6 lg:p-8">
                <p className="text-white text-base lg:text-lg leading-relaxed">
                  Entrepreneurship & teaching menunjukkan leadership, initiative, dan kemampuan
                  membangun sesuatu dari nol — skills yang transferable ke peran di Telkomsel.
                </p>
              </div>
            </div>

            {/* ===================== WHY KARTAP ===================== */}
            <div className="why-section flex flex-col gap-y-6 lg:gap-y-8">
              <h2 className="text-orange text-2xl lg:text-4xl font-rodetta">
                Why Organic / Kartap?
              </h2>
              <div className="flex flex-col gap-y-4">
                {reasons.map((reason, idx) => (
                  <div
                    key={idx}
                    className="bg-dark-blue/30 border border-orange/10 rounded-xl overflow-hidden flex"
                  >
                    <div className="w-1.5 bg-orange shrink-0" />
                    <div className="p-5 lg:p-6 flex gap-4 lg:gap-5">
                      <div className="w-8 h-8 rounded-full bg-orange/20 flex items-center justify-center shrink-0">
                        <span className="text-orange font-bold text-sm">
                          {idx + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-orange font-semibold text-base lg:text-lg mb-1">
                          {reason.title}
                        </h3>
                        <p className="text-light-blue text-sm lg:text-base leading-7">
                          {reason.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===================== CLOSING ===================== */}
            <div className="closing-section text-center flex flex-col items-center gap-y-4">
              <div className="w-16 h-0.5 bg-orange/40 rounded-full" />
              <p className="text-orange/90 text-lg lg:text-xl italic font-rodetta">
                "Let's build the future of Telkomsel together."
              </p>
              <div className="w-16 h-0.5 bg-orange/40 rounded-full" />
            </div>

            {/* ===================== ABOUT CONTENT ===================== */}
            <AboutContent />
          </div>
        </div>
      </section>
    </Layout>
  );
});

Summary.displayName = "Summary";
export default Summary;
