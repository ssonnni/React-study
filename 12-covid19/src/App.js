import React from "react";
import { Routes, Route } from "react-router-dom";

import Meta from "./components/Meta";
import Top from "./components/Top";

import KoreaStatePage from "./pages/KoreaStatePage";
import SidoStatePage from "./pages/SidoStatePage";
import style from "./assets/scss/style.module.scss";

const App = () => {
  return (
    <div className={style.container}>
      <Meta />
      <Top />

      <Routes basename={"/demo/react-kakao-search"}>
        {/* page 컴포넌트에 메뉴를 통해 전달된 query값을 page에 전달한다. */}
        <Route path="/korea_state" element={<KoreaStatePage />} />
        <Route path="/sido_state" element={<SidoStatePage />} />
      </Routes>
    </div>
  );
};

export default App;
