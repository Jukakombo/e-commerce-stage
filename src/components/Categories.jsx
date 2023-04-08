import React from "react";
import { category } from "./data";
function Categories() {
  return (
    <div className="w-11/12 m-auto">
      <h1 className="py-8">Category</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-5 gap-4">
        {category.map((x) => (
          <div className="category h-[200px] p-8" key={x._id}>
            <img src={x.image} alt="categry" className="w-[100px] m-auto" />
            <h1 className="tex-xl text-center py-4 font-bold">{x.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
