import React from "react";
import { Link } from "react-router-dom";
function ConfirmOrder() {
  return (
    <div>
      <div className=" ">
        {/* <img src={confirm} alt="orderConfirm" /> */}
        <p className="text-3xl text_navigation text-[#44BBA4] py-16">
          We're thrilled to let you know that your order has been successfully
          confirmed! Your satisfaction is our top priority, and we'll do
          everything we can to make sure you're completely satisfied with your
          purchase.
        </p>
        <Link to="/">
          <button className="primary_button">Exit</button>
        </Link>
      </div>
    </div>
  );
}

export default ConfirmOrder;
