import React from "react";
import { useState } from "react";
// import { foodMenu } from "../data";
import { BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Menu() {
  const [query, setQuery] = useState("");
  const foodMenu = useSelector((state) => state.news);
  return (
    <div className="h-[450px] overflow-y-scroll">
      <div className="max__width">
        <h1 className="font-bold text-xl text-cenetr text-[#44BBA4]  ">
          Our Menu ({foodMenu?.length}) Available foods in the restaurant
        </h1>
        <div className="bg-white rounded card_man_fiver">
          <form action="" className="flex items-center p-4 ">
            <input
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
              type="text"
              placeholder="Search dish by name ..."
              className="flex-1 outline-none bg-white"
            />
            <BiSearch className="cursor-pointer  " />
          </form>
        </div>
        <div className=" grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          {foodMenu
            .filter((x) => x.foodName.toLowerCase().includes(query))
            .map((x) => (
              <div className="card_man_fiver p-4 flex items-center" key={x._id}>
                <Link to={`/food-detail/${x._id}`}>
                  <img src={x.image} alt="" className="w-[80px] rounded mr-4" />
                </Link>
                <Link to={`/food-detail/${x._id}`}>
                  <div className="">
                    <h1>{x.foodName}</h1>
                    <p className="text-[#44BBA4]">Price:{x.price}</p>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
