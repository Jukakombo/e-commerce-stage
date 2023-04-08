import React from "react";
import { populaerData } from "./data";
import Card from "./Card";
import { Link } from "react-router-dom";
function PopularRestaurant() {
  return (
    <div className="w-11/12 m-auto  ">
      <div className="flex items-center justify-between text_navigation text-[#44bba4] ">
        <div className="py-8 font-bold">Popular Restaurants</div>
        <Link>View More</Link>
      </div>

      <Card data={populaerData} />
    </div>
  );
}

export default PopularRestaurant;
