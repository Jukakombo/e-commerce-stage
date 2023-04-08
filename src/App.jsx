import React from "react";
import Index from "./components/Index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="max-w-screen-2xl m-auto">
      <Routes>
        <Route path="/" exact element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
