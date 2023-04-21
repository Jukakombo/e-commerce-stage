import React, { useState } from "react";
import img from "../assets/restaurant (1).jpg";
import img1 from "../assets/y (1).jpg";
import img2 from "../assets/x (1).jpg";
import img3 from "../assets/x (2).jpg";
import img4 from "../assets/x (3).jpg";
import BookRestaurant from "./BookRestaurant";
import FiverFisherman from "./FiverFisherman";

function Reservation_Album() {
  return (
    <>
      <div className="album p-4 my-8 w-11/12 m-auto">
        <div className=" grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          <div className="">
            <img src={img} alt="restaurant" className="rounded-[15px]" />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
            <img src={img3} alt="restaurant" className="rounded-[15px]" />
            <img src={img1} alt="restaurant" className="rounded-[15px]" />
            <img src={img2} alt="restaurant" className="rounded-[15px]" />
            <img src={img4} alt="restaurant" className="rounded-[15px]" />
          </div>
        </div>
      </div>
      <BookRestaurant />
      <FiverFisherman />
      {/*  */}
    </>
  );
}

export default Reservation_Album;
