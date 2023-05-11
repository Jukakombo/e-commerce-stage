import React from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";
import Notification from "../Notification";

function Admin() {
  return (
    <div>
      <Navigation />
      <div className="w-11/12 m-auto">
        <div className="">Hi how?</div>
      </div>
      <Notification />
      <Footer />
    </div>
  );
}

export default Admin;
