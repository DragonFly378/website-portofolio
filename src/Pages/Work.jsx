import React from "react";
import WorkContent from "../Components/WorkContent";
import Layout from "../Layout/Layout";
import rwpintar from "../assets/img/rwpintar.png";

const Work = ({ page }) => {
  const workContens = [
    {
      title: "RW PINTAR",
      desc: "Database website for storing data and letters belonging to residents of Batu Ceper, Central Jakarta, not only that, this website also has several features including RW complaint services, discussion forums, and also blogs for traders there.",
      img: rwpintar,
      tags: ["UI/UX, Frontend"],
    },
    {
      title: "RW PINTAR",
      desc: "Database website for storing data and letters belonging to residents of Batu Ceper, Central Jakarta, not only that, this website also has several features including RW complaint services, discussion forums, and also blogs for traders there.",
      img: rwpintar,
      tags: ["UI/UX, Frontend"],
    },
    {
      title: "RW PINTAR",
      desc: "Database website for storing data and letters belonging to residents of Batu Ceper, Central Jakarta, not only that, this website also has several features including RW complaint services, discussion forums, and also blogs for traders there.",
      img: rwpintar,
      tags: ["UI/UX, Frontend"],
    },
    {
      title: "RW PINTAR",
      desc: "Database website for storing data and letters belonging to residents of Batu Ceper, Central Jakarta, not only that, this website also has several features including RW complaint services, discussion forums, and also blogs for traders there.",
      img: rwpintar,
      tags: ["UI/UX, Frontend"],
    },
  ];

  return (
    <>
      {page ? (
        <Layout>
          <section className="work-section my-8 lg:my-24">
            <div
              className="text-orange text-center underline text-xl  lg:text-3xl lg:mb-4"
              style={{ fontFamily: "Rodetta" }}
            >
              My Works
            </div>
            {workContens.map((item, itemIdx) => {
              return <WorkContent data={item} imgPos={`${itemIdx}`} />;
            })}
          </section>
        </Layout>
      ) : (
        <section className="work-section my-8 lg:my-24">
          {workContens.map((item, itemIdx) => {
            return (
              <WorkContent key={itemIdx} data={item} imgPos={`${itemIdx}`} />
            );
          })}
        </section>
      )}
    </>
  );
};

export default Work;
