import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../actions/contacts";
function Order() {
  const orders = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  return (
    <div className="overflow-y-scroll h-[450px]">
      <h1 className="text_navigation text-[#44bba4]">
        Orders Made({orders.length})
      </h1>
      {orders.map((x) => (
        <div
          key={x._id}
          className="grid md:grid-cols-3 items-center card_man_fiver p-2 rounded my-4 mr-4"
        >
          <div className="flex">
            <img className="w-[100px] rounded" src={x.image} alt="food" />
            <div className=" ml-4">
              <h1 className="font-bold ">{x.order} </h1>
              <p>Ordered By: {x.name}</p>
            </div>
          </div>
          <div className=" ml-4">
            <p>Address:{x.address}</p>
            <p>Email:{x.email}</p>
            <p>Tel:{x.phone}</p>
          </div>
          <div className=" ml-4">
            <p>Date: 13/05/2023</p>
            <p>Hours: {moment(x.createdAt).fromNow()}</p>
            <p className="text-2xl font-bold">Price:{x.price}$</p>
            <button
              className="bg-red-700 w-full py-2 text-white rounded"
              onClick={() => dispatch(deleteContact(x._id))}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Order;
