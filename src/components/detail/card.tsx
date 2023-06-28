import React from "react";
import * as cardStyles from "../../styles/components/detail/Card.module.scss";
import { useScroll, animated, useSprings, useSpring, config, useTrail } from '@react-spring/web';

interface ICardProps {
  data: Queries.WorkDetailQuery;
  subTitle: any;
  title: any;
  category: any;
  teamSpring: any;
  desc: any;
}

export default function Card({ data, subTitle, title, category, teamSpring, desc }: ICardProps) {
  const team = data.mdx?.frontmatter?.team?.split(",");
  const cardDesc = data.mdx?.frontmatter?.cardDesc?.split("/");

  return (
    <div className={cardStyles.card}>
      <animated.span className={cardStyles.sub_title} style={{ ...subTitle }}>WORK DETAIL</animated.span>
      <animated.strong className={cardStyles.title} style={{ ...title }}>
        {data.mdx?.frontmatter?.name}
      </animated.strong>
      <animated.div className={cardStyles.category} style={{ ...category }}>
        <span>{data.mdx?.frontmatter?.category}</span>
      </animated.div>
      <animated.div className={cardStyles.team} style={{ ...teamSpring }}>
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
      </animated.div>
      <animated.div className={cardStyles.desc} style={{ ...desc }}>
        {cardDesc?.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
      </animated.div>
    </div>
  )
}