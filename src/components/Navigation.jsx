import React, { useState } from "react";
import { RiRestaurant2Fill } from "react-icons/ri";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

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
    {
      name: "Login",
      id: "0001xss2",
    },
    {
      name: "Sign Up",
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
        <div className="mobile_navigation md:hidden w-11/12 m-auto text_navigation   py-2">
          {mobileNavs.map((x) => (
            <ul key={x.id} className="list-style-none">
              <li
                className="md:m-4 text-xl my-4  hover:bg-[#44bba4] cursor-pointer rounded-[15px] py-2 hover:text-white px-2 "
                onClick={closeMenu}
              >
                {x.name}{" "}
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navigation;
