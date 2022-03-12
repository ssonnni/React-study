import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* 비동기 처리 함수 구현 */
export const getAllList = createAsyncThunk(
  "ALL/GET_LIST",
  async (payload, { rejectWithValue }) => {
    let result = null;

    try {
      result = await axios.get("http://itpaper.co.kr/demo/covid19/all.php");
    } catch (err) {
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

/* Slice 정의 (Action함수 = Reducer의 개념) */
const allSlice = createSlice({
  name: "all",
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
    [getAllList.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    [getAllList.fulfilled]: (state, { meta, payload }) => {
      //데이터 추출
      const { data } = payload;

      return {
        ...state,
        rt: payload.status,
        rtmsg: payload.statusText,
        item: payload.data,
        loading: false,
      };
    },
    [getAllList.rejected]: (state, { payload }) => {
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
export default allSlice.reducer;
