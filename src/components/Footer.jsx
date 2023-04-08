import React from "react";
import { RiRestaurant2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-white text_navigation">
      <div className="w-11/12 m-auto grid sm:grid-cols-1 md:grid-cols-4 gap-8 py-4">
        <div className="">
          <div className="">
            <RiRestaurant2Fill size={50} color={"#44bba4"} />
          </div>
          <span className="text-gray-400 font_family_footer">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            quasi facere consectetur, maxime doloribus sint.
          </span>
          <p className="py-2">Email:alisondebest@gmail.com</p>
          <p className="py-2">Tel:0698487054</p>
        </div>

        <div className="">
          <h1 className=" font-bold py-4">Quick Links</h1>
          <Link to="/">
            <p className="py-2">Home</p>
          </Link>
          <Link to="/restaurants">
            <p className="py-2">Restaurants</p>
          </Link>
          <Link to="/foods">
            <p className="py-2">Foods</p>
          </Link>
          <Link to="/register">
            <p className="py-2">Resgister your Restaurant</p>
          </Link>
          <Link to="/create-acount">
            <p className="py-2">Create an Account</p>
          </Link>
        </div>

        <div className="">
          <h1 className=" font-bold py-4">Navigations</h1>
          <Link to="/">
            <p className="py-2">Home</p>
          </Link>
          <Link to="/about">
            <p className="py-2">About Us</p>
          </Link>
          <Link to="/terms-conditions">
            <p className="py-2">Terms & Conditions</p>
          </Link>
          <Link to="/privacy">
            <p className="py-2">Privacy Policy</p>
          </Link>
        </div>
        <div className="">
          <h1 className=" font-bold py-4">Support</h1>
          <Link to="/contact">
            <p className="py-2">Contact Us</p>
          </Link>
          <Link to="/fqa">
            <p className="py-2">FAQs</p>
          </Link>
        </div>
      </div>
      <div className="text-center w-11/12 m-auto pt-8 pb-2">
        All rights reserved by:
        <span className="text-[#44bba4]">Relax Restaurant</span> | 2023-
        {new Date().getFullYear()} &copy;
      </div>
    </div>
  );
}

export default Footer;
