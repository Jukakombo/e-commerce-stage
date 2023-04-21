import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Reservation_Album from "./Reservation_Album";
import Notification from "./Notification";

function Reservation() {
  return (
    <div>
      <Navigation />
      <div className="main">
        <Reservation_Album />
      </div>
      <Notification />
      <Footer />
    </div>
  );
}

export default Reservation;
