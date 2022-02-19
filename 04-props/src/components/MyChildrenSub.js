import React from 'react';

import PropTypes from 'prop-types';

const MyChildrenSub = ({width,height,children}) => {

    /* CSS 속성값을 변수화 할 경우 JSON 객체로 구성한다 */
    const myStyle = {
        //부모로부터 전달받은 props에 포함된 값으로 width ,height 결정
        width: width + 'px',
        height: height + 'px',
        border:'5px solid #d5d5d5',
        padding: '20px',
        margin: '10px',
        backgroundColor: '#eeeeee'

    }
    return (
        <div>
            <h2>MyChildrenSub</h2>
            {/* 부모 컴포넌트가 자신을 호출할때 시작태그와
            끝태그 사이에 명시하는 내용이 children이다. */}
            <div style={myStyle}>{children}</div>
        </div>
    );
}

//속성들에 대한 타입 정의
MyChildrenSub.propTypes = {
    // isRequired
    // types뒤에 붙여주면 필수 prop으로 인식하고, 값이 없거나 잘못되었을 경우 콘솔 창에서 오류를 확인할 수 있다.
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    children: PropTypes.string
};

//속성들에 대한 기본 값을 JSON으로 정의 ( 객체이름 고정)
//isRequired를 사용하지 않았을 때,
// defaultProps가 설정돼있지 않다면 eslint에서 경고가 나타난다.
MyChildrenSub.defaultProps ={
    width:300,
    height:100,
    children:'내용이 없습니다'
};

export default MyChildrenSub;