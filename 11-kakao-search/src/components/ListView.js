import React from "react";
import dayjs from "dayjs";

import style from "../assets/scss/style.module.scss";
import noimg from "../assets/img/noimg.png";

/* 
검색결과와 썸네일 표시 여부를 전달받아 화면에 목록을 출력하는 컴포넌트
@param documents - 검색결과 배열
@param thumb- 썸네일 배열
@returns
*/

const ListView = ({ documents, thumb, inview }) => {
  return (
    <ul className={style.mediaList}>
      {/* 검색결과에 대한 반복문 수행 */}
      {documents.map((item, index) => (
        //마지막 항목에대해 ref속성에 inview값을 추가한다.
        <li
          className={style.mediaItem}
          key={index}
          {...(documents.length - 1 === index ? { ref: inview } : {})}
        >
          {/* props로 전달된 thumb가 true인 경우에만 thumbnail이라는 class를 적용*/}
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className={thumb && style.thumbnail}
          >
            {/* props로 전달된 thumb가 true인 경우에만 이미지 표시 */}
            {thumb && (
              <img
                src={item.thumbnail ? item.thumbnail : noimg}
                onError={(e) => (e.currentTarget.src = noimg)}
                alt={item.title}
              />
            )}

            {/* 제목과 상세내용은 HTML태그가 포함되어 있기 때문에 dangerouslySetInnerHTML을 사용해서 출력 */}
            <h2
              className={style.mediaHeading}
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
            <p
              className={style.desc}
              dangerouslySetInnerHTML={{ __html: item.contents }}
            />

            {/* 가격정보가 있을 경우에만 출력하는 영역 (for책검색) */}
            {item.price && (
              <p className={style.price}>
                정가:<span> {item.price}</span>
                판매가: <span> {item.sale_price}</span>
              </p>
            )}

            <p className={style.daate}>
              {/* 저자 정보가 있을 경우만 출력되는 영역 (for 책검색) */}
              {item.authors && (
                <span>
                  <strong>{item.authors.join(",")}</strong> /
                </span>
              )}
              {/* 출판사 정보가 있을 경우만 출력되는 영역 (for 책검색) */}
              {item.publisher && (
                <span>
                  <strong>{item.publisher}</strong> /
                </span>
              )}
              {/* 카페이름이 있는 경우만 출력되는 영역 (for 카페 검색) */}
              {item.cafename && (
                <span>
                  <strong>{item.cafename}</strong> /
                </span>
              )}
              {/* 블로그 이름이 있는 경우만 출력되는 영역 (for 블로그 검색) */}
              {item.blogname && (
                <span>
                  <strong>{item.blogname}</strong> /
                </span>
              )}
              {/* 날짜정보가 있는 경우만 출력되는 영역 (for 전체) */}
              {item.datetime && (
                <span>
                  <strong>
                    {dayjs(item.datetime).format("YYYY-MM-DD hh:mm")}
                  </strong>{" "}
                  /
                </span>
              )}
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
};

/* props에 대한 기본값 설정 */
ListView.defaultProps = {
  documents: [],
  thumb: false,
};

export default ListView;
