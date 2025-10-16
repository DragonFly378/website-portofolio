import React, { useState, useEffect } from "react";
import logo from "../assets/img/dragonfly.svg";
import rolesimg from "../assets/img/roles.png";
import jumbotronBg from "../assets/img/jumbotron_bg.png";
import Connect from "./Connect";

const Jumbotron = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="jumbotron-section relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none will-change-transform">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-orange/5 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-40 -right-32 w-96 h-96 bg-orange/3 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div
        className="header-summary relative mt-12 pt-10 pb-16 lg:mt-0 lg:py-20 bg-no-repeat bg-cover md:bg-contain"
        style={{ backgroundImage: `url(${jumbotronBg})` }}
      >
        <div className="w-11/12 lg:w-7/12 xl:w-6/12 mx-auto flex flex-col gap-y-6 lg:gap-y-8">

          {/* Logo with Enhanced Animation */}
          <div className={`logo-capung flex mx-auto w-28 lg:w-44 relative transition-all duration-1000 transform will-change-transform
                          ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
            <div className="absolute inset-0 bg-orange/10 rounded-full blur-xl opacity-50"></div>
            <img
              src={logo}
              alt="DragonFly Logo"
              width="176"
              height="176"
              className="relative drop-shadow-2xl"
            />
          </div>

          {/* Greeting Section with Staggered Animation */}
          <div className={`header-text flex flex-col gap-y-2 lg:gap-y-3 transition-all duration-1000 delay-200 transform will-change-transform
                          ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
            <div className="greet text-center text-light-blue text-base lg:text-2xl font-light">
              Hi, Assalamu'alaikum
              <span className="text-xl lg:text-3xl inline-block"> 🙌 </span>
            </div>
            <div className="font-bold text-light-blue text-xl text-center lg:text-4xl lg:tracking-wider leading-relaxed">
              Muhammad Hafiz Hisbullah
            </div>
            <div className="greet text-center text-orange text-base lg:text-2xl font-light">
              is a
            </div>
          </div>

          {/* Roles Image with Scale Animation */}
          <div className={`roles justify-center flex transition-all duration-1000 delay-400 transform will-change-transform
                          ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
            <div className="relative group">
              <img
                src={rolesimg}
                alt="Product Designer & Frontend Developer"
                className="relative w-[320px] lg:w-[560px] drop-shadow-2xl transform will-change-transform
                         group-hover:scale-105 transition-transform duration-300"
                loading="eager"
                decoding="async"
                width="560"
                height="336"
              />
            </div>
          </div>

          {/* Connect Component with Fade In */}
          <div className={`transition-all duration-1000 delay-600 transform
                          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Connect />
          </div>
        </div>
      </div>

      {/* About Description with Enhanced Styling */}
      <div className={`w-11/12 lg:w-8/12 xl:w-7/12 mx-auto py-12 lg:py-20 transition-all duration-1000 delay-800 transform
                      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="relative">
          {/* Decorative Quotes */}
          <div className="absolute -top-6 -left-4 text-orange/20 text-6xl lg:text-8xl font-serif">"</div>
          <div className="absolute -bottom-10 -right-4 text-orange/20 text-6xl lg:text-8xl font-serif rotate-180">"</div>

          <div className="relative header-desc text-center text-light-blue text-sm lg:text-xl leading-relaxed lg:leading-9
                        px-8 py-8 lg:px-12 lg:py-10
                        bg-dark-blue/40 backdrop-blur-sm
                        border-2 border-orange/20 rounded-3xl
                        shadow-xl shadow-orange/10
                        hover:border-orange/40 hover:shadow-2xl hover:shadow-orange/20
                        transition-all duration-500">
            <p className="mb-4">
              A person with a <span className="text-orange font-semibold">deep-seated passion</span> for
              <span className="text-orange font-semibold"> Frontend Development</span> and
              <span className="text-orange font-semibold"> UI/UX Design</span>.
            </p>
            <p>
              My journey in the tech world has equipped me with a solid foundation in design principles,
              frontend technologies, and a keen eye for crafting
              <span className="text-orange font-semibold"> user-centric solutions</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`flex justify-center pb-8 lg:pb-12 transition-all duration-1000 delay-1000 transform
                      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex flex-col items-center gap-3">
          <span className="text-orange text-sm lg:text-base font-medium">Scroll to explore</span>
          <div className="scroll-mouse w-7 h-11 border-2 border-orange rounded-full flex justify-center pt-2 relative">
            <div className="scroll-wheel w-1.5 h-2 bg-orange rounded-full"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes scrollDown {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(8px);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
        .scroll-wheel {
          animation: scrollDown 2s ease-in-out infinite;
        }
        .scroll-mouse {
          animation: bounce 2s ease-in-out infinite;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .bg-300\\% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
});

Jumbotron.displayName = "Jumbotron";

export default Jumbotron;
