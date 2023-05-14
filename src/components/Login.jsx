import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import register from "../assets/register (2).png";
import Notification from "./Notification";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../actions/user";

const initialState = {
  email: "",
  password: "",
};

function Login() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(formData, navigate));
  };
  return (
    <div>
      <Navigation />
      <div className="w-11/12 m-auto grid md:grid-cols-2 py-16">
        <div className="">
          <h1 className="py-8 text_navigation text-[#44BBA4] uppercase">
            Login
          </h1>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              required
              id=""
              placeholder="Email"
              className="outline-none border-2 border-gray-100 my-2 p-2"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
              required
              id=""
              placeholder="Password"
              className="outline-none border-2 border-gray-100 my-2 p-2"
            />

            <button type="submit" className="button__1">
              Login
            </button>
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
      <Notification />
      <Footer />
    </div>
  );
}

export default Login;
