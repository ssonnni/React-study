import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* 비동기 처리 함수 구현 */
export const getNowList = createAsyncThunk(
  "NOW/GET_LIST",
  async (payload, { rejectWithValue }) => {
    let result = null;

    try {
      result = await axios.get("http://itpaper.co.kr/demo/covid19/now.php");
    } catch (err) {
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

/* Slice 정의 (Action함수 = Reducer의 개념) */
const NowSlice = createSlice({
  name: "now",
  initialState: {
    /* 상태값 구조 정의 (자유롭게 구성가능함) */
    rt: 200, //HTTP 상태코드 (200,404,500 등)
    rtmsg: null, // 에러메세지
    item: [], // Ajax 처리를 통해 수신된 데이터
    loading: false, //  로딩 여부
  },
  //내부 action 및 동기 action (Ajax처리시에는 사용하지 않음)
  reducers: {},
  //외부 action 및 비동기 action
  extraReducers: {
    /* Ajax 요청 준비 */
    [getNowList.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    [getNowList.fulfilled]: (state, { meta, payload }) => {
      //데이터 추출
      const { data } = payload;
      console.group("원본데이터");
      console.debug(data);
      console.groupEnd();

      /* 통신결과 중에서 그래프에 출력하기 위한 값을 추려낸다 */
      const result = { 지역명: [], 누적확진자: [] };
      data.state.forEach((v, i) => {
        result.지역명[i] = v.region;
        result.누적확진자[i] = v.confirmed;
      });

      //누적확진자 값이 큰 순서대로 정렬하기 위한 순차정렬 알고리즘 적용
      for (let i = 0; i < result.누적확진자.length - 1; i++) {
        for (let j = i + 1; j < result.누적확진자.length; j++) {
          if (result.누적확진자[i] < result.누적확진자[j]) {
            const tmp1 = result.누적확진자[i];
            result.누적확진자[i] = result.누적확진자[j];
            result.누적확진자[j] = tmp1;

            const tmp2 = result.지역명[i];
            result.지역명[i] = result.지역명[j];
            result.지역명[j] = tmp2;
          }
        }
      }

      //Ajax 결과를 로그에 출력해보자
      const response = {
        ...data,
        result: result,
      };
      console.group("데이터 변환 결과");
      console.debug(response);
      console.groupEnd();

      return {
        ...state,
        rt: payload.status,
        rtmsg: payload.statusText,
        item: payload.data,
        loading: false,
      };
    },
    [getNowList.rejected]: (state, { payload }) => {
      return {
        ...state,
        rt: payload?.status ? payload.status : "500",
        rtmsg: payload?.statusText ? payload.statusText : "Server Error",
        item: payload?.data,
        loading: false,
      };
    },
  },
});

// 리듀서 객체 내보내기
export default NowSlice.reducer;
