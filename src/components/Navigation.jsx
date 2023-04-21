import React, { useState } from "react";
import { RiRestaurant2Fill } from "react-icons/ri";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import home from "../assets/icons/house.png";
import restau from "../assets/icons/food.png";
import fastfood from "../assets/icons/fast-food.png";
import aboutus from "../assets/icons/group.png";
import help from "../assets/icons/help.png";
import login from "../assets/icons/setting.png";
import setting from "../assets/icons/setting.png";
import signup from "../assets/icons/user.png";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navlinks = [
    {
      name: "Home",
      id: "012",
    },
    {
      name: "Restaurants",
      id: "0342",
    },
    {
      name: "Foods",
      id: "0DFS12",
    },
    {
      name: "About Us",
      id: "0EF12",
    },
    {
      name: "Help",
      id: "00012",
    },
  ];
  const mobileNavs = [
    {
      name: "Home",
      id: "012",
      icon: home,
    },
    {
      name: "Restaurants",
      icon: restau,
      id: "0342",
    },
    {
      name: "Foods",
      icon: fastfood,
      id: "0DFS12",
    },
    {
      name: "About Us",
      icon: aboutus,
      id: "0EF12",
    },
    {
      name: "Help",
      icon: help,
      id: "00012",
    },
    {
      name: "Login",
      icon: login,
      id: "0001xss2",
    },
    {
      name: "Sign Up",
      icon: signup,
      id: "0001sskl2",
    },
    {
      name: "Setting",
      icon: setting,
      id: "0001sskl2",
    },
  ];

  const openMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className="navigation">
      <div className="mobile_views md:flex justify-between items-center w-11/12 m-auto  ">
        <div className="">
          <RiRestaurant2Fill size={50} color={"#44bba4"} />
        </div>
        <div className="text_navigation md:flex hidden">
          {navlinks.map((x) => (
            <ul key={x.id} className="list-style-none">
              <li className="md:m-2 md:py-4  xl:m-4 text-xl">{x.name} </li>
            </ul>
          ))}
        </div>
        <div className="text_navigation button_on_medium ">
          <button className="md:m-4 text-[#44bba4]">Login</button>
          <button className="primary_button">Sign Up</button>
        </div>
        <div className="md:hidden" onClick={openMenu}>
          {isOpen ? (
            <AiOutlineClose size={40} className="text-[#44bba4]" />
          ) : (
            <BiMenuAltRight size={40} className="text-[#44bba4]" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="mobile_navigation md:hidden w-11/12 m-auto text_navigation h-[100vh]  py-2">
          {mobileNavs.map((x) => (
            <ul key={x.id} className="list-style-none">
              {/* {icon} */}
              <li
                className="md:m-4 text-xl my-4  hover:bg-[#7aa59d] cursor-pointer rounded-[15px] py-2 hover:text-white px-2 flex items-center "
                onClick={closeMenu}
              >
                <img src={x.icon} alt="icon" className="w-[40px] mr-4" />
                {x.name}
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navigation;
