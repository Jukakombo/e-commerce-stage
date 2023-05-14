import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import register from "../assets/register (1).png";
import { Link, useNavigate } from "react-router-dom";
import Notification from "./Notification";
import { signup } from "../actions/user";
import { useDispatch } from "react-redux";
import { useState } from "react";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function Register() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(formData, navigate));
  };
  return (
    <div>
      <Navigation />
      <div className="w-11/12 m-auto grid md:grid-cols-2 py-16">
        <div className="">
          <h1 className="py-8 text_navigation text-[#44BBA4] uppercase">
            Create an Account
          </h1>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2">
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    firstName: e.target.value,
                  })
                }
                required
                id=""
                placeholder="First Name"
                className="outline-none border-2 border-gray-100 my-2 p-2"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    lastName: e.target.value,
                  })
                }
                required
                id=""
                placeholder="Last Name"
                className="outline-none border-2 border-gray-100 my-2 p-2"
              />
            </div>
            <input
              type="text"
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
      <Notification />
      <Footer />
    </div>
  );
}

export default Register;
