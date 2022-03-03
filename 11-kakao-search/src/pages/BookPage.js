import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { getBookList } from "../slices/BookSlice";
import { Oval } from "react-loader-spinner";

//react-loader-spinner가 업데이트되면서 더이상 css가 사용되지 않음
//import 'react-loader-spinner/dist.loader/css/react-loader-spinner.css';

import style from "../assets/scss/style.module.scss";

const BookPage = ({ query }) => {
  //리덕스 스토어에 저장되어 있는 상태값 받기
  const { rt, rtmsg, item, loading } = useSelector((state) => state.book);

  //액션함수를 호출하기 위한 디스패치 함수 생성
  const dispatch = useDispatch();

  //query값이 변경될때만 실행되는 hook을 통해 액션함수 디스패치
  React.useEffect(() => {
    dispatch(getBookList(query));
  }, [dispatch, query]);

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

      {/* 결과값이 실패인 경우 에러메세지 표시 , 성공인 경우 목록 컴포 호출 */}
      {rt !== 200 ? (
        <div className={style.errmsg}>
          <h3>{rt} Error</h3>
          <p>{rtmsg}</p>
        </div>
      ) : (
        <code>{JSON.stringify(item)}</code>
      )}
    </div>
  );
};

export default BookPage;
