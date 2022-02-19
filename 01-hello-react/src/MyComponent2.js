import React from 'react';

//하위 컴포넌트 참조 --> 정의한 이름을 html태그처럼 사용
import MysubComponent from './MysubComponent';


// 함수형 컴포넌트 정의
function MyComponent2() {
    return(
        <div>
            <h2>Virtual DOM</h2>
            <p>This is React Component</p>


            <MysubComponent/>
            <MysubComponent/>
            <MysubComponent/>
        </div>
    );
}

export default MyComponent2;