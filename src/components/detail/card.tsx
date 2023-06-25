import React from "react";
import * as cardStyles from "../../styles/components/detail/Card.module.scss";

interface ICardProps {
  data: Queries.WorkDetailQuery;
}

export default function Card({ data }: ICardProps) {
  const team = data.mdx?.frontmatter?.team?.split(",");

  return (
    <div className={cardStyles.card}>
      <span className={cardStyles.sub_title}>WORK DETAIL</span>
      <strong className={cardStyles.title}>
        {data.mdx?.frontmatter?.name}
      </strong>
      <div className={cardStyles.category}>
        <span>{data.mdx?.frontmatter?.category}</span>
      </div>
      <div className={cardStyles.team}>
        {team?.map((item, index) => (
          <div key={index}>
            {item.includes("퍼블리셔") ? (
              <>
                <span className={cardStyles.my_job}>{item}</span>
                <span className={cardStyles.bar}></span>
              </>
            ) : (
              <>
                <span>{item}</span>
                <span className={cardStyles.bar}>/</span>
              </>
            )}
          </div>
        ))}
        {/* <span>디자이너</span>
        <span className={cardStyles.bar}>/</span>
        <span>PM(기획)</span>
        <span className={cardStyles.bar}>/</span>
        <span>백엔드</span>
        <span className={cardStyles.bar}>/</span>
        <span className={cardStyles.my_job}>퍼블리셔(FE)</span> */}
      </div>
      <div className={cardStyles.desc}>
        <p>이메일 템플릿은 별도의 방식으로 마크업된 HTML 파일입니다. 단순한 텍스트 대신, 다양하고 풍부한 내용을 담은 이메일을 보내기 위해 템플릿을 사용합니다.</p>
        <p>해당 업무는 마케팅 담당자가 요청하는 경우가 많아서, 템플릿을 한 곳에서 확인할 수 있는 사이트를 별도로 만들었습니다. 담당자는 기존의 요청과 산출물을 다시 볼 수 있어 활용이 쉬워지고, 개발자는 히스토리를 쉽게 관리할 수 있게 되었습니다.</p>
      </div>
    </div>
  )
}