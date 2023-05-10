import React, { useState } from "react";
// import { populaerData } from "./data";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { sanityClient } from "./sanityClient";
function PopularRestaurant() {
  const [prestaurant, setPrestaurant] = useState([]);
  console.log(prestaurant);
  useEffect(() => {
    const query = `*[_type=="poularRestaurants"]{
      location,rating,typeOfRestaurant,status,_createdAt,_id
     ownerOfTheRestauarant,restaurant, image{asset->{url}}
     }`;
    sanityClient
      .fetch(query)
      .then((response) => setPrestaurant(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-11/12 m-auto  ">
      <div className="flex items-center justify-between text_navigation text-[#44bba4] ">
        <div className="py-8 font-bold">Popular Restaurants</div>
        <Link>View More</Link>
      </div>

      {/* <Card data={prestaurant} /> */}
    </div>
  );
}

export default PopularRestaurant;
