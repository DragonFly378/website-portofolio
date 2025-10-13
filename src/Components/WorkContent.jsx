import React from "react";

const WorkContent = React.memo(({ data, imgPos }) => {
  return (
    <a
      href={data.actions[0].link}
      className="w-8/12 lg:w-5/12 mx-auto grid grid-cols-1 gap-y-5 lg:grid-cols-12 lg:gap-x-8 my-14 lg:my-12"
    >
      <div
        className={`content-image lg:col-span-6  ${
          imgPos % 2 === 0 ? "lg:order-first" : "lg:order-last"
        }`}
      >
        <img src={data.img} alt={data.title} loading="lazy" />
      </div>
      <div className="content-data flex flex-col gap-y-1 lg:col-span-6 lg:my-auto">
        <div className="judul text-orange text-xl lg:text-4xl lg:mb-4 font-rodetta">
          {data.title}
        </div>
        <div className="desc text-sm lg:text-base font-thin text-left text-light-blue mb-1 decoration-transparent">
          {data.desc}
        </div>
        <div className="tags flex font-medium mb-1 gap-x-2 decoration-transparent">
          {data.tags.map((item, itemIdx) => (
            <div
              key={itemIdx}
              className="tag-item text-emerald-300 text-sm lg:text-md rounded-lg"
            >
              #{item}
            </div>
          ))}
        </div>

        <div className="actions flex flex-row gap-x-2 lg:gap-x-4">
          {data.actions.map((item, itemIdx) => (
            <a
              key={itemIdx}
              href={item.link}
              target={data.tags[0] === "UI/UX" ? "" : "_blank"}
              rel="noreferrer"
              className="link text-orange hover:text-white text-base lg:text-lg hover:underline"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </a>
  );
});

WorkContent.displayName = "WorkContent";

export default WorkContent;
