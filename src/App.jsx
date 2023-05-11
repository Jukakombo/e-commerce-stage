import React from "react";
import Index from "./components/Index";
import { Route, Routes } from "react-router-dom";
import Reservation from "./components/Reservation";
import Menu from "./components/Menu";
import Login from "./components/Login";
import Register from "./components/Register";
import FoodDetail from "./components/FoodDetail";
import About from "./components/About";
import CheckoutDetail from "./components/CheckoutDetail";
import PaymentScreen from "./components/PaymentScreen";
import ConfirmOrder from "./components/ConfirmOrder";
import Admin from "./components/admin/Admin";
import Help from "./components/Help";

function App() {
  return (
    <div className="max-w-screen-2xl m-auto">
      <Routes>
        <Route path="/" exact element={<Index />} />
        <Route path="/Home" element={<Index />} />
        <Route path="/Restaurants" exact element={<Reservation />} />
        <Route path="/Foods" exact element={<Menu />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/food-detail/:id" exact element={<FoodDetail />} />
        <Route path="/about Us" exact element={<About />} />
        <Route path="/checkout" exact element={<CheckoutDetail />} />
        <Route path="/payment" exact element={<PaymentScreen />} />
        <Route path="/confirm" exact element={<ConfirmOrder />} />
        <Route path="/admin" exact element={<Admin />} />
        <Route path="/Help" exact element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
