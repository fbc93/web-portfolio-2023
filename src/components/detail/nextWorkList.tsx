import { Link } from "gatsby";
import React from "react";
import * as nextWorkListStyle from "../../styles/components/detail/NextWorkList.module.scss";
import GoBackBtn from "./goBackBtn";

export default function NextWorkList() {
  return (
    <div className={nextWorkListStyle.next_work_list}>
      <strong>Next Project</strong>
      <ul>
        <li><Link to="/">추천 스타군인</Link></li>
        <li><Link to="/">오퍼월 포인트 획득</Link></li>
        <li><Link to="/">기타 UI 개선</Link></li>
      </ul>
      <GoBackBtn />
    </div>
  )
}