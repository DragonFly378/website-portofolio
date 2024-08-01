import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { swap } from "../features/shots/getShots";

const ShotCard = ({ shotData, shotIdx }) => {
  const shotNow = useSelector((state) => state.shot.data);
  const dispatch = useDispatch();

  // console.log(shotNow);

  return (
    <>
      <Link
        onClick={() => dispatch(swap(shotData))}
        to={`/shots/${shotIdx + 1}`}
        key={shotIdx}
        className="shot-card col-span-12 lg:col-span-6"
      >
        <div className="image-header w-full">
          <img
            src={shotData.cover}
            alt="catatanpintar-cover"
            className="rounded-lg"
          />
        </div>
        {/* <button
          className="bg-blue-300 flex mx-auto"
          onClick={() => dispatch(swap(shotData))}
        >
          Click Me
        </button> */}

        <div className="title text-orange text-center text-sm lg:text-lg font-rodetta my-4">
          {shotData.title}
        </div>
      </Link>
    </>
  );
};

export default ShotCard;
