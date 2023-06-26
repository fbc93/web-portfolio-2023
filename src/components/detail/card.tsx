import React from "react";
import * as cardStyles from "../../styles/components/detail/Card.module.scss";

interface ICardProps {
  data: Queries.WorkDetailQuery;
}

export default function Card({ data }: ICardProps) {
  const team = data.mdx?.frontmatter?.team?.split(",");
  const cardDesc = data.mdx?.frontmatter?.cardDesc?.split("/");

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
      </div>
      <div className={cardStyles.desc}>
        {cardDesc?.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
      </div>
    </div>
  )
}