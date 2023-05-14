import React from "react";
import { CgTag } from "react-icons/cg";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { foodMenu } from "./data";
import { Link } from "react-router-dom";
import GoogleMapapi from "./GoogleMapapi";
import TimeTable from "./TimeTable";
import ExtraServices from "./ExtraServices";
function FiverManDetail() {
  return (
    <div>
      <h1 className="font-bold text-2xl"> The Fiver Freshemen</h1>
      <p className="text-gray-400">Address: Gudele 2, Juba South Sudan</p>
      <div className="flex items-center ">
        <div className="flex items-center mr-8 text-[#44BBA4]">
          {" "}
          <CgTag /> <p className="ml-2">Fish Restaurant</p>
        </div>
        <div className="flex items-center  text-[red] pt-2">
          {" "}
          <AiOutlineInfoCircle /> <p className="ml-2">Closed for Holiday</p>
        </div>
      </div>
      <div className="">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          aliquam ratione ab delectus suscipit? Architecto non dignissimos
          possimus temporibus cupiditate, atque eum quo consectetur quis rerum
          accusamus quidem quas illum distinctio repellendus sequi iste
          provident blanditiis labore commodi libero nobis .
        </p>
        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error fugiat
          modi illo hic praesentium excepturi, voluptates laudantium aliquid
          architecto incidunt debitis harum voluptas veritatis ducimus pariatur
          dolor recusandae? Cum, rerum.
        </p>
      </div>
      {/* our menu */}
      <div className="my-4">
        <h1 className="font-bold ">Our Menu</h1>
        <p className="flex items-center text-gray-400">
          <div className="primaryBG mr-2 p-1">
            <FaRegMoneyBillAlt className="text-white" />
          </div>{" "}
          Average price 50000 SSP
        </p>
        <div className="overflow-y-scroll h-[100px] ">
          {foodMenu.map((x) => (
            <>
              <div className="flex items-center   " key={x._id}>
                <h1 className=" ">{x.name}</h1>
                ................................................................................................................................................
                <h1>{x.price}</h1>
              </div>
            </>
          ))}
        </div>
        <div className="text-center py-4">
          <Link to={"/Food"}>
            <button className="button__1 ">View All</button>
          </Link>
        </div>
        <div className="">
          <h1 className=" font-bold text text_navigation">
            Location & Hours of work
          </h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2 ">
            <div className="rounded card_man_fiver p-4 ">
              <GoogleMapapi />
            </div>
            <TimeTable />
          </div>
          <ExtraServices />
        </div>
      </div>
    </div>
  );
}

export default FiverManDetail;
