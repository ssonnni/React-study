import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import bookSlice from "./slices/BookSlice";

//Slice오브젝트 참조 구문 명시 위치

const store = configureStore({
  reducer: {
    book: bookSlice,
  },
  middleware: [
    ...getDefaultMiddleware({ serializationCheck: false }),
    createLogger(),
  ],
  devTools: true,
});

export default store;
