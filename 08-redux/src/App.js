import React from "react";
import styled from "styled-components";
import { NavLink, Routes, Route } from "react-router-dom";

import ReduxToolkitCounter from "./pages/ReduxToolkitCounter";
import ReduxToolkitDepartment from "./pages/ReduxToolkitDepartment";

/* 메뉴링크 -> 06.hook-event 예제의 App.js파일의 내용과 동일*/

function App() {
  return (
    <div>
      <h1>Redux Toolkit</h1>

      <NavLink to="/redux_toolkit_counter">ReduxToolkitCounter</NavLink>
      <NavLink to="/redux_toolkit_department">ReduxToolkitDepartment</NavLink>
      <hr />
      <Routes>
        <Route
          path="/redux_toolkit_counter"
          element={<ReduxToolkitCounter />}
        />
        <Route
          path="/redux_toolkit_department"
          element={<ReduxToolkitDepartment />}
        />
      </Routes>
    </div>
  );
}

export default App;
