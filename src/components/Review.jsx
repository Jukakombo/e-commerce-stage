import React from "react";
import { MdOutlineRestaurant } from "react-icons/md";
import { AiFillAccountBook } from "react-icons/ai";
import { FaUsers, FaCity } from "react-icons/fa";
function Review() {
  return (
    <div className="bg-[#44BBA4] py-8 ">
      <div className="w-11/12 m-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-4  gap-4 ">
          <div className="flex items-center md:border-0 py-4 border-b-2 border-white">
            <div className="text-white mr-4 ">
              <MdOutlineRestaurant size={50} />
            </div>
            <div className="">
              <h1 className="text-2xl font-bold text-white">200</h1>
              <p className="text-xl font-bold text-white">Best Restaurants</p>
            </div>
          </div>
          <div className="flex items-center md:border-0 py-4 border-b-2 border-white">
            <div className="text-white mr-4 ">
              <AiFillAccountBook size={50} />
            </div>
            <div className="">
              <h1 className="text-2xl font-bold text-white">500</h1>
              <p className="text-xl font-bold text-white">Reservation</p>
            </div>
          </div>
          <div className="flex items-center md:border-0 py-4 border-b-2 border-white">
            <div className="text-white mr-4">
              <FaUsers size={50} />
            </div>
            <div className="">
              <h1 className="text-2xl font-bold text-white">1801</h1>
              <p className="text-xl font-bold text-white">Client</p>
            </div>
          </div>
          <div className="flex items-center md:border-0 py-4 border-b-2 border-white">
            <div className="text-white mr-4">
              <FaCity size={50} />
            </div>
            <div className="">
              <h1 className="text-2xl font-bold text-white">10</h1>
              <p className="text-xl font-bold text-white">Cities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
