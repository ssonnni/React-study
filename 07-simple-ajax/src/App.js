import React from "react";

import { Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";

import DepartmentList from "./pages/DepartmentList";
import DepartmentAdd from "./pages/DepartmentAdd";

//스타일컴포넌트 적용 메뉴링크
//--> 06-hook-event 예제의 App.js 파일의 내용과 동일
const MenuLink = styled(NavLink)`
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  padding-bottom: 2px;
  color: #222;

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
      color: #fff;
    }
  }

  &.active {
    text-decoration: underline;
    color: #22b8cf;
    &:after {
      border-bottom: 4px solid #fff !important;
    }
  }
`;

const App = () => {
  return (
    <div>
      <h1>07-Simple-Ajax</h1>

      <nav>
        <MenuLink to="/department_list">학과관리</MenuLink>
      </nav>

      <Routes>
        <Route path="/" element={<DepartmentList />} />
        <Route path="/department_list" element={<DepartmentList />} />
        <Route path="/department_add" element={<DepartmentAdd />} />
      </Routes>
    </div>
  );
};

export default App;
