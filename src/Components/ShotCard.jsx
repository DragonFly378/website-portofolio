import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { swap } from "../features/shots/getShots";

const ShotCard = React.memo(({ shotData, shotIdx }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(swap(shotData));
  };

  return (
    <Link
      onClick={handleClick}
      to={`/shots/${shotIdx + 1}`}
      className="shot-card col-span-12 lg:col-span-6"
    >
      <div className="image-header w-full">
        <img
          src={shotData.cover}
          alt={shotData.title}
          className="rounded-lg"
          loading="lazy"
        />
      </div>

      <div className="title text-orange text-center text-sm lg:text-lg font-rodetta my-4">
        {shotData.title}
      </div>
    </Link>
  );
});

ShotCard.displayName = "ShotCard";

export default ShotCard;
