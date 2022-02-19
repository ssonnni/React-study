import React from "react";

// 외부 css파일 참조 --> 참조변수 이름을 지정하지 않는다.
import "../assets/css/mystyle.css";

// CSS 클래스이름이 외부에 노출되기 쉬운 방법이기도함

/* 외부 CSS파일을 참조하는 컴포넌트 */
const CssClass = () => {
  return (
    <div>
      <h2>CssClass</h2>

      <div className="my-css-box"></div>
    </div>
  );
};

export default CssClass;
