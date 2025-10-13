import React from "react";
import Layout from "../../Layout/Layout";
import { shots } from "../../datas";
import ShotCard from "../../Components/ShotCard";

const Shots = () => {
  return (
    <Layout>
      <section className="shots-section">
        <div className="shots-contents mt-8 pb-16 lg:mt-0 lg:py-14">
          <div className="w-11/12 lg:w-6/12 mx-auto flex flex-col gap-y-2 lg:gap-y-4">
            <div className="text-orange text-center underline text-xl lg:text-3xl mb-8 font-rodetta">
              Exploration Shots
            </div>
            <div className="shots-placeholder grid grid-cols-12 lg:gap-x-5 gap-y-7">
              {shots.map((shot, shotIdx) => (
                <ShotCard key={shot.id} shotData={shot} shotIdx={shotIdx} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shots;
