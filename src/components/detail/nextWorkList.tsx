import { Link } from "gatsby";
import React from "react";
import * as nextWorkListStyle from "../../styles/components/detail/NextWorkList.module.scss";
import GoBackBtn from "./goBackBtn";
import { useScroll, animated, useSprings, useSpring, config, useTrail } from '@react-spring/web';

interface INextWorkListProps {
  data: Queries.WorkDetailQuery;
  nextWorkListTrail: any;
  nextWorkItems: any;
}

export default function NextWorkList({ data, nextWorkListTrail, nextWorkItems }: INextWorkListProps) {
  const allWorkList = data.allMdx.nodes;
  const currentWork = data.mdx?.frontmatter?.slug;
  const nextWorkList = allWorkList.filter(item => item.frontmatter?.slug != currentWork);

  return (
    <animated.div className={nextWorkListStyle.next_work_list} style={{ ...nextWorkItems }}>
      <strong>Next Project</strong>
      <ul>
        {nextWorkListTrail.map(({ opacity, x }: any, index: number) => (
          <li key={index}>
            <Link to={`/work/thecamp/${nextWorkList[index].frontmatter?.slug}`}>
              {nextWorkList[index].frontmatter?.name}
            </Link>
            <animated.div
              className={nextWorkListStyle.borderBottom}
              style={{
                opacity,
                transform: x.to((value: number) => `translateX(${value}%)`),
              }}></animated.div>
          </li>
        ))}
      </ul>
      <GoBackBtn />
    </animated.div>
  )
}
