import React from "react";
import Navigation from "./Navigation";
import Homepage from "./Homepage";
import Restaurant from "./Restaurant";
import PopularRestaurant from "./PopularRestaurant";
import Categories from "./Categories";
import RestuarantInJuba from "./RestuarantInJuba";
import Review from "./Review";
import RestuarantOwner from "./RestuarantOwner";
import Notification from "./Notification";
import Footer from "./Footer";

function Index() {
  return (
    <div>
      <Navigation />
      <Homepage />
      <Restaurant />
      <PopularRestaurant />
      <Categories />
      <RestuarantInJuba />
      <Review />
      <RestuarantOwner />
      <Notification />
      <Footer />
    </div>
  );
}

export default Index;
