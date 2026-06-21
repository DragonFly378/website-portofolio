import React from "react";
import SEO from "../Components/SEO";
import Layout from "../Layout/Layout";
import { AboutContent } from "./About";
import campaignMeta from "../assets/img/telkomsel/campaign_meta.jpg";
import campaignMeta2 from "../assets/img/telkomsel/campaign_meta2.jpg";
import kunjunganGrapari from "../assets/img/telkomsel/kunjungan_grapari.png";
import kunjunganGrapari2 from "../assets/img/telkomsel/kunjungan_grapari2.png";
import sosialisasiMantapp from "../assets/img/telkomsel/sosialisasi_mantapp.png";

const Summary = React.memo(() => {
  const stats = [
    { number: "~90%", label: "Faster Reporting" },
    { number: "4", label: "Business Solutions Deployed" },
    { number: "10+", label: "Stakeholders Served Daily" },
    { number: "40+", label: "Active Monitoring Pages" },
    { number: "20+", label: "Automated Workflows" },
    { number: "1-2 thn", label: "Deep Domain Experience" },
  ];

  const activities = [
    {
      img: campaignMeta2,
      title: "Workshop Campaign Meta Ads",
      desc: "Menginisiasi dan memimpin workshop untuk tim territory — membekali mereka mengelola campaign digital secara mandiri.",
      large: true,
    },
    {
      img: sosialisasiMantapp,
      title: "Kolaborasi Program MANTAPP",
      desc: "Diskusi dan koordinasi program ajakan transaksi via MyTelkomsel bersama tim di kantor.",
      large: false,
    },
    {
      img: kunjunganGrapari,
      title: "Kunjungan GraPARI",
      desc: "Monitoring outlet dan produk MaxStream di lapangan.",
    },
    {
      img: campaignMeta,
      title: "Campaign Setup",
      desc: "Hands-on setup campaign Meta Ads bersama tim.",
    },
    {
      img: kunjunganGrapari2,
      title: "Product Display Review",
      desc: "Review display produk di outlet bersama rekan.",
    },
  ];

  const solutions = [
    {
      name: "Business Monitoring Platform",
      desc: "Dashboard terpusat untuk monitoring performa bisnis seluruh Eastern Jabotabek. Territory managers mengakses data revenue, subscriber, dan campaign secara real-time — tanpa perlu request manual. Digunakan oleh 10+ territory managers, GM, dan AVP setiap hari.",
      highlight: "40+ halaman monitoring aktif",
      images: [
        { src: "/dashboard_summary.png", alt: "Business Monitoring Platform - Summary" },
        { src: "/dashboard_bbpack_daily.png", alt: "Business Monitoring Platform - Daily Trend" },
      ],
    },
    {
      name: "5G Outlet Performance Tracker",
      desc: "Territory reps bisa mandiri monitoring performa outlet 5G — lihat revenue, growth, dan ranking secara real-time langsung dari HP tanpa perlu request data ke tim support.",
      highlight: "Self-service, real-time",
      images: [
        { src: "/ro5e_site.png", alt: "5G Outlet Performance Tracker", narrow: true },
      ],
    },
    {
      name: "Field Operations Scanner",
      desc: "Digitalisasi proses scan dan tracking outlet di lapangan. Menggantikan proses manual paper-based dengan scanning otomatis, location tracking, dan auto-reporting.",
      highlight: "Seluruh area Eastern",
      images: [
        { src: "/tsel_scanner_site.png", alt: "Field Operations Scanner", narrow: true },
      ],
    },
    {
      name: "Campaign Hub MaxStream",
      desc: "Satu link untuk semua informasi campaign Bola Gembira — cara beli, cara aktivasi, dan download MaxStream. Mempermudah distribusi informasi ke field team dan customer.",
      highlight: "Public-facing, mobile-first",
      images: [
        { src: "/bogem_site.png", alt: "Campaign Hub MaxStream", narrow: true },
      ],
    },
  ];

  const reasons = [
    {
      title: "Paham Ekosistem Telkomsel",
      desc: "1-2 tahun memahami ekosistem bisnis Telkomsel Eastern Jabotabek — stakeholders, data, dan proses kerja. 4 solusi sudah aktif digunakan oleh 10+ territory managers setiap hari.",
    },
    {
      title: "Impact yang Terukur",
      desc: "Mengubah proses reporting manual 2-3 jam menjadi 10-15 menit otomatis. 40+ halaman monitoring diakses daily oleh tim territory, GM, dan AVP.",
    },
    {
      title: "Siap Berkembang Lebih Luas",
      desc: "Bukan hanya teknis — pengalaman di data, produk, campaign, workshop, dan entrepreneurship menunjukkan kesiapan untuk peran yang lebih luas di Telkomsel.",
    },
  ];

  return (
    <Layout>
      <SEO
        title="Summary - Muhammad Hafiz Hisbullah"
        description="Executive Summary: Operational Support di Telkomsel Eastern Jabotabek. Membangun solusi monitoring bisnis, mengotomasi workflow, dan mendukung campaign digital."
        path="/summary"
      />
      <section className="summary-page my-8 lg:my-16">
        <div className="w-11/12 lg:w-8/12 mx-auto">
          <div className="flex flex-col gap-y-16 lg:gap-y-24">

            {/* ===================== HERO HEADER ===================== */}
            <div className="hero-header flex flex-col items-center gap-y-5 text-center">
              <p className="text-orange/80 text-sm lg:text-base font-semibold tracking-widest uppercase">
                Executive Summary
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
                "Membangun solusi yang membantu tim territory bekerja lebih cepat dan lebih baik."
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
                    Business monitoring, reporting automation, digital campaign support
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

            {/* ===================== LIFE AT TELKOMSEL ===================== */}
            <div className="life-section flex flex-col gap-y-6 lg:gap-y-8">
              <h2 className="text-orange text-2xl lg:text-4xl font-rodetta">
                Life at Telkomsel
              </h2>
              <p className="text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                Bukan hanya membangun solusi dari balik layar — tapi juga aktif terlibat
                di lapangan, memimpin workshop, dan berkolaborasi dengan tim di seluruh
                Eastern Jabotabek.
              </p>

              <div className="grid grid-cols-12 gap-4 lg:gap-5">
                {/* Hero photo (large) */}
                <div className="col-span-12 lg:col-span-8">
                  <div className="rounded-xl overflow-hidden shadow-lg shadow-orange/10 relative aspect-[16/9]">
                    <img
                      src={activities[0].img}
                      alt={activities[0].title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 lg:p-6">
                      <h3 className="text-white font-semibold text-base lg:text-lg">
                        {activities[0].title}
                      </h3>
                      <p className="text-white/80 text-sm mt-1">
                        {activities[0].desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Side photo */}
                <div className="col-span-12 lg:col-span-4">
                  <div className="rounded-xl overflow-hidden shadow-lg shadow-orange/10 relative aspect-[16/9] lg:aspect-auto lg:h-full">
                    <img
                      src={activities[1].img}
                      alt={activities[1].title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 lg:p-5">
                      <h3 className="text-white font-semibold text-sm lg:text-base">
                        {activities[1].title}
                      </h3>
                      <p className="text-white/70 text-xs lg:text-sm mt-1">
                        {activities[1].desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom row - 3 equal photos */}
                {activities.slice(2).map((activity, idx) => (
                  <div key={idx} className="col-span-12 lg:col-span-4">
                    <div className="rounded-xl overflow-hidden shadow-lg shadow-orange/10 relative">
                      <img
                        src={activity.img}
                        alt={activity.title}
                        className="w-full h-auto object-cover aspect-[4/3]"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <h3 className="text-white font-semibold text-sm">
                          {activity.title}
                        </h3>
                        <p className="text-white/70 text-xs mt-1">
                          {activity.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===================== SOLUTIONS BUILT ===================== */}
            <div className="solutions-section flex flex-col gap-y-6 lg:gap-y-8">
              <h2 className="text-orange text-2xl lg:text-4xl font-rodetta">
                Solutions I've Built
              </h2>
              <p className="text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                4 solusi bisnis yang sudah berjalan dan digunakan secara aktif oleh tim
                di Telkomsel Eastern Jabotabek.
              </p>
              <div className="flex flex-col gap-y-8">
                {solutions.map((solution, idx) => (
                  <div
                    key={idx}
                    className="bg-dark-blue/30 border border-orange/10 rounded-xl overflow-hidden"
                  >
                    <div className="h-1 bg-gradient-to-r from-orange to-orange/40" />
                    <div className="p-6 lg:p-8 flex flex-col gap-y-5">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-2">
                        <h3 className="text-orange text-xl lg:text-2xl font-semibold">
                          {solution.name}
                        </h3>
                        <span className="text-emerald-400 text-sm lg:text-base font-semibold">
                          {solution.highlight}
                        </span>
                      </div>
                      <p className="text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                        {solution.desc}
                      </p>
                      {solution.images && solution.images.length > 0 && (
                        <div className={`grid gap-3 ${solution.images.length > 1 ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1"}`}>
                          {solution.images.map((img, imgIdx) => (
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
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ===================== BEFORE VS AFTER ===================== */}
            <div className="efficiency-section flex flex-col gap-y-6 lg:gap-y-8">
              <h2 className="text-orange text-2xl lg:text-4xl font-rodetta">
                Before vs After
              </h2>
              <p className="text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                Salah satu kontribusi utama adalah membangun sistem yang mengubah
                proses pelaporan dari manual menjadi otomatis.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-dark-blue/30 border border-rose-500/20 rounded-xl p-6 lg:p-8">
                  <h3 className="text-rose-400 text-xl lg:text-2xl font-semibold mb-4">
                    Sebelum (Manual)
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Proses data manual: 2-3 jam per laporan",
                      "Format laporan satu per satu secara manual",
                      "Distribusi file satu per satu ke setiap territory",
                      "Semua monitoring berbasis file Excel",
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
                      "Proses otomatis: 10-15 menit per laporan",
                      "Data tersaji otomatis, siap pakai",
                      "Tim territory akses data mandiri 24/7",
                      "40+ halaman monitoring aktif",
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
                  <strong className="text-orange">~90% waktu</strong> per laporan.
                </p>
              </div>
            </div>

            {/* ===================== BEYOND TECHNICAL ===================== */}
            <div className="beyond-section flex flex-col gap-y-6 lg:gap-y-8">
              <h2 className="text-orange text-2xl lg:text-4xl font-rodetta">
                Beyond Technical
              </h2>
              <p className="text-light-blue text-base lg:text-lg leading-7 lg:leading-9">
                Kontribusi di Telkomsel tidak hanya di area teknis. Aktif di campaign digital,
                knowledge sharing, dan memiliki pengalaman entrepreneurship yang memperkuat
                kemampuan leadership dan business acumen.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-dark-blue/30 border border-orange/10 rounded-xl overflow-hidden">
                  <div className="h-1 bg-rose-400" />
                  <div className="p-6 lg:p-8">
                    <h3 className="text-rose-400 text-lg lg:text-xl font-semibold mb-1">
                      Digital Campaign
                    </h3>
                    <p className="text-light-blue/70 text-sm mb-4">
                      Meta Ads | MyAds | Workshop
                    </p>
                    <div className="space-y-2">
                      {[
                        "Meta Ads management untuk Eastern Jabotabek",
                        "Workshop campaign untuk tim territory",
                        "Campaign performance reporting",
                        "Audience targeting & segmentation",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-rose-400 flex-shrink-0">{"→"}</span>
                          <span className="text-light-blue text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-dark-blue/30 border border-orange/10 rounded-xl overflow-hidden">
                  <div className="h-1 bg-amber-400" />
                  <div className="p-6 lg:p-8">
                    <h3 className="text-amber-400 text-lg lg:text-xl font-semibold mb-1">
                      Entrepreneurship
                    </h3>
                    <p className="text-light-blue/70 text-sm mb-4">
                      Co-Founder | Business Owner
                    </p>
                    <div className="space-y-2">
                      {[
                        "Teras Brew & Roastery (F&B business)",
                        "Teras Labs (Software house, 10+ clients)",
                        "Business management dari hulu ke hilir",
                        "Brand building & marketing",
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
                  <div className="h-1 bg-emerald-500" />
                  <div className="p-6 lg:p-8">
                    <h3 className="text-emerald-400 text-lg lg:text-xl font-semibold mb-1">
                      Knowledge Sharing
                    </h3>
                    <p className="text-light-blue/70 text-sm mb-4">
                      Workshop | Mentoring
                    </p>
                    <div className="space-y-2">
                      {[
                        "Workshop SMKN 8 Jakarta (Web Dev & Design)",
                        "Mentoring junior developers",
                        "Active content creator",
                        "Cross-team knowledge transfer",
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
                  membangun sesuatu dari nol — skills yang transferable ke peran yang lebih luas di Telkomsel.
                </p>
              </div>
            </div>

            {/* ===================== WHY KARTAP ===================== */}
            <div className="why-section flex flex-col gap-y-6 lg:gap-y-8">
              <h2 className="text-orange text-2xl lg:text-4xl font-rodetta">
                Mengapa Kartap?
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
