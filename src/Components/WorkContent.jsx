import React, { useState, useRef, useEffect } from "react";

const WorkContent = React.memo(({ data, imgPos }) => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect after animation to save resources
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const currentRef = contentRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={contentRef}
      className={`w-11/12 lg:w-9/12 xl:w-8/12 mx-auto my-16 lg:my-24 group
                  transition-all duration-700 transform will-change-transform
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
    >
      <a
        href={data.actions[0].link}
        className="grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-12 items-center
                   bg-dark-blue/30 backdrop-blur-sm
                   border-2 border-orange/20 rounded-3xl
                   p-6 lg:p-10
                   shadow-xl shadow-orange/10
                   hover:border-orange hover:shadow-2xl hover:shadow-orange/30
                   hover:-translate-y-2
                   transition-all duration-500"
      >
        {/* Image Section */}
        <div
          className={`content-image lg:col-span-6 ${
            imgPos % 2 === 0 ? "lg:order-first" : "lg:order-last"
          }`}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-orange/20
                        border-2 border-orange/10 group-hover:border-orange/30
                        transition-all duration-500">
            <img
              src={data.img}
              alt={data.title}
              className="w-full transform transition-transform duration-500 will-change-transform
                       group-hover:scale-105"
              loading="lazy"
              decoding="async"
              width="600"
              height="400"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/60 via-dark-blue/20 to-transparent
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Hover Badge */}
            <div className="absolute top-4 right-4 bg-orange text-dark-blue px-4 py-2 rounded-full
                          font-semibold text-sm opacity-0 group-hover:opacity-100
                          transform translate-x-10 group-hover:translate-x-0
                          transition-all duration-500">
              View Project →
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="content-data flex flex-col gap-y-4 lg:col-span-6">
          {/* Title */}
          <h3 className="judul text-orange text-2xl lg:text-5xl font-rodetta
                       group-hover:text-white transition-colors duration-300">
            {data.title}
          </h3>

          {/* Description */}
          <p className="desc text-base lg:text-lg text-light-blue leading-relaxed lg:leading-8">
            {data.desc}
          </p>

          {/* Tags */}
          <div className="tags flex flex-wrap gap-3">
            {data.tags.map((item, itemIdx) => (
              <span
                key={itemIdx}
                className="tag-item bg-emerald-500/20 text-emerald-300 border border-emerald-500/30
                         px-4 py-2 rounded-full text-sm lg:text-base font-medium
                         hover:bg-emerald-500/30 hover:border-emerald-500/50
                         transform hover:scale-105
                         transition-all duration-300"
              >
                #{item}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="actions flex flex-wrap gap-4 mt-2">
            {data.actions.map((item, itemIdx) => (
              <a
                key={itemIdx}
                href={item.link}
                target={data.tags[0] === "UI/UX" ? "" : "_blank"}
                rel="noreferrer"
                className="inline-flex items-center gap-2
                         bg-orange/10 hover:bg-orange text-light-blue hover:text-dark-blue
                         border-2 border-orange
                         px-6 py-3 rounded-full
                         font-semibold text-sm lg:text-base
                         transform hover:scale-105 hover:-translate-y-1
                         shadow-lg shadow-orange/20 hover:shadow-xl hover:shadow-orange/40
                         transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <span>{item.title}</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
});

WorkContent.displayName = "WorkContent";

export default WorkContent;
