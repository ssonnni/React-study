import React from "react";
import { Routes, Route } from "react-router-dom";

import Meta from "./components/Meta";
import Top from "./components/Top";

import BlogPage from "./pages/BlogPage";
import BookPage from "./pages/BookPage";
import CafePage from "./pages/CafePage";
import ImagePage from "./pages/ImagePage";
import WebPage from "./pages/WebPage";
import style from "./assets/scss/style.module.scss";

const App = () => {
  return (
    <div className={style.container}>
      <Meta />
      <Top />

      <Routes>
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/cafe" element={<CafePage />} />
        <Route path="/image" element={<ImagePage />} />
        <Route path="/web" element={<WebPage />} />
      </Routes>
    </div>
  );
};

export default App;
