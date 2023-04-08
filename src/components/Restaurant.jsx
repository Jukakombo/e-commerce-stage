import React from "react";
import Card from "./Card";
import { restaurant } from "./data";
function Restaurant() {
  return (
    <div className="w-11/12 m-auto py-8">
      <Card data={restaurant} />
    </div>
  );
}

export default Restaurant;
