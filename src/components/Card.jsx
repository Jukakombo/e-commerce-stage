import React from "react";
import { AiFillStar, AiOutlineInfoCircle } from "react-icons/ai";
import { CgTag } from "react-icons/cg";
function Card({ data }) {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:text-sm lg:text-xl sm:text-xs">
      {data.map((x) => (
        <div key={x._id} className="card p-4">
          <img
            className=" w-[100%] h-[220px] pb-4 rounded-[15px]"
            src={x.image}
            alt="restaurant"
          />
          <h1 className="text-xl">{x.nameOfRestaurant}</h1>
          <p className="text-gray-400">{x.location}</p>
          <div className="flex items-center">
            <AiFillStar color="#F6B93B" size={20} />
            <p className="text-[#F6B93B] ml-4">{x.rates}</p>
          </div>
          <div className="flex items-center justify-between text-[#44BBa4]">
            <div className="flex items-center justify-between ">
              <CgTag size={25} />
              <h1 className="ml-2 sm:text-normal md:text-sm lg:text-xl sm:text-xs">
                {x.category}
              </h1>
              a
            </div>
            <div className="flex items-center">
              <AiOutlineInfoCircle size={20} />
              <h1 className="ml-2">{x.status}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
