import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import register from "../assets/register (2).png";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <Navigation />
      <div className="w-11/12 m-auto grid md:grid-cols-2 py-16">
        <div className="">
          <h1 className="py-8 text_navigation text-[#44BBA4] uppercase">
            Login
          </h1>
          <form className="flex flex-col">
            <input
              type="email"
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

            <button className="button__1">Login</button>
          </form>
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="text-[#44BBA4]">
              Create Account
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

export default Login;
