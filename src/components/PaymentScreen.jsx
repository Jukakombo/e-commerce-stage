import React from "react";
import Payment from "./Paypal";
import Navigation from "./Navigation";
import Footer from "./Footer";

const PaymentScreen = () => {
  return (
    <>
      <Navigation />

      <div className="w-11/12 m-auto grid md:grid-cols-2 my-8 gap-4">
        <div className="bg-white shadow-md rounded-md p-4 mb-4">
          <h2 className="text-xl font-medium mb-4">Order Summary</h2>
          {/* {items.map((item) => ( */}
          <div className="flex justify-between items-center mb-2">
            <div className="font-medium">Food Ordered: Kabab</div>
            <div className="font-medium">50</div>
          </div>
          {/* ))} */}
          <hr className="my-2" />
          <div className="flex justify-between items-center mb-2">
            <div>Subtotal:</div>
            <div>500</div>
          </div>
          <div className="flex justify-between items-center mb-2">
            <div>Shipping:</div>
            <div>Juba Town</div>
          </div>
          <div className="flex justify-between items-center mb-2">
            <div>Tax:</div>
            <div>5</div>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between items-center mb-2">
            <div>Total:</div>
            <div>50</div>
          </div>
        </div>
        <Payment />
      </div>
      <Footer />
    </>
  );
};

export default PaymentScreen;
