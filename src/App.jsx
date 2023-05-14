import React, { useEffect } from "react";
import Index from "./components/Index";
import { Route, Routes } from "react-router-dom";
import Reservation from "./components/Reservation";
import Login from "./components/Login";
import Menu1 from "./components/Menu";

import Register from "./components/Register";
import FoodDetail from "./components/FoodDetail";
import About from "./components/About";
import CheckoutDetail from "./components/CheckoutDetail";
import PaymentScreen from "./components/PaymentScreen";
import ConfirmOrder from "./components/ConfirmOrder";
import Admin from "./components/admin/Admin";
import Help from "./components/Help";
import Dashboard from "./components/admin/Dashbord";
import Orders from "./components/admin/Order";
import Menu from "./components/admin/Menu";
import Reservation2 from "./components/admin/Reservation";
import Restaurant from "./components/admin/Restaurant";
import CreateMenu from "./components/admin/CreateMenu";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getNews } from "./actions/news";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  const [user, setUser] = useState(true);

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  return (
    <div className="max-w-screen-2xl m-auto">
      <Routes>
        <Route path="/" exact element={<Index />} />
        <Route path="/Home" element={<Index />} />
        <Route path="/Restaurants" exact element={<Reservation />} />
        <Route path="/Foods" exact element={<Menu1 />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/food-detail/:id" exact element={<FoodDetail />} />
        <Route path="/about Us" exact element={<About />} />
        <Route path="/checkout" exact element={<CheckoutDetail />} />
        <Route path="/payment" exact element={<PaymentScreen />} />
        <Route path="/confirm" exact element={<ConfirmOrder />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="menu" element={<Menu />} />
          <Route path="orders" element={<Orders />} />
          <Route path="restaurant" element={<Restaurant />} />
          <Route path="reservations" element={<Reservation2 />} />
          <Route path="create-menu" element={<CreateMenu />} />
        </Route>

        <Route path="/Help" exact element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
