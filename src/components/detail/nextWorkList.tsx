import { Link } from "gatsby";
import React from "react";
import * as nextWorkListStyle from "../../styles/components/detail/NextWorkList.module.scss";
import GoBackBtn from "./goBackBtn";

interface INextWorkList {
  data: Queries.WorkDetailQuery;
}

export default function NextWorkList({ data }: INextWorkList) {
  const allWorkList = data.allMdx.nodes;
  const currentWork = data.mdx?.frontmatter?.slug;
  const nextWorkList = allWorkList.filter(item => item.frontmatter?.slug != currentWork);

  return (
    <div className={nextWorkListStyle.next_work_list}>
      <strong>Next Project</strong>
      <ul>
        {nextWorkList.map((item, index) => (
          <li key={index}>
            <Link to={`/work/thecamp/${item.frontmatter?.slug}`}>
              {item.frontmatter?.name}
            </Link>
          </li>
        ))}
      </ul>
      <GoBackBtn />
    </div>
  )
}
