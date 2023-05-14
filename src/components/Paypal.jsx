import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PayPalButton } from "react-paypal-button-v2";

import { Navigate, useNavigate } from "react-router-dom";
import ConfirmOrder from "./ConfirmOrder";

const Payment = ({ price }) => {
  const dispatch = useDispatch();

  const [sdkReady, setSdkReady] = useState(false);
  const [sucessfullPayment, setSucessfullPayment] = useState(false);

  const loadingPay = false;

  useEffect(() => {
    // Add PayPal Script
    const addPayPalScript = async () => {
      const clientId =
        "AYXizzVv-EkltAKiYGjxgrh7rQ9arjXFAzX6rWj600XJAhye4iqZsYNA4Mm-YqAFqQLuhiOKP4BWD0tK";
      // Fetch the client Id from the back end-> server.js
      const script = document.createElement("script"); // Vanilla JavaScript
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      // https://developer.paypal.com/docs/checkout/reference/customize-sdk/ Query parameters
      script.async = true;
      script.onload = () => {
        setSdkReady(true); // Tell us the script has been loaded
      };
      document.body.appendChild(script); // Dynamically adding the PayPal script
    };
    // addPayPalScript() END
    if (!window.paypal) {
      // Checking if Not Paid and Not window.paypal
      addPayPalScript();
    } else {
      setSdkReady(true);
    }
  }, [dispatch]);
  // useEffect END

  const successPaymentHandler = async (paymentResult) => {
    // This paymentResult is coming from PayPal response after payment success to PayPal Account
    // console.log(paymentResult);
    <Navigate to="/confirm" />;

    setSucessfullPayment(paymentResult);
  };

  return (
    <div className="w-[100%] m-auto">
      {sucessfullPayment ? (
        <ConfirmOrder />
      ) : (
        <PayPalButton
          amount={price}
          currency="USD"
          onSuccess={successPaymentHandler}
        />
      )}
    </div>
  );
};

export default Payment;
