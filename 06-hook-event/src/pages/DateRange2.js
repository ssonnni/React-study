import React from "react";
import Dayjs from "dayjs";

/* 
useReduce()기능을 사용하여 상황에 따라 state값을 다르게 설정하는 함수
@param {object} state - 현재 화면에 표시되고 있는 상태값
@param {string} action - 날짜 간격을 의미하는 문자열
@returns 화면을 갱신할 상태값을 담고 있는 json 객체
*/
const day = Dayjs();

const setDateValue = (현재상태, 바뀔상태) => {
  let sdate = null;

  switch (바뀔상태) {
    case "Day7":
      sdate = day.add(-7, "d").format("YYYY-MM-DD");
      break;
    case "Day15":
      sdate = day.add(-15, "d").format("YYYY-MM-DD");
      break;
    case "Month1":
      sdate = day.add(-1, "M").format("YYYY-MM-DD");
      break;
    case "Month3":
      sdate = day.add(-3, "M").format("YYYY-MM-DD");
      break;
    case "Month6":
      sdate = day.add(-6, "M").format("YYYY-MM-DD");
      break;
    default:
      sdate = day.format("YYYY-MM-DD");
      break;
  }

  return { ...현재상태, startDate: sdate };
};

const DateRange2 = () => {
  const [myDate, setMyDate] = React.useReducer(setDateValue, {
    startDate: day.format("YYYY-MM-DD"),
    endDate: day.format("YYYY-MM-DD"),
  });

  return (
    <div>
      <h2>DateRange2</h2>
      <p>
        {myDate.startDate} ~ {myDate.endDate}
      </p>
      <button type="button" onClick={(e) => setMyDate("Day7")}>
        7일
      </button>
      <button type="button" onClick={(e) => setMyDate("Day15")}>
        15일
      </button>
      <button type="button" onClick={(e) => setMyDate("Month1")}>
        1개월
      </button>
      <button type="button" onClick={(e) => setMyDate("Month3")}>
        3개월
      </button>
      <button type="button" onClick={(e) => setMyDate("Month6")}>
        6개월
      </button>
    </div>
  );
};

export default DateRange2;
