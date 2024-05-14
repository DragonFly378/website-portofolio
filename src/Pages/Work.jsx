import React from "react";
import WorkContent from "../Components/WorkContent";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { projects } from "../datas";

const Work = ({ page, datas }) => {
  return (
    <>
      {page ? (
        <Layout>
          <section className="work-section my-8 lg:my-24">
            <div className="text-orange text-center underline text-xl  lg:text-3xl lg:mb-4 font-rodetta">
              All Projects
            </div>
            {projects.map((item, itemIdx) => {
              return <WorkContent data={item} imgPos={`${itemIdx}`} />;
            })}
          </section>
        </Layout>
      ) : (
        <section className="work-section my-8 lg:my-24">
          {projects.slice(0, 3).map((item, itemIdx) => {
            return (
              <WorkContent key={itemIdx} data={item} imgPos={`${itemIdx}`} />
            );
          })}
          <Link to="/projects">
            {" "}
            <div className="see-more w-8/12 lg:w-5/12 mx-auto my-4 lg:my-16 text-center lg:py-2 lg:text-xl text-orange border border-orange rounded-lg hover:bg-orange hover:text-dark-blue hover:underline hover:border-none transition ease-in-out">
              See More
            </div>
          </Link>
        </section>
      )}
    </>
  );
};

export default Work;
