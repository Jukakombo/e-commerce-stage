import React from "react";
import confirm from "../assets/orderconfirm.png";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Notification from "./Notification";
function ConfirmOrder() {
  return (
    <div>
      <Navigation />
      <div className="w-11/12 grid md:grid-cols-2 m-auto">
        <img src={confirm} alt="orderConfirm" />
        <p className="text-3xl text_navigation text-[#44BBA4] py-16">
          We're thrilled to let you know that your order has been successfully
          confirmed! Your satisfaction is our top priority, and we'll do
          everything we can to make sure you're completely satisfied with your
          purchase.
        </p>
      </div>
      <Notification />
      <Footer />
    </div>
  );
}

export default ConfirmOrder;
