import React from "react";
import { Link } from "react-router-dom";

const WorkContent = ({ data, imgPos }) => {
  return (
    <>
      <div className="w-8/12 lg:w-5/12 mx-auto grid grid-cols-1 gap-y-5 lg:grid-cols-12 lg:gap-x-8 my-14 lg:my-12">
        <div
          className={`content-image lg:col-span-6  ${
            imgPos % 2 === 0 ? "lg:order-first" : "lg:order-last"
          }`}
        >
          <img src={data.img} alt="img" />
        </div>
        <div className="content-data flex flex-col gap-y-2 lg:col-span-6 lg:my-auto">
          <div
            className="judul text-orange text-xl lg:text-4xl lg:mb-4"
            style={{ fontFamily: "Rodetta" }}
          >
            {data.title}
          </div>
          <div className="desc text-sm lg:text-xl text-left text-light-blue mb-2 lg:mb-5 decoration-transparent">
            {data.desc}
          </div>
          <div className="tags flex gap-x-2 font-medium mb-2 lg:mb-5 decoration-transparent">
            {data.tags.map((item, itemIdx) => (
              <div
                className={`tag-item ${
                  item === "UI/UX"
                    ? "text-red bg-light-blue"
                    : "text-light-blue bg-ungu"
                }  text-sm lg:text-lg py-1 px-2 rounded-lg`}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="actions flex flex-row gap-x-2 lg:gap-x-4">
            {data.actions.map((item, itemIdx) => (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className={`link ${
                  item.title === "View Project"
                    ? "text-orange"
                    : "text-light-blue"
                }  lg:text-xl hover:underline`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkContent;
