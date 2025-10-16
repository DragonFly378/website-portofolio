import React, { useMemo } from "react";
import WorkContent from "../Components/WorkContent";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { projects } from "../datas";

const Work = React.memo(({ page }) => {
  const displayProjects = useMemo(
    () => (page ? projects : projects.slice(0, 3)),
    [page]
  );
  return (
    <>
      {page ? (
        <Layout>
          <section className="work-section my-8 lg:my-24">
            <div className="text-orange text-center text-3xl lg:text-5xl mb-4 font-rodetta tracking-wide">
              Featured Projects
            </div>
            <p className="text-light-blue text-center text-base lg:text-lg mb-12 opacity-80 max-w-2xl mx-auto">
              Explore my latest work in UI/UX design and frontend development
            </p>
            {displayProjects.map((item, itemIdx) => {
              return <WorkContent key={itemIdx} data={item} imgPos={itemIdx} />;
            })}
          </section>
        </Layout>
      ) : (
        <section className="work-section my-16 lg:my-32 relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-orange text-3xl lg:text-5xl mb-4 font-rodetta tracking-wide">
              Featured Projects
            </h2>
            <p className="text-light-blue text-base lg:text-lg opacity-80 max-w-2xl mx-auto">
              A showcase of my best work in design and development
            </p>
          </div>

          {/* Projects */}
          {displayProjects.map((item, itemIdx) => {
            return (
              <WorkContent key={itemIdx} data={item} imgPos={itemIdx} />
            );
          })}

          {/* See More Button */}
          <div className="flex justify-center mt-16">
            <Link to="/projects">
              <button className="group relative bg-orange/10 hover:bg-orange text-orange hover:text-dark-blue
                               border-2 border-orange
                               px-12 py-5 rounded-full
                               font-bold text-lg lg:text-xl
                               transform hover:scale-105 hover:-translate-y-2
                               shadow-xl shadow-orange/20 hover:shadow-2xl hover:shadow-orange/50
                               transition-all duration-500 overflow-hidden">
                {/* Animated Background */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange to-orange/80
                               transform scale-x-0 group-hover:scale-x-100
                               transition-transform duration-500 origin-left"></span>

                <span className="relative flex items-center gap-3">
                  <span>View All Projects</span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </span>
              </button>
            </Link>
          </div>
        </section>
      )}
    </>
  );
});

Work.displayName = "Work";

export default Work;
