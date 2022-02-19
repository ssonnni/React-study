import React from "react";

import { Link, Routes, Route } from "react-router-dom";

import MyChildren from "./pages/MyChildren";
import MyProps from "./pages/MyProps";
import MyPropTypes from "./pages/MyPropTypes";

function App() {
  return (
    <div>
      <h1>05-props</h1>

      <nav>
        <Link to="/mychildren">[MyChildren]</Link>
        <Link to="/myprops">[MyProps]</Link>
        <Link to="/myproptypes">[MyPropTypes]</Link>
      </nav>

      <Routes>
        <Route path="/mychildren" element={<MyChildren />} />
        <Route path="/myprops" element={<MyProps />} />
        <Route path="/myproptypes" element={<MyPropTypes />} />
      </Routes>
    </div>
  );
}

export default App;
