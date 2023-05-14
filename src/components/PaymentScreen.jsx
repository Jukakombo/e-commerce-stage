import React from "react";
import Payment from "./Paypal";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Notification from "./Notification";

const PaymentScreen = () => {
  // const navigate = useNavigate();
  const customer = localStorage.getItem("customerDetails");
  const customerStorage = JSON.parse(customer);

  return (
    <>
      <Navigation />

      <div className="w-11/12 m-auto grid md:grid-cols-2 my-8 gap-4">
        <div className="bg-white shadow-md rounded-md p-4 mb-4">
          <h2 className="text-xl font-medium mb-4">Order Summary</h2>
          {/* {items.map((item) => ( */}
          <div className="flex justify-between items-center mb-2">
            <div className="font-medium">Food Ordered:</div>
            <div className="font-medium">{customerStorage.order}</div>
          </div>
          {/* ))} */}
          <hr className="my-2" />
          <div className="flex justify-between items-center mb-2">
            <div>Subtotal Address:</div>
            <div>{customerStorage.price}</div>
          </div>
          <div className="flex justify-between items-center mb-2">
            <div>Full Name:</div>
            <div>{customerStorage.name}</div>
          </div>
          <div className="flex justify-between items-center mb-2">
            <div>Email:</div>
            <div>{customerStorage.email}</div>
          </div>
          <div className="flex justify-between items-center mb-2">
            <div>Phone:</div>
            <div>{customerStorage.phone}</div>
          </div>
          <div className="flex justify-between items-center mb-2">
            <div>Shipping:</div>
            <div>{customerStorage.address}</div>
          </div>
          <div className="flex justify-between items-center mb-2">
            <div>Tax:</div>
            <div>0</div>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between items-center mb-2">
            <div>Total:</div>
            <div>{customerStorage.price}$</div>
          </div>
        </div>
        {customerStorage && <Payment price={customerStorage.price} />}
      </div>
      <Notification />
      <Footer />
    </>
  );
};

export default PaymentScreen;
