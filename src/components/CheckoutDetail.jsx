import React from "react";
import { CheckoutForm } from "./CheckOut";
import check from "../assets/checkout.png";
import Footer from "./Footer";
import Navigation from "./Navigation";
import PaymentScreen from "./PaymentScreen";
import Notification from "./Notification";
function CheckoutDetail() {
  return (
    <div>
      <Navigation />
      <div className="grid md:grid-cols-2">
        <CheckoutForm />
        <div className="">
          <img src={check} alt="checkout" />
        </div>
      </div>
      <Notification />
      <Footer />
    </div>
  );
}

export default CheckoutDetail;
