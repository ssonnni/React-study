import React from "react";
import styled from "styled-components";
import { NavLink, Route, Routes } from "react-router-dom";

import Mystate from "./pages/MyState";
import DateRange1 from "./pages/DateRange1";
import MyEffect from "./pages/MyEffect";
import MyReducer from "./pages/MyReducer";
import DateRange2 from "./pages/DateRange2";
import MyMemo from "./pages/MyMemo";
import MyCallback from "./pages/MyCallback";
import MyRef from "./pages/MyRef";
import MyWidth from "./pages/MyWidth";

/** 메뉴링크 --> NavLink: 현재 머물고 있는 페이지와 관련된 링크에 CSS적용 */
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

function App() {
  return (
    <div>
      <h1>06-hook-event</h1>

      <nav>
        <MenuLink to="/mystate">[Mystate]</MenuLink>
        <MenuLink to="/daterange1">[DateRange1]</MenuLink>
        <MenuLink to="/myeffect">[MyEffect]</MenuLink>
        <MenuLink to="/myreducer">[MyReducer]</MenuLink>
        <MenuLink to="/daterange2">[DateRange2]</MenuLink>
        <MenuLink to="/mymemo">[MyMemo]</MenuLink>
        <MenuLink to="/mycallback">[MyCallback]</MenuLink>
        <MenuLink to="/myref">[MyRef]</MenuLink>
        <MenuLink to="/mywidth">[MyWidth]</MenuLink>
      </nav>
      <hr />

      <Routes>
        <Route path="/mystate" element={<Mystate />} />
        <Route path="/daterange1" element={<DateRange1 />} />
        <Route path="/myeffect" element={<MyEffect />} />
        <Route path="/myreducer" element={<MyReducer />} />
        <Route path="/daterange2" element={<DateRange2 />} />
        <Route path="/mymemo" element={<MyMemo />} />
        <Route path="/mycallback" element={<MyCallback />} />
        <Route path="/myref" element={<MyRef />} />
        <Route path="/mywidth" element={<MyWidth />} />
      </Routes>
    </div>
  );
}

export default App;
