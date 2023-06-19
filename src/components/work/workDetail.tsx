import { Link } from "gatsby";
import React from "react"
import * as workDetailStyles from "../../styles/components/work/WorkDetail.module.scss";
import Card from "./card";

export default function WorkDetail() {
  return (
    <article className={workDetailStyles.work_detail}>
      <div className={workDetailStyles.container}>
        <Link to="/" className={workDetailStyles.goBackLink}>돌아가기</Link>
        <Card />
      </div>
    </article>
  )
}