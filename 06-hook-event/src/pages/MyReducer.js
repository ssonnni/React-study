import React from "react";

/* 
useReducer에 의해 호출될 사용자 정의 함수
--> action값이 OO일 때 state 값을 ~~해라
---> action 값의 DataType 역시 개발자가 결정할 수 있다.
    (int,string,boolean,json...)
---> state 값의 DataType 역시 개발자가 결정할 수 있다.
    (int,string,boolean,json...)
@param {int} state - 상태값(useState값과 동일)
@param {string} action - 어떤 동작인지에 대한 구분
*/

const setCounterValue = (state, action) => {
  console.log("[%o] %o", action, state);
  // action값의 상태에 따른 state값의 가공처리 분기
  switch (action) {
    case "Hello":
      return state + 1;
    case "World":
      return state - 1;
    default:
      return 0;
  }
};

const MyReducer = () => {
  /* 
    상태값(myCounter)와 상태값 갱신함수(setMyCounter)를 정의한다.
    ->setMyCounterValue:setMyCounter()가 호출됨에 따라
      간접적으로 호출될 함수
    -> 0 : myCounter에 저장될 초기값

    setMyCounter()함수에 action값을 전달하면
    React 내부적으로  setMyCounterValue()함수가 호출되며,
    상태값으로 지정된 myCounter와 'Hello':'World'가 파라미터로 전달됨
    */
  const [myCounter, setMyCounter] = React.useReducer(setCounterValue, 0);

  return (
    <div>
      <h2>MyReducer</h2>
      <p>현재 카운트 값:{myCounter}</p>
      <button type="button" onClick={(e) => setMyCounter("Hello")}>
        UP
      </button>
      <button type="button" onClick={(e) => setMyCounter("World")}>
        DOWN
      </button>
      <button type="button" onClick={(e) => setMyCounter("")}>
        RESET
      </button>
    </div>
  );
};

export default MyReducer;
