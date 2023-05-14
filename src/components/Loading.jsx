import React from "react";
import loading from "../assets/loading.svg";
function Loading1() {
  return (
    <div className="loading ">
      <img src={loading} alt="Loading" className="w-[100px]" />
      <h1>Loading...</h1>
    </div>
  );
}

export default Loading1;
