import React from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const DepartmentAdd = () => {
  //"react-route-dom"에서 제공하는 hook 기능을 사용하여 페이지 이동 처리를 수행하는 객체를 반복한다.
  const navigate = useNavigate();

  //form에서 submit이벤트가 발생할 때 호출 이벤트 핸들러
  const onDepartmentSave = async (e) => {
    // 페이지 강제 이동을 차단
    e.preventDefault();

    // <form> 안에 있는 입력 요소의 값 추출
    const dname = e.currentTarget.dname.value;
    const loc = e.currentTarget.loc.value;
    console.log("학과명: %s, 위치: %s", dname, loc);

    try {
      // POST 방식으로 전송할 파라미터 정의
      await axios.post("http://localhost:3001/department", {
        dname: dname,
        loc: loc,
      });

      // 목록페이지로 이동
      navigate("/department_list");
    } catch (e) {
      console.error(e);
      alert("데이터 저장에 실패했습니다.");
    }
  };

  return (
    <div>
      <h2>학과추가</h2>

      <form onSubmit={onDepartmentSave}>
        <div>
          <label htmlFor="dname">학과명</label>
          <input type="text" name="dname" id="dname" />
        </div>

        <div>
          <label htmlFor="loc">학과위치</label>
          <input type="text" name="loc" id="loc" />
        </div>

        <button type="submit">저장하기</button>
      </form>
    </div>
  );
};

export default DepartmentAdd;
