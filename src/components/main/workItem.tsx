import { Link } from "gatsby";
import React from "react";
import { FiLink } from "react-icons/fi";
import { StaticImage } from "gatsby-plugin-image";
import { useTrail, useSpring, useSprings, useScroll, animated, config } from '@react-spring/web';
import * as workItemStyles from "../../styles/components/main/WorkItem.module.scss";

interface IWorkItemProps {
  springStyle: any;
  projectName: string;
  category: string;
  content: string;
  imageName: string;
  path: string,
}

export default function WorkItem({
  springStyle,
  projectName,
  category,
  content,
  imageName,
  path
}: IWorkItemProps) {

  return (
    <animated.div style={springStyle} className={workItemStyles.work_item}>
      <div className={workItemStyles.preview}>
        {imageName === "thecamp_01" && <StaticImage src="../../../static/images/thecamp_01.png" alt="preview image" />}
        {imageName === "thecamp_02" && <StaticImage src="../../../static/images/thecamp_02.png" alt="preview image" />}
        {imageName === "thecamp_03" && <StaticImage src="../../../static/images/thecamp_03.png" alt="preview image" />}
        {imageName === "thecamp_04" && <StaticImage src="../../../static/images/thecamp_04.png" alt="preview image" />}
        <div className={workItemStyles.preview_shadow}></div>
      </div>
      <div className={workItemStyles.card}>
        <Link to={path}>
          <span className={workItemStyles.project_name}>
            <FiLink />
            {projectName}
          </span>
          <span className={workItemStyles.category}>{category}</span>
          <span className={workItemStyles.content}>{content}</span>
        </Link>
      </div>
    </animated.div>
  )
}