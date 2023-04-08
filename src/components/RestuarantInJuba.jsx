import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { data } from "./data";
function RestuarantInJuba() {
  return (
    <div className="bg-white py-8 w-11/12 m-auto text_navigation">
      <div className="flex items-center justify-between">
        <h4 className="text-2xl font-bold sm:text-xs md:text-sm lg:text-xl text-[#44bba4]">
          Best Restaurants in Juba
        </h4>
        <Link className="text-[#44BBA4] font-bold" to="/restaurants">
          View More
        </Link>
      </div>
      <div className="py-8">
        <Card data={data} />
      </div>
    </div>
  );
}

export default RestuarantInJuba;
