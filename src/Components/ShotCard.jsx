import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { swap } from "../features/shots/getShots";

const ShotCard = React.memo(({ shotData, shotIdx }) => {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(swap(shotData));
  }, [dispatch, shotData]);

  return (
    <Link
      onClick={handleClick}
      to={`/shots/${shotIdx + 1}`}
      className="shot-card group relative block transform transition-all duration-500 hover:-translate-y-2"
    >
      {/* Card Container */}
      <div className="relative overflow-hidden rounded-2xl bg-dark-blue/30 border-2 border-orange/20
                      shadow-lg shadow-orange/10 hover:shadow-2xl hover:shadow-orange/30
                      hover:border-orange transition-all duration-500">

        {/* Image Container */}
        <div className="image-header relative w-full overflow-hidden aspect-[4/3]">
          <img
            src={shotData.cover}
            alt={shotData.title}
            className="w-full h-full object-cover transform transition-transform duration-700
                       group-hover:scale-110"
            loading="lazy"
            decoding="async"
            width="600"
            height="450"
          />

          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 via-dark-blue/20 to-transparent
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* View Label on Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0
                          group-hover:opacity-100 transition-all duration-500">
            <span className="bg-orange text-dark-blue px-6 py-3 rounded-full font-semibold
                           transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              View Details →
            </span>
          </div>
        </div>

        {/* Title Section */}
        <div className="p-5 lg:p-6">
          <h3 className="title text-orange text-center text-lg lg:text-xl font-rodetta
                        group-hover:text-white transition-colors duration-300">
            {shotData.title}
          </h3>
        </div>

        {/* Decorative Corner */}
        <div className="absolute top-4 right-4 w-3 h-3 bg-orange rounded-full
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500
                        animate-pulse"></div>
      </div>
    </Link>
  );
});

ShotCard.displayName = "ShotCard";

export default ShotCard;
