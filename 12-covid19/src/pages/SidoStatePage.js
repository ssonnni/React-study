import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { getNowList } from "../slices/NowSlice";
import { Oval } from "react-loader-spinner";

import SidoConfirmAccChart from "../components/SidoConfirmAccChart";
import SidoStateTable from "../components/SidoStateTable";

import style from "../assets/scss/style.module.scss";

const SidoStatePage = () => {
  //리덕스 스토어에 저장되어있는 상태값 받기
  const { rt, rtmsg, item, loading } = useSelector((state) => state.now);

  //액션함수를 호출하기 위한 디스패치 함수 생성
  const dispatch = useDispatch();

  /* targetDt 값이 변경될 때만 실행되는 hook 정의 */
  React.useEffect(() => {
    if (!loading) {
      dispatch(getNowList());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* 로딩바 */}
      {loading && (
        <Oval
          color="#ff6600"
          height={100}
          width={100}
          wrapperStyle={{
            position: "absolute",
            left: "50%",
            top: "50%",
            marginLeft: "-50px",
            marginTop: "-50px",
          }}
        />
      )}

      {/* 결과값 실패인 경우 에러메세지표시, 성공인경우 목록컴포 호출 */}
      {rt !== 200 ? (
        <div className={style.errmsg}>
          <h3>{rt} Error</h3>
          <p>{rtmsg}</p>
        </div>
      ) : (
        <div className={style.section}>
          {item.result && (
            <SidoConfirmAccChart
              지역명={item.result.지역명}
              누적확진자={item.result.누적확진자}
            />
          )}
          {item.state && <SidoStateTable state={item.state} />}
        </div>
      )}
    </div>
  );
};

export default SidoStatePage;
