import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { getBlogList } from "../slices/BlogSlice";
import { Oval } from "react-loader-spinner";
import { useInView } from "react-intersection-observer";

//ListView컴포넌트는 생성필요함 > rsc
import ListView from "../components/ListView";

//react-loader-spinner가 업데이트되면서 더이상 css가 사용되지 않음
//import 'react-loader-spinner/dist.loader/css/react-loader-spinner.css';

import style from "../assets/scss/style.module.scss";

const BlogPage = ({ query }) => {
  //페이지 번호 상태값
  const [page, setPage] = React.useState(1);

  //무한스크롤 관련
  const [ref, inView] = useInView();

  //리덕스 스토어에 저장되어 있는 상태값 받기
  const { rt, rtmsg, item, loading } = useSelector((state) => state.blog);

  //액션함수를 호출하기 위한 디스패치 함수 생성
  const dispatch = useDispatch();

  React.useEffect(() => {
    setPage(1);
  }, [query]);

  // //query값이 변경될때만 실행되는 hook을 통해 액션함수 디스패치
  React.useEffect(() => {
    if (!loading) {
      dispatch(getBlogList({ query: query, page: page }));
    }
  }, [dispatch, page]);

  React.useEffect(() => {
    //사용자가 마지막으로 요소를 보고 있고 , 로딩중이 아니라면
    if (inView && !loading) {
      setPage(page + 1);
    }
  }, [inView]);

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
        // 이미지 검색결과를 제외한 모든 페이지 적용
        //썸네일이 없는 웹 검색은 thumb={false}
        //나머지 카페,블로그,책,검색은 thumb={true}
        <ListView documents={item.documents} thumb={true} inview={ref} />
      )}
    </div>
  );
};

export default BlogPage;
