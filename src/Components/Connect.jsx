import React from "react";
import { sosmed } from "../datas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

const Connect = () => {
  const location = useLocation();

  const pathname = location.pathname;

  return (
    <>
      <section className="connect-section mt-5 lg:mt-5 mx-auto">
        <div className="title text-orange text-center text-sm lg:text-lg">
          Let's Connect!
        </div>
        <div className="social-media flex text-light-blue gap-x-4 lg:gap-x-8 mt-3 lg:mt-4">
          {sosmed.map((item, itemIdx) => {
            return (
              <a
                key={itemIdx}
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="lg:text-2xl text-xl"
                  icon={item.icon}
                />{" "}
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Connect;
