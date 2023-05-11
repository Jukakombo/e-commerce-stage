import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import register from "../assets/register (1).png";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div>
      <Navigation />
      <div className="w-11/12 m-auto grid md:grid-cols-2 py-16">
        <div className="">
          <h1 className="py-8 text_navigation text-[#44BBA4] uppercase">
            Create an Account
          </h1>
          <form className="flex flex-col">
            <div className="grid md:grid-cols-2">
              <input
                type="text"
                name=""
                id=""
                placeholder="First Name"
                className="outline-none border-2 border-gray-100 my-2 p-2"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Last Name"
                className="outline-none border-2 border-gray-100 my-2 p-2"
              />
            </div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              className="outline-none border-2 border-gray-100 my-2 p-2"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password"
              className="outline-none border-2 border-gray-100 my-2 p-2"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Confirm Password"
              className="outline-none border-2 border-gray-100 my-2 p-2"
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                name=""
                id="check"
                className="outline-none border-2 border-gray-100 my-2 p-2 mr-2"
              />
              <label htmlFor="check">
                I agreed that the above given information is correct and true
                about me
              </label>
            </div>
            <button className="button__1">Create Account</button>
          </form>
          <p>
            Have an account?{" "}
            <Link to="/login" className="text-[#44BBA4]">
              Login
            </Link>
          </p>
        </div>
        <div className="">
          <img src={register} alt="register" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
