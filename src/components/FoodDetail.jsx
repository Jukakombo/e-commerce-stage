import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { foodMenu } from "./data";
import register from "../assets/register (2).png";
import { Link, useParams } from "react-router-dom";
function FoodDetail() {
  const params = useParams();
  const { id } = params;
  const food = foodMenu.find((x) => x._id === id);
  console.log(food);
  return (
    <div>
      <Navigation />
      <div className="w-11/12 m-auto grid md:grid-cols-2 py-16">
        <div className=" w-full px-4 mb-8 lg:mb-0">
          <img src={food?.image} alt={food?.name} className="w-full rounded" />
        </div>
        <div className=" ">
          <h1 className="text-2xl font-bold mb-4">{food?.name}</h1>
          <p className="font-bold ">Description:</p>
          <p className="text-lg mb-4">{food?.description}</p>
          <p className="text-lg font-bold mb-4">Price: {food?.price}</p>
          <Link to="/checkout">
            <button
              className="primary_button hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              // disabled={!food?.inStock}
            >
              {food?.inStock ? "Add to Cart" : "Order Now"}
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FoodDetail;
