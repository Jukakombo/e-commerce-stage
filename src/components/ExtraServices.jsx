import React from "react";
import Comment from "./Comment";

function ExtraServices() {
  return (
    <div>
      <h1 className="font-bold py-4">Extra Services</h1>{" "}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { name: "Home Delivery" },
          { name: "High-Wifi-Quality" },
          { name: "Pre-Order" },
        ].map((x) => (
          <p className="card_man_fiver w-[200px] p-4 text-center cursor-pointer">
            {x.name}
          </p>
        ))}
      </div>
      <Comment />
    </div>
  );
}

export default ExtraServices;
