import React from "react";
import { foodMenu } from "./data";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Notification from "./Notification";

function Menu() {
  return (
    <>
      <Navigation />

      <div className="max__width">
        <h1 className="font-bold text-xl text-cenetr text-[#44BBA4]  ">
          Our Menu
        </h1>
        <div className=" grid sm:grid-cols-1 md:grid-cols-5 gap-4">
          {foodMenu.map((x) => (
            <div className="card_man_fiver p-4 flex items-center" key={x._id}>
              <img src={x.image} alt="" className="w-[80px] rounded mr-4" />
              <div className="">
                <h1>{x.name}</h1>
                <p className="text-[#44BBA4]">Price:{x.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Notification />
      <Footer />
    </>
  );
}

export default Menu;
