import React from "react";

function TimeTable() {
  return (
    <div>
      <div className="px-4">
        <h1 className="font-bold text_navigation px-4 pt-4 pb-2">
          Malakia Juma, South Sudan
        </h1>
        <p className="primaryColor border-t-2 border-b-2 border-gray-400  px-4 ">
          www.relaxrestaurant.com
        </p>
        <p className="px-4 py-2">Contact@relaxrestaurant.com</p>
        <p className="px-4 border-t-2 border-b-2 border-gray-400">
          +212698487054
        </p>
        <div className="">
          <h1 className="text_navigation text-center font-bold py-2">
            Today 9:00AM -23:00PM
          </h1>
          <div className="card_man_fiver p-4">
            <div className="flex justify-between">
              <div className="weeks">
                <ul>
                  <li className="text-lg ">Sunday</li>
                  <li className="text-lg ">Monday</li>
                  <li className="text-lg ">Tuesday</li>
                  <li className="text-lg ">Wednesday</li>
                  <li className="text-lg ">Thursday</li>
                  <li className="text-lg ">Friday </li>
                  <li className="text-lg ">Saturday</li>
                </ul>
              </div>
              <div className="hours">
                <ul>
                  <li className="text-lg "> 9:00AM - 23:00PM</li>
                  <li className="text-lg "> 9:00AM - 23:00PM</li>
                  <li className="text-lg "> 9:00AM - 23:00PM</li>
                  <li className="text-lg "> 9:00AM - 23:00PM</li>
                  <li className="text-lg "> 9:00AM - 23:00PM</li>
                  <li className="text-lg "> Closed</li>
                  <li className="text-lg "> 9:00AM - 23:00PM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeTable;
