import React from "react";
import FiverManCard from "./FiverManCard";
import FiverManDetail from "./FiverManDetail";

function FiverFisherman() {
  return (
    <div className="max__width ">
      <div className="md:flex md:justify-between ">
        <div className="lg:w-[70%]">
          <FiverManDetail />
        </div>
        <div className=" lg:w-[30%] ">
          <FiverManCard />
        </div>
      </div>
    </div>
  );
}

export default FiverFisherman;
