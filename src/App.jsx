import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Bitcoin from "./pages/Bitcoin/Bitcoin";
import Ethereum from "./pages/Ethereum/Ethereum";
import Tether from "./pages/Tether/Tether";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Bitcoin" element={<Bitcoin />} />
        <Route path="/Ethereum" element={<Ethereum />} />
        <Route path="/Tether" element={<Tether />} />
        {/* <Route path="/Tether" element={<Tether />} /> */}
      </Routes>
    </div>
  );
};

export default App;
