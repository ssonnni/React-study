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
      console.group("원본데이터");
      console.log(data);
      console.groupEnd();

      /* 통신결과 중에서 각 컴포넌트에 전달할 값을 추려낸다 */
      //1)누적 확진자 현황
      const accState = {
        기준시각: data.collection_datetime,
        확진자: 0,
        격리해제: 0,
        격리중: 0,
        사망: 0,
      };

      //2) 일주일간의 확진자 현황
      const confirmedState = { 날짜: [], 누적확진: [], 일일확진: [] };

      //3)일주일간의 격리해제 현황
      const releaseState = { 날짜: [], 누적격리해제: [], 일일격리해제: [] };

      //지역별 데이터만 추출
      //---> response.data 는 ajax를 통해 얻은 json 결과
      //---> response.data.data는 ajax결과 안에 포함된 data라는 이름의 key
      const cityData = data.data;

      //지역별 데이터만 추출
      const cityNames = Object.getOwnPropertyNames(cityData);

      //지역수 만큼 반복
      cityNames.forEach((v, p) => {
        //도시하나를 추출 --> 배열형태
        const cityItem = cityData[v];

        //가장 마지막 원소를 가져온다 (가장최근데이터)
        const lastIndex = cityItem.confirmed_acc.length - 1;

        //전국데이터를 모아야 하므로 각 도시 값을 합산
        accState.확진자 += cityItem.confirmed_acc[lastIndex];
        accState.격리해제 += cityItem.released_acc[lastIndex];
        accState.격리중 += cityItem.active[lastIndex];
        accState.사망 += cityItem.death_acc[lastIndex];

        //일주일 전에 해당하는 위치를 가리키는 인덱스
        const weekIndex = cityItem.confirmed_acc.length -8;

        //일주일치를 반복(i=ajax로 가져온 전체 배열index, j=그래프용으로 생성한 weekState의 index)
        for (let i=weekIndex, j=0; i<cityItem.confirmed_acc.length; i++, j++){
          //confirmState.날짜 배열에 cityItem.data[i]과 일치하는 값의 위치를 검색
          //-->일치하는 정보가 없다면 (=신규로 추가되는 데이터라면?) -1반환됨
          if (confirmState.날짜.indexOf(cityItem.data[i] === - 1){
            //신규항목이므로 데이터 추가
            confirmState.날짜.push(cityItem.data[i]);
            confirmState.누적확진.push(parseInt(cityItem.confirmed_acc[i]));
            confirmState.일일확진.push(parseInt(cityItem.confirmed[i]));
            releaseState.날짜.push(cityItem.data[i]);
            releaseState.누적격리해제.push(parseInt(cityItem.confirmed_acc[i]));
            releaseState.일일격리해제.push(parseInt(cityItem.confirmed[i]));
          }
        else {
          confirmState.누적확진[j] += parseInt(cityItem.confirmed_acc[i]);
          confirmState.일일확진[j] += parseInt(cityItem.confirmed[i]);
          releaseState.누적격리해제[j] += parseInt(cityItem.confirmed_acc[i]);
          releaseState.일일격리해제[j] += parseInt(cityItem.confirmed[i]);
        }
        
      });
      return {
        ...state,
        rt: payload.status,
        rtmsg: payload.statusText,
        item: payload.data,
        loading: false,
      };
    
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
