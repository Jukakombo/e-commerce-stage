import React from "react";
import { BiMenuAltLeft, BiTimeFive } from "react-icons/bi";

import user from "../assets/user/ali.png";
function Comment() {
  const handle_submit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1 className="text_navigation font-bold py-4">Reviews</h1>
      <form onSubmit={handle_submit}>
        <div className="flex items-center border-2 border-gray-400 w-[120px] p-2 ">
          <BiMenuAltLeft className="mr-4" />
          <p>Sort By</p>
        </div>
        <div className="flex items-center py-4">
          <img className="w-[70px] mr-4 rounded-[50%]" src={user} alt="user" />
          <div className="">
            <h1 className="font-bold">Alison De Best</h1>
            <p className="text-gray-400">
              Wow! very fanstaic restuarant you can rely on date
            </p>
            <div className="flex items-center ">
              <BiTimeFive className="mr-4 text-green-400 " />
              <span className="text-gray-400">3 weeks ago</span>
            </div>
          </div>
        </div>
        <textarea
          className="outline-none border-2 border-gray-200 w-[100%] py-4"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Please write your reviews here ..."
        ></textarea>
        <div className="text-center py-4">
          <button className="button__1 w-[200px] ">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Comment;
