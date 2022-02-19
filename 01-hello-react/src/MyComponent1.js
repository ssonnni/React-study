//react 기본 패키지 참조 (필수)
import React from 'react';

//하위 컴포넌트 참조 --> 정의한 이름을 html태그처럼 사용.
import MysubComponent from './MysubComponent';

// 함수형 컴포넌트 정의
// -함수 이름은 혼선을 방지하기위해 소스파일 이름과 동일하게 구성하는것이 일반적.

function MyComponent1() {
    //리턴은 항상 html구조를 의미하는 JSX문법이어햐한다.
    //JSX 구조는 무조건 단 하나의 태그요소만 반환해야함
    //-->복잡한 구조는 부모요소 하나에 모두 포함되어햐 한다는 의미
    /* 참조한 컴포넌트는 몇번이고 재사용 가능함 */

    return(
        <div>
            <h2>안녕하세요 리액트</h2>
            <p>리액트 컴포턴트 구조 연습입니다.</p>

            <MysubComponent />
        </div>
    );
}

//이 소스파일에서 정의하는 기능을-
//이 파일을 import하는 다른 파일에서 참조할 수 있도록 내보낸다.
export default MyComponent1;