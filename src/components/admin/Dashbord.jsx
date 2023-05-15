import React from "react";
import { GiFoodTruck } from "react-icons/gi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiRestaurant } from "react-icons/bi";
import { useSelector } from "react-redux";
function Dashboard() {
  const foodMenu = useSelector((state) => state.news);
  const client = useSelector((state) => state.contacts);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Welcome to your restaurant dashboard!
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="card_man_fiver p-4 flex items-center flex-col">
          <GiFoodTruck size={100} color="#44BBA4" />
          <h1 className="font-bold text-2xl">{foodMenu.length} +</h1>
        </div>
        <div className="card_man_fiver p-4 flex items-center flex-col">
          <AiOutlineUsergroupAdd size={100} color="#44BBA4" />
          <h1 className="font-bold text-2xl">{client.length} +</h1>
        </div>
        <div className="card_man_fiver p-4 flex items-center flex-col">
          <BiRestaurant size={100} color="#44BBA4" />
          <h1 className="font-bold text-2xl">10 +</h1>
        </div>
      </div>
      <div className="card_man_fiver p-4  ">
        <h1 className="font-bold text-xl">
          All the rest can be done in the future
        </h1>
      </div>
    </div>
  );
}

export default Dashboard;
