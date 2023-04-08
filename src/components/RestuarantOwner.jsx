import React from "react";
import { Link } from "react-router-dom";
import order from "../assets/order.svg";
function RestuarantOwner() {
  return (
    <div className="bg-white w-11/12 m-auto md:p-16">
      <h1 className="py-8 text-[#44bba4]  text-2xl md:text-4xl font-bold text-center">
        Are a restaurant owner?
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 shawdow_around  p-4 md:p-8">
        <div className="">
          <img src={order} alt="hello" />
        </div>
        <div className="">
          <div className="">
            <h1 className="text-2xl font-bold">Register Now</h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              alias reiciendis in!
            </p>
            <Link to={"/register"}>
              <button className="secondary_button text-xl my-2">
                Register
              </button>
            </Link>
          </div>
          <div className="">
            <h1 className="text-2xl font-bold">Login</h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              alias reiciendis in!
            </p>
            <Link to={"/register"}>
              <button className="secondary_button text-xl my-2">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestuarantOwner;
