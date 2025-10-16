import React, { useMemo } from "react";
import Layout from "../../Layout/Layout";
import { shots } from "../../datas";
import ShotCard from "../../Components/ShotCard";

const Shots = React.memo(() => {
  const memoizedShots = useMemo(() => shots, []);

  return (
    <Layout>
      <section className="shots-section relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 -left-32 w-64 h-64 bg-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-orange/10 rounded-full blur-3xl"></div>

        <div className="shots-contents relative mt-8 pb-16 lg:mt-0 lg:py-20">
          <div className="w-11/12 lg:w-8/12 xl:w-7/12 mx-auto flex flex-col gap-y-8 lg:gap-y-12">
            {/* Header Section */}
            <div className="header-section text-center">
              <h1 className="text-orange text-3xl lg:text-5xl mb-4 font-rodetta tracking-wide">
                Design Exploration
              </h1>
              <p className="text-light-blue text-base lg:text-lg max-w-2xl mx-auto leading-relaxed opacity-90">
                A collection of UI experiments, concept designs, and creative explorations—
                where ideas come to life before they become products.
              </p>
            </div>

            {/* Shots Grid */}
            <div className="shots-placeholder grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {memoizedShots.map((shot, shotIdx) => (
                <ShotCard key={shot.id} shotData={shot} shotIdx={shotIdx} />
              ))}
            </div>

            {/* Footer Note */}
            <div className="footer-note text-center mt-8">
              <p className="text-light-blue/60 text-sm lg:text-base italic">
                More shots coming soon... Stay tuned! ✨
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
});

Shots.displayName = "Shots";

export default Shots;
