import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as wideWorkItemStyles from "../../styles/components/main/wideWorkItem.module.scss";
import { Link } from "gatsby";

interface IWideWorkItem {
  projectName: string;
  category: string[];
  keywords: string[];
  content: string;
}

export default function WideWorkItem({
  projectName,
  category,
  keywords,
  content
}: IWideWorkItem) {
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
          <span className={wideWorkItemStyles.project_name}>{`# ${projectName}`}</span>
          <ul className={wideWorkItemStyles.category}>
            {category.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <ul className={wideWorkItemStyles.tech_keyword}>
            {keywords.map((keyword, idx) => (
              <li key={idx}>{keyword}</li>
            ))}
          </ul>
          <span className={wideWorkItemStyles.content}>{content}</span>
        </Link>
      </div>
    </div>
  );
}