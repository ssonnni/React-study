import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

//Slice오브젝트 참조 구문 명시 위치

const logger = createLogger();

const store = configureStore ({
    reducer: {
        name:object,
        naame:object
        ...
    },
    // 미들웨어를 사용하지 않을 경우 이 라인 생략 가능
    middleware: [...getDefaultMiddleware(),logger],
    //redux-devtools-extension을 사용하지 않을 경우 false 혹은 이 라인 명시안함
    devTools:true
});

export default store;
