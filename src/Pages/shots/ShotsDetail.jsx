import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { shots } from "../../datas";

const ShotsDetail = React.memo(() => {
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

  // Memoize images to prevent re-renders
  const memoizedImages = useMemo(() => shotNow?.images || [], [shotNow]);

  if (!shotNow) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 border-4 border-orange border-t-transparent rounded-full animate-spin"></div>
            <div className="text-orange text-xl font-rodetta">Loading design...</div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="shot-detail relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-10 -left-20 w-64 h-64 bg-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 -right-20 w-96 h-96 bg-orange/10 rounded-full blur-3xl"></div>

        <div className="shots-contents relative mt-4 pt-10 pb-16 lg:mt-0 lg:py-20">
          <div className="w-11/12 lg:w-8/12 xl:w-7/12 mx-auto flex flex-col gap-y-8 lg:gap-y-12">

            {/* Back Button */}
            <Link
              to="/shots"
              className="inline-flex items-center gap-2 text-light-blue hover:text-orange
                         transition-colors duration-300 w-fit group"
            >
              <span className="transform group-hover:-translate-x-1 transition-transform duration-300">←</span>
              <span>Back to Shots</span>
            </Link>

            {/* Title Section */}
            <div className="header-section text-center space-y-4">
              <h1 className="text-orange text-3xl lg:text-5xl font-rodetta tracking-wide">
                {shotNow.title}
              </h1>
              <p className="text-light-blue text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
                {shotNow.desc}
              </p>
            </div>

            {/* Cover Image */}
            <div className="shot-banner w-full group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-orange/20
                            border-2 border-orange/20 hover:border-orange transition-all duration-500">
                <img
                  src={shotNow.cover}
                  alt={shotNow.title}
                  className="w-full transform transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  decoding="async"
                  width="1200"
                  height="800"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/30 to-transparent
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange/50 to-transparent"></div>
              <span className="text-orange text-sm">Gallery</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange/50 to-transparent"></div>
            </div>

            {/* Image Gallery */}
            <div className="shot-gallery">
              <div className="grid grid-cols-1 gap-8 lg:gap-10">
                {memoizedImages.map((img, imgIdx) => (
                  <div
                    key={imgIdx}
                    className="shot-img group"
                    style={{ animationDelay: `${imgIdx * 100}ms` }}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-orange/10
                                  border-2 border-orange/10 hover:border-orange/30 transition-all duration-500">
                      <img
                        src={img}
                        alt={`${shotNow.title} - Design ${imgIdx + 1}`}
                        className="w-full transform transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                        width="1200"
                        height="800"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/20 to-transparent
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Image Number Badge */}
                      <div className="absolute top-4 right-4 bg-orange/90 text-dark-blue
                                    px-4 py-2 rounded-full font-semibold text-sm
                                    transform translate-x-20 group-hover:translate-x-0
                                    transition-transform duration-500">
                        {imgIdx + 1} / {memoizedImages.length}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Back to Top / Navigation */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4
                          bg-dark-blue/30 border border-orange/20 rounded-2xl p-6 lg:p-8">
              <Link
                to="/shots"
                className="bg-orange hover:bg-orange/90 text-dark-blue font-semibold
                         px-8 py-3 rounded-full transition-all duration-300
                         hover:shadow-lg hover:shadow-orange/50 transform hover:-translate-y-1"
              >
                ← Back to All Shots
              </Link>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-light-blue hover:text-orange transition-colors duration-300
                         flex items-center gap-2 group"
              >
                <span>Back to Top</span>
                <span className="transform group-hover:-translate-y-1 transition-transform duration-300">↑</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
});

ShotsDetail.displayName = "ShotsDetail";

export default ShotsDetail;
