import React from 'react';

/* jsx반복처리(1) - 함수를 통한 반복문 활용*/

const Loop1 = () => {
    const createListItem = (count) => {
        //<li>..</li> 단위를 저장할 배열
        let li = [];
        
        //주어진 count 수 만큼 반복
        for(let i=0; i <count; i++) {
            li.push(<li>Item {i} </li>);

        }

        return li;
    };

    return (
        <div>

        <h2>Loop1</h2>
        <ul>{createListItem(5)}</ul>

        </div>
    );
};

export default Loop1;
