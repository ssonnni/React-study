import React from 'react';

//컴포넌트 props의 필수 여부를 지정하거나 props의 DataType을 지정할때 사용
// -> https://reactjs-kr.firebaseapp.com/docs/typechecking-with-proptypes.html
import PropTypes from 'prop-types';

//const MyPropTypesSub = (props) => {
    //비구조 문법을 통해 변수 속성값을 변수로 선언
    //const {name, age, hobby} =  props;

const MyPropTypesSub = ({name, age, hobby}) => {
    return (
        <div>
            <h2>MyPropTypesSub</h2>
            <p>
                안녕하세요, 제이름은 {name}이고,
                나이는 {age}세 입니다.
            </p>
            <p>
                {hobby && (<span>취미는 {hobby}입니다.</span>)}
            </p>
        </div>
    );
};

/** 이 컴포넌트로 전달되는 props 값들에 대한 형식과 필수 여부 지정 */
// 규칙에 맞지 않는 props값에 대해 브라우저 개발자 콘솔에 Warning 메시지가 출력된다.
MyPropTypesSub.propTypes = {
    // name 속성의 데이터 타입을 문자열 지정
    name: PropTypes.string,
    age: PropTypes.number,
    // hobby의 데이터 타입과 필수 여부 지정
    // --> 필수 여부 설정은 데이터타입 뒤에 ".isRequired"를 추가 명시
    hobby: PropTypes.string.isRequired
};

export default MyPropTypesSub;