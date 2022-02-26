import React from "react";
import styled from "styled-components";
import { NavLink, Routes, Route } from "react-router-dom";

import ReduxToolkitCounter from "./pages/ReduxToolkitCounter";
import ReduxToolkitDepartment from "./pages/ReduxToolkitDepartment";

/* 메뉴링크 -> 06.hook-event 예제의 App.js파일의 내용과 동일*/
const MenuLink = styled(NavLink)`
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  padding-bottom: 2px;
  color: #222;

  /* CSS의 가상클래스 hover */
  &:hover {
    color: #22b8cf;
  }

  &:after {
    content: "|";
    display: inline-block;
    padding: 0 7px;
    color: #ccc;
  }

  &:last-child {
    &:after {
      /* 글자색을 흰색으로 지정하여 화면에서 숨긴다. */
      color: #fff;
    }
  }

  /*
        URL이 현재 메뉴를 가르키는 경우 (콜론이 아닌 점에 주의)
        활성 메뉴에 적용되는 기본 클래스 이름이 'active'이다. 
    */
  &.active {
    text-decoration: underline;
    color: #22b8cf;

    &:after {
      /* 흰색 선을 추가하여 .active에서 지정한 border를 덮을 수 있도록 지정한다.(가림효과) */
      border-bottom: 4px solid #fff !important;
    }
  }
`;

const App = () => {
  return (
    <div>
      <h1>Redux Toolkit</h1>

      <MenuLink to="/redux_toolkit_counter">ReduxToolkitCounter</MenuLink>
      <MenuLink to="/redux_toolkit_department">ReduxToolkitDepartment</MenuLink>
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
};

export default App;
