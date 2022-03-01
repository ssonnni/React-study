import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../slices/MovieRankSlice";
import day from "dayjs";

import Top from "../components/Top";
import MovieRankList from "../components/MovieRankList";
import MovieRankChart from "../components/MovieRankChart";

//로딩컴포넌트
import "react-loader-spinner";
import { BallTriangle } from "react-loader-spinner";

import style from "../assets/scss/style.module.scss";

const MovieRankPage = () => {
  let { targetDt } = useParams();
  const { rt, rtmsg, data, loading } = useSelector((state) => state.movieRank);
  const dispatch = useDispatch();

  if (!targetDt) {
    targetDt = day().add(-1, "d").format("YYYY-MM-DD");
  }

  /* targetDt 값이 변경될때만 실행되는 hook정의 */
  React.useEffect(() => {
    console.clear();
    console.log(`React.useEffect => ${targetDt}`);
    dispatch(getList(targetDt));
  }, [dispatch, targetDt]);

  return (
    <div>
      <Top targetDt={targetDt} />
      {loading && (
        <BallTriangle
          color="#00bff"
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

      {rt !== 200 ? (
        <div className={style.errmsg}>
          <h3>{rt} Error</h3>
          <p>{rtmsg}</p>
        </div>
      ) : (
        <div>
          <MovieRankChart chartData={data.chartData} targetDt={targetDt} />
          <MovieRankList boxOfficeResult={data.boxOfficeResult}></MovieRankList>
        </div>
      )}
    </div>
  );
};

export default MovieRankPage;
