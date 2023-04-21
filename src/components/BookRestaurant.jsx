import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { FcOvertime } from "react-icons/fc";
function BookRestaurant() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex justify-center bg-white my-4 p-4 select__form rounded-full w-7/12 m-auto">
      <form onSubmit={submitHandler}>
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <FiUser />
            <select className="outline-none" name="" id="">
              <option value="Guests">Guests</option>
              <option value="Daily Customer">Daily Customer</option>
              <option value="VIP">VIP</option>
              <option value="vistor">vistor</option>
              <option value="Special Guest">Special Guest</option>
            </select>
            <div className="ml-4 flex border-2 border-gray-100 px-8 text-xl">
              <button onClick={decrease} className="">
                <AiOutlineMinus />
              </button>
              <div className="ml-4 text-[#44BBA4]">{count}</div>
              <button className="ml-4" onClick={increase}>
                <AiOutlinePlus />
              </button>
            </div>
          </div>

          <div className="border-l-2 border-gray-200 ml-2">
            <div className="flex items-center mx-2 ">
              <FcOvertime />
              <input type="date" className="outline-none text-gray-400" />
            </div>
          </div>

          <div className="">
            <div className="flex items-center mx-2 text-gray-400 border-l-2 border-gray-200">
              <BiTimeFive className="ml-2" />
              <select name="" id="" className="outline-none">
                <option value="">Time</option>
                <option value="08:30">08:30</option>
                <option value="07:00">07:00</option>
                <option value="09:00">09:00</option>
                <option value="14:00">14:00</option>
                <option value="15:30">15:30</option>
                <option value="18:00">18:00</option>
              </select>
            </div>
          </div>
          <div className="">
            <button className="button__1">Book</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BookRestaurant;
