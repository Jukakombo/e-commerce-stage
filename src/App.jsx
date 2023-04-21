import React from "react";
import Index from "./components/Index";
import { Route, Routes } from "react-router-dom";
import Reservation from "./components/Reservation";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="max-w-screen-2xl m-auto">
      <Routes>
        <Route path="/" exact element={<Index />} />
        <Route path="/reservation" exact element={<Reservation />} />
        <Route path="/menu" exact element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
