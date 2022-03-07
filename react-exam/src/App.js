import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import qs from "qs";

import Meta from "./components/Meta";
import Top from "./components/Top";

import BookPage from "./pages/BookPage";

import style from "./assets/scss/style.module.scss";

const App = () => {
  //Top.js에서 클릭된 링크에 의해 전달되는 QueryString을 추출
  const { search } = useLocation();

  //추출된 QueryString을 JSON객체로 파싱하고 key가 query인 값만 추출
  const { query } = qs.parse(search, { ignoreQueryPrefix: true });

  return (
    <div className={style.container}>
      <Meta />
      <Top />

      <Routes>
        {/* page컴포넌트에 메뉴를 통해 전달된 query값을 page에 전달 */}
        <Route path="/book" element={<BookPage query={query} />} />
      </Routes>
    </div>
  );
};

export default App;
