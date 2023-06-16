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
          <span className={wideWorkItemStyles.title}># 캠프몰</span>
          <span className={wideWorkItemStyles.category}>CAFE24</span>
        </Link>
      </div>
    </div>
  );
}