import React from "react";
import Meta from "../components/Meta";

// About페이지를 구성하는 컴포넌트
const About = () => {
  return (
    <div>
      {/* Routea 처리를 적용 받는 페이지에서 이 컴포넌트를 중복 사용 시 App.js에서의 설정을 덮어쓰게 된다. */}
      <Meta
        title="App.js"
        description="여기는 app.js 파일입니다."
        keywords="React,About"
        url={window.location.href}
      />
      <h2>여기는 About.js 파일입니다.</h2>
    </div>
  );
};

export default About;
