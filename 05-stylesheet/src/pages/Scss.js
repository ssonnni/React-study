import React from "react";

/** scss파일 참조하기 --> 참조변수 사용 안함 */
import "../assets/scss/style.scss";

// scss 사용하는 컴포넌트
// 패키지 설치 필요 -> yarn add node-sass

const Scss = () => {
  return (
    <div>
      <h2>Scss</h2>
      <div class="myScss">
        <div class="myScssBox red"></div>
        <div class="yScssBox green"></div>
        <div class="myScssBox blue"></div>
        <div class="myScssBox orange"></div>
        <div class="myScssBox yellow"></div>
        <div class="myScssBox pink"></div>
      </div>
    </div>
  );
};

export default Scss;
