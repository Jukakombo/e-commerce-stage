import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { AiFillStar } from "react-icons/ai";
import { FreshManCardDetail } from "./data";
import { foodMenu } from "./data";
function FiverManCard() {
  return (
    <>
      {FreshManCardDetail.map((x) => (
        <div
          key={x.id}
          className="card_man_fiver sm:w-full md:w-[300px] xl:w-[500px]"
        >
          <div className="flex items-center px-4 py-4">
            <CircularProgress
              variant="determinate"
              value={75}
              style={{ color: "#44BBA4" }}
              size={50}
            />
            <div className="ml-4">
              <div className="flex">
                <AiFillStar color="#FFCA28" />
                <AiFillStar color="#FFCA28" />
                <AiFillStar color="#FFCA28" />
                <AiFillStar color="#FFCA28" />
              </div>
              <h1 className="text-2XL font-bold text-[#FFCA28] uppercase">
                Very Good
              </h1>
              <p className="text-gray-400">(23 reviews)</p>
            </div>
          </div>
          <div className="flex items-center justify-between px-4 py-4">
            <div className="text-center">
              <h1 className="text-2XL font-bold text-[#FFCA28]">
                {x.footrating}
              </h1>
              <p className="text-gray-400">{x.food}</p>
            </div>
            <div className="text-center">
              <h1 className="text-2XL font-bold text-[#FFCA28]">
                {x.serviceRatting}
              </h1>
              <p className="text-gray-400">{x.service}</p>
            </div>
            <div className="text-center">
              <h1 className="text-2XL font-bold text-[#FFCA28]">
                {x.ambienceRating}
              </h1>
              <p className="text-gray-400">{x.ambience}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="card_man_fiver sm:w-full md:w-[300px] xl:w-[500px] px-4 py-4">
        <div className="">
          <h1 className="text-center font-bold primaryColor">Table Offers</h1>
          <h1 className="font-bold flex ">
            <div className="primaryBG mr-2">-45%</div>
            50% Off to the Menu Card
          </h1>
          <p className="text-gray-400 py-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
            corrupti.
          </p>
          <button className="button__1 ">
            Make a reservation with this offer
          </button>
        </div>
      </div>
      <div className="card_man_fiver sm:w-full md:w-[300px] xl:w-[500px] px-4 py-4">
        <h1 className="text-center font-bold primaryColor">User Photo</h1>
        <div className="flex flex-wrap justify-between">
          {foodMenu.map((x) => (
            <img
              key={x._id}
              className="w-[70px] mt-6 rounded"
              src={x.image}
              alt={x.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default FiverManCard;
