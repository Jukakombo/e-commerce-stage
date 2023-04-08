import React from "react";
import home from "../assets/home.svg";
import { ImLocation2 } from "react-icons/im";
import { BiSearch } from "react-icons/bi";
import { MdOutlineLocationCity } from "react-icons/md";
function Homepage() {
  return (
    <div className="w-11/12 m-auto">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="md:py-24">
          <div className="flex items-center">
            <ImLocation2 size={15} className="text-[#44BBA4] mr-2" />
            <p className="text-[#44BBa4]">at Tongping, Juba South Sudan</p>
          </div>
          <h1 className="md:text-4xl font-bold py-4">
            Discover your Next Food
          </h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aut
            iure nobis laboriosam nihil optio sapiente consectetur minus nemo
            recusandae nam sequi fugit cupiditate excepturi est repudiandae, hic
            ratione? Tenetur!
          </p>
          <div className=" py-16 ">
            <div className="home p-4  ">
              <form
                onSubmit={{}}
                className="md:flex items-center justify-between "
              >
                <div className="">
                  <div className="flex items-center">
                    <BiSearch size={20} className="text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="outline-none sm:py-4 md:-0"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center text-gray-400 border-l-2 border-gray-200 ">
                  <div className="flex  items-center ml-2">
                    <MdOutlineLocationCity
                      size={20}
                      className="text-gray-400"
                    />
                    <select name="" id="" className="outline-none mr-2 ">
                      <option value="">...Cities</option>
                      <option value="Juba">Juba</option>
                      <option value="Wau">Wau</option>
                      <option value="Malakal">Malakal</option>
                      <option value="Yambio">Yambio</option>
                      <option value="Torit">Torit</option>
                      <option value="Jongolei">Jongolei</option>
                      <option value="Warap">Warap</option>
                      <option value="Aweil">Aweil</option>
                      <option value="Lake State">Lake State</option>
                    </select>
                  </div>
                  <button className="primary_button bg-[#44BBA4] text-white">
                    Book
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="">
          <img src={home} alt="restaurant" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
