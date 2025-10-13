import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/img/dragonfly.svg";
import "./Link.css";

const LinkCard = React.memo(({ title, url, description, emoji, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`link-card group relative w-full bg-gradient-to-r from-dark-blue to-dark-blue border-2 border-orange/60 rounded-2xl p-6 sm:p-7 lg:p-8 overflow-hidden transition-all duration-500 ease-out transform active:scale-95 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } hover:border-orange hover:shadow-2xl hover:shadow-orange/40 lg:hover:-translate-y-2 min-h-[88px] sm:min-h-[100px]`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Animated background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange/0 via-orange/5 to-orange/0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500"></div>

      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-orange to-orange/50 rounded-2xl blur opacity-0 group-hover:opacity-20 group-active:opacity-20 transition duration-500"></div>

      <div className="relative flex items-center gap-x-4 sm:gap-x-5">
        {emoji && (
          <div className="icon text-5xl sm:text-6xl lg:text-6xl flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-12 group-active:scale-110 group-active:rotate-12 transition-all duration-300">
            {emoji}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="text-light-blue text-base sm:text-lg lg:text-2xl font-bold mb-1 sm:mb-2 group-hover:text-orange group-active:text-orange transition-colors duration-300 leading-tight">
            {title}
          </div>
          {description && (
            <div className="text-light-blue/70 text-xs sm:text-sm lg:text-base group-hover:text-light-blue group-active:text-light-blue transition-colors duration-300 leading-snug">
              {description}
            </div>
          )}
        </div>
        <div className="arrow text-orange text-2xl sm:text-3xl flex-shrink-0 transform group-hover:translate-x-2 group-active:translate-x-2 transition-transform duration-300">
          →
        </div>
      </div>
    </a>
  );
});

LinkCard.displayName = "LinkCard";

const Link = () => {
  const [profileVisible, setProfileVisible] = useState(false);

  useEffect(() => {
    setProfileVisible(true);
  }, []);

  const socialLinks = [
    {
      name: "linkedin",
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/muhammadhafizhisbullah/",
      color: "hover:text-blue-400",
    },
    {
      name: "github",
      icon: faGithub,
      link: "https://github.com/DragonFly378",
      color: "hover:text-purple-400",
    },
    {
      name: "instagram",
      icon: faInstagram,
      link: "https://www.instagram.com/hafizhb28/",
      color: "hover:text-pink-400",
    },
  ];

  const mainLinks = [
    {
      title: "Baca Quran",
      url: "https://taslim-site.vercel.app",
      description: "Aplikasi untuk membaca Al-Quran online",
      emoji: "📖",
    },
    {
      title: "Pesan Kopi @Terasbrew",
      url: "https://www.instagram.com/terasbrew/",
      description: "Coffee shop terbaik untuk ngopi santai",
      emoji: "☕",
    },
    {
      title: "Talk about project @TERASLABS",
      url: "https://www.instagram.com/teraslabs/",
      description: "Diskusi dan kolaborasi project menarik",
      emoji: "💼",
    },
  ];

  return (
    <div className="link-page relative min-h-screen bg-dark-blue py-8 sm:py-12 lg:py-16 overflow-hidden safe-area-inset">
      {/* Animated background circles - optimized for mobile */}
      <div className="absolute top-10 -left-20 sm:left-10 w-48 sm:w-64 h-48 sm:h-64 bg-orange/5 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-10 -right-20 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-orange/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container relative w-full px-4 sm:w-11/12 sm:px-0 lg:w-5/12 xl:w-4/12 mx-auto max-w-2xl">
        {/* Profile Section */}
        <div
          className={`profile-section flex flex-col items-center gap-y-3 sm:gap-y-4 lg:gap-y-6 mb-6 sm:mb-8 lg:mb-12 transition-all duration-1000 ${
            profileVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-8 opacity-0"
          }`}
        >
          {/* Logo with pulse animation */}
          <div className="logo-wrapper relative w-24 sm:w-28 lg:w-36 mb-2">
            <div className="absolute inset-0 bg-orange/20 rounded-full blur-xl animate-pulse"></div>
            <img
              src={logo}
              alt="DragonFly Logo"
              className="relative w-full animate-bounce"
              style={{ animationDuration: "3s" }}
              loading="eager"
            />
          </div>

          <div className="profile-info text-center px-2">
            <h1 className="text-light-blue text-xl sm:text-2xl lg:text-4xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-light-blue via-orange to-light-blue bg-clip-text text-transparent animate-gradient bg-300% leading-tight">
              Muhammad Hafiz Hisbullah
            </h1>
            <div className="inline-block px-4 sm:px-5 py-2 sm:py-2.5 bg-orange/10 border border-orange/30 rounded-full mb-3 sm:mb-4">
              <p className="text-orange text-sm sm:text-base lg:text-lg font-medium whitespace-nowrap">
                Product Designer || Frontend Developer
              </p>
            </div>
            <p className="text-light-blue text-sm sm:text-base opacity-75 mt-2 sm:mt-3 max-w-xs sm:max-w-md mx-auto leading-relaxed px-2">
              ✨ Crafting meaningful products that make life simpler.
            </p>
          </div>

          {/* Social Media Icons - larger touch targets for mobile */}
          <div className="social-media flex gap-x-8 sm:gap-x-10 lg:gap-x-12 mt-3 sm:mt-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className={`relative text-light-blue ${social.color} transition-all duration-300 transform active:scale-110 active:-translate-y-1 hover:scale-125 hover:-translate-y-1 p-2 -m-2`}
                aria-label={`Visit ${social.name}`}
              >
                <div className="absolute inset-0 bg-orange/0 hover:bg-orange/20 active:bg-orange/20 rounded-full blur-md transition-all duration-300"></div>
                <FontAwesomeIcon
                  icon={social.icon}
                  className="relative text-3xl sm:text-4xl lg:text-4xl"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Animated Divider */}
        <div className="relative mb-6 sm:mb-8 lg:mb-12 px-2">
          <div className="divider w-full h-px bg-gradient-to-r from-transparent via-orange to-transparent opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark-blue px-3 sm:px-4">
            <span className="text-orange text-base sm:text-lg">🔗</span>
          </div>
        </div>

        {/* Links Section with staggered animation */}
        <div className="links-section flex flex-col gap-y-3 sm:gap-y-4 lg:gap-y-5 mb-8 sm:mb-12">
          {mainLinks.map((link, idx) => (
            <LinkCard
              key={idx}
              title={link.title}
              url={link.url}
              description={link.description}
              emoji={link.emoji}
              delay={idx * 150}
            />
          ))}
        </div>

        {/* Enhanced Footer */}
        <div className="footer text-center mt-8 sm:mt-12 lg:mt-16 pb-6 sm:pb-8">
          <div className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-orange/5 to-orange/10 rounded-full border border-orange/20">
            <p className="text-light-blue/60 text-xs sm:text-sm">
              Made with ❤️ by{" "}
              <span className="text-orange font-medium">DragonFly</span>
            </p>
          </div>
          <p className="text-light-blue/40 text-xs sm:text-sm mt-3 px-4">
            © 2024 Muhammad Hafiz Hisbullah. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Link;
