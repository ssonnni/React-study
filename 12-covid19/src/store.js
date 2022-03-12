import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import allSlice from "./slices/AllSlice";
import nowSlice from "./slices/NowSlice";

const store = configureStore({
  // 개발자가 직접 작성한 Slice 오브젝트들이 명시되어야한다.
  reducer: {
    all: allSlice,
    now: nowSlice,
  },

  // 미들웨어를 사용하지 않을 경우 아래 라인 생략 가능
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    createLogger(),
  ],
  // redux-devtools-extention을 사용하지 않을 경우 false 혹은 이 라인 명시안함
  devTools: true,
});
export default store;
