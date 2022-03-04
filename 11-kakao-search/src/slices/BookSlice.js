import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* 비동기 처리 함수 구현 */
export const getBookList = createAsyncThunk(
  "BOOK/GET_LIST",
  async (payload, { rejectWithValue }) => {
    let result = null;

    if (payload.query) {
      try {
        const apiUrl = "https://dapi.kakao.com//v3/search/book";
        result = await axios.get(apiUrl, {
          params: { query: payload.query, page: payload.page, size: 20 },
          headers: {
            Authorization: "KakaoAK 2d3bf2fdb87b3e163de0c54eccd37c15",
          },
        });
      } catch (err) {
        result = rejectWithValue(err.response);
      }
    }

    return result;
  }
);

/* Slice 정의 (Action함수 = Reducer의 개념) */
/* payload = axios로 받아오는 result 값 중요!!! */
const bookSlice = createSlice({
  name: "book",
  initialState: {
    /* 상태값 구조 정의 (자유롭게 구성가능함) */
    rt: null, //HTTP 상태코드 (200,404,500 등)
    rtmsg: null, // 에러메세지
    item: [], // Ajax 처리를 통해 수신된 데이터
    loading: false, //  로딩 여부
  },
  //내부 action 및 동기 action (Ajax처리시에는 사용하지 않음)
  reducers: {},
  //외부 action 및 비동기 action
  extraReducers: {
    /* Ajax 요청 준비 */
    [getBookList.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    [getBookList.fulfilled]: (state, { meta, payload }) => {
      //1페이지가 아닌 경우에는 리덕스에 저장되어 있는 현재 데이터에
      //새로 받아온 데이터 병합하여 Ajax의 결과를 재구성한다.
      if (meta.arg.page > 1) {
        payload.data.documents = state.item.documents.concat(
          payload.data.documents
        );
      }
      return {
        ...state,
        rt: payload.status,
        rtmsg: payload.statusText,
        item: payload.data,
        loading: false,
      };
    },
    [getBookList.rejected]: (state, { payload }) => {
      return {
        ...state,
        rt: payload.status ? payload.status : "500",
        rtmsg: payload.statusText ? payload.statusText : "Server Error",
        loading: false,
      };
    },
  },
});

// 리듀서 객체 내보내기
export default bookSlice.reducer;
