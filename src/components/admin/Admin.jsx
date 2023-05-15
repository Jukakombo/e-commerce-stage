import Navigation from "../Navigation";
import Footer from "../Footer";
import Notification from "../Notification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoDashboard } from "react-icons/go";
import { BsMenuApp } from "react-icons/bs";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { BiRestaurant } from "react-icons/bi";
import { Link, Navigate, Outlet } from "react-router-dom";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { MdOutlineCreate } from "react-icons/md";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function Admin({ user, setUser }) {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    <Navigate to="/" />;
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    // jwt for manual
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  return (
    <>
      <Navigation />
      <div className="flex h-screen border-t-2 border-black-900">
        {/* Sidebar */}
        <div className="bg-gray-800 text-white w-64 flex-shrink-0">
          <div className="p-4">
            <FontAwesomeIcon icon={faUtensils} size="2x" />
            <h2 className="text-2xl font-bold mt-4">Viola's Restaurant</h2>
          </div>
          <nav className="text-white text-base font-semibold pt-3">
            <Link
              to="dashboard"
              className="flex items-center px-4 py-2 bg-gray-900"
            >
              <span className="mr-2">
                <GoDashboard />
              </span>
              Dashboard
            </Link>
            <Link to="menu">
              <a
                href="#"
                className="flex items-center px-4 py-2 hover:bg-gray-700"
              >
                <span className="mr-2">
                  <BsMenuApp />
                </span>
                Menu
              </a>
            </Link>
            <Link to="orders">
              <a
                href="#"
                className="flex items-center px-4 py-2 hover:bg-gray-700"
              >
                <span className="mr-2">
                  <FontAwesomeIcon icon={faUtensils} />
                </span>
                Orders
              </a>
            </Link>
            <Link
              to="create-menu"
              className="flex items-center px-4 py-2 hover:bg-gray-700"
            >
              <span className="mr-2">
                <MdOutlineCreate />
              </span>
              Create Menu
            </Link>
            <Link
              to="reservations"
              className="flex items-center px-4 py-2 hover:bg-gray-700"
            >
              <span className="mr-2">
                <BsFillTicketPerforatedFill />
              </span>
              Reservations
            </Link>
            <Link
              to={"restaurant"}
              className="flex items-center px-4 py-2 hover:bg-gray-700"
            >
              <span className="mr-2">
                <BiRestaurant />
              </span>
              Restaurants
            </Link>
          </nav>
        </div>
        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-gray-100">
          <div className="py-4 px-6 bg-white flex justify-between items-center border-b-4 border-gray-300">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center">
              <h1>
                Hi {user?.result?.name}{" "}
                {user && (
                  <button onClick={logout} className="primary_button">
                    Logout
                  </button>
                )}
              </h1>
              <button className="mr-4"></button>
            </div>
          </div>

          <div className="flex-1 p-6">
            <Outlet />
          </div>
        </div>
      </div>

      <Notification />
      <Footer />
    </>
  );
}

export default Admin;
