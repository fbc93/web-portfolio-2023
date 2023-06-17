import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as wideWorkItemStyles from "../../styles/components/main/wideWorkItem.module.scss";
import { Link } from "gatsby";

export default function WideWorkItem() {
  return (
    <div className={wideWorkItemStyles.wide_work_item}>
      <div className={wideWorkItemStyles.preview}>
        <div className={wideWorkItemStyles.mobile}>
          <StaticImage src="../../../static/images/thecamp_06.png" alt="preview image" />
        </div>
        <div className={wideWorkItemStyles.desktop}>
          <StaticImage src="../../../static/images/thecamp_05.png" alt="preview image" />
        </div>
      </div>
      <div className={wideWorkItemStyles.card}>
        <Link to="/">
          <span className={wideWorkItemStyles.project_name}># 캠프몰</span>
          <span className={wideWorkItemStyles.category}>이커머스, 유지보수</span>
          <span className={wideWorkItemStyles.tech_keyword}>CAFE24, 반응형</span>
          <span className={wideWorkItemStyles.content}>
            회사에서 구매한 베이직한 디자인 스킨을 받아 커머스팀의 요구사항을 지속적으로 반영한 작업물입니다.
          </span>
        </Link>
      </div>
    </div>
  );
}