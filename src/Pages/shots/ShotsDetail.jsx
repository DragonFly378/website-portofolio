import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../../Layout/Layout";
import { shots } from "../../datas";
import { useParams } from "react-router-dom";

const ShotsDetail = () => {
  const foundShot = useSelector((state) => state.shot.data);
  const [shotNow, setShotNow] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (Object.keys(foundShot).length === 0) {
      setShotNow(shots.find((shot) => shot.id === parseInt(id, 10)));
    } else {
      setShotNow(foundShot);
    }
  }, [id, foundShot]);

  if (!shotNow) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-orange text-xl">Loading...</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="shot-detail">
        <div className="shots-contents mt-4 pt-10 pb-16 lg:mt-0 lg:py-14">
          <div className="w-11/12 lg:w-6/12 mx-auto flex flex-col gap-y-2 lg:gap-y-4">
            <div className="text-orange text-center underline text-xl lg:text-3xl lg:mb-4 font-rodetta">
              {shotNow.title}
            </div>
            <div className="shot-banner w-full mb-4 lg:mb-10">
              <img
                src={shotNow.cover}
                alt={shotNow.title}
                className="rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="shot-gallery">
              <div className="grid grid-cols-12 lg:gap-x-3 gap-y-4">
                {shotNow.images.map((img, imgIdx) => (
                  <div key={imgIdx} className="shot-img col-span-12 w-8/12 mx-auto">
                    <img
                      src={img}
                      alt={`${shotNow.title} ${imgIdx + 1}`}
                      className="rounded-lg"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ShotsDetail;
