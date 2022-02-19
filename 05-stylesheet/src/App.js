import React from "react";

//Link대신 NavLink를 import한다.
import { NavLink, Routes, Route } from "react-router-dom";

import CssClass from "./pages/CssClass";
import InlineCss from "./pages/InlineCss";
import CssModule from "./pages/CssModule";
import Scss from "./pages/Scss";
import ScssModule from "./pages/ScssModule";

import StyledComponent from "./pages/StyledComponent";

//css파일도 import해야 한다.
import "./assets/css/menu.css";

const App = () => {
  //페이지 타이틀에 적용할 ***InlineCss*** 정의
  //-->CSS는 JS 속성으로 기술해야함
  //---> 카멜표기법 사용
  //-->전체 구조는 JSON 객체 (**유의할것** 단위가 포함된 수치값의 경우 문자열로 표기, 한쌍의 속성 값 뒤에는 세미콜론(;)이 아닌 콤마(,)가 위치)

  const myStyle = {
    fontWeight: "bold",
    color: "#b82514",
    textDecoration: "none",
    marginRight: "10px",
  };

  return (
    <div>
      <h1 style={myStyle}>04-stylesheet</h1>

      {/* 만약, 변수이름이 아닌 값이 통체로 들어갈땐 중가로 두개임 **

        <h1 style={{
        fontWeight: "bold",
        color: "#b82514",
        textDecoration: "none",
        marginRight: "10px",
        }}>04-stylesheet</h1>

      */}

      <nav>
        {/* 
          NavLink 구성
          - 기본 Link컴포넌트의 기능에 className,activeClassName속성이 추가된 객체
          - className: 기본적으로 적용될 css클래스 이름
          - 현재 브라우저가 위치하는 URL과 동일한 주소를 갖는 링크에게 active 클래스가 자동으로 적용된다. 
          - active 클래스에 대한 style의 존재 유무와는 별개임
        */}

        <NavLink className="normalLink" to="/inline_class">
          InlineCss
        </NavLink>
        <NavLink className="normalLink" to="/css_class">
          CssClass
        </NavLink>
        <NavLink className="normalLink" to="/css_module">
          CssModule
        </NavLink>
        <NavLink className="normalLink" to="/scss">
          Scss
        </NavLink>
        <NavLink className="normalLink" to="/scss_module">
          ScssModule
        </NavLink>
        <NavLink className="normalLink" to="/styled_component">
          StyledComponent
        </NavLink>
      </nav>

      {/* 라우터 연결하기 */}
      <Routes>
        <Route path="/inline_class" element={<InlineCss />} />
        <Route path="/css_class" element={<CssClass />} />
        <Route path="/css_module" element={<CssModule />} />
        <Route path="/scss" element={<Scss />} />
        <Route path="/scss_module" element={<ScssModule />} />
        <Route path="/styled_component" element={<StyledComponent />} />
      </Routes>
    </div>
  );
};

export default App;
