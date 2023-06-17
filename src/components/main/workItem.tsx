import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as workItemStyles from "../../styles/components/main/WorkItem.module.scss";

interface IWorkItemProps {
  projectName: string;
  category: string;
  keywords: string[];
  content: string;
  imageName: string;
}

export default function WorkItem({
  projectName,
  category,
  keywords,
  content,
  imageName
}: IWorkItemProps) {
  return (
    <div className={workItemStyles.work_item}>
      <div className={workItemStyles.preview}>
        {imageName === "thecamp_01" && <StaticImage src="../../../static/images/thecamp_01.png" alt="preview image" />}
        {imageName === "thecamp_02" && <StaticImage src="../../../static/images/thecamp_02.png" alt="preview image" />}
        {imageName === "thecamp_03" && <StaticImage src="../../../static/images/thecamp_03.png" alt="preview image" />}
        {imageName === "thecamp_04" && <StaticImage src="../../../static/images/thecamp_04.png" alt="preview image" />}
        <div className={workItemStyles.preview_shadow}></div>
      </div>
      <div className={workItemStyles.card}>
        <Link to="/">
          <span className={workItemStyles.project_name}># {projectName}</span>
          <span className={workItemStyles.category}>{category}</span>
          <ul className={workItemStyles.tech_keyword}>
            {keywords.map((keyword, idx) => (
              <li key={idx}>{keyword}</li>
            ))}
          </ul>
          <span>{content}</span>
        </Link>
      </div>
    </div>
  )
}