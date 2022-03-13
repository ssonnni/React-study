import dayjs from "dayjs";
import React from "react";

import style from "../assets/scss/style.module.scss";

const KoreaStateTable = ({ accState }) => {
  return (
    <div className={style.section}>
      <h3 className={style.title}>
        누적 확진자 현황{" "}
        <small>({dayjs(accState.기준시각).format("M/D h")}시 기준)</small>
      </h3>
      <table className={style.table}>
        <colgroup>
          <col width="25%" />
          <col width="25%" />
          <col width="25%" />
          <col width="25%" />
        </colgroup>
        <thead>
          <tr>
            <th>확진환자</th>
            <th>격리해제</th>
            <th>격리중</th>
            <th>사망</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{Number(accState.확진환자).toLocaleString()}명</td>
            <td>{Number(accState.격리해제).toLocaleString()}명</td>
            <td>{Number(accState.격리중).toLocaleString()}명</td>
            <td>{Number(accState.사망).toLocaleString()}명</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

//컴포넌트는 항상 자신의 props에 원하는 key가 포함되지 않을 경우를 대비하는 것이 좋다.
KoreaStateTable.defaultProps = {
  accState: {
    기준시각: null,
    확진환자: 0,
    격리해제: 0,
    격리중: 0,
    사망: 0,
  },
};

export default KoreaStateTable;
