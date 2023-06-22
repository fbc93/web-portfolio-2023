import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FiLink } from "react-icons/fi";
import * as wideWorkItemStyles from "../../styles/components/main/wideWorkItem.module.scss";
import { Link } from "gatsby";
import { useTrail, useSpring, useSprings, useScroll, animated, config } from '@react-spring/web';

interface IWideWorkItem {
  springStyle: any;
  projectName: string;
  category: string[];
  content: string;
  path: string;
}

export default function WideWorkItem({
  springStyle,
  projectName,
  category,
  content,
  path,
}: IWideWorkItem) {
  return (
    <animated.div style={springStyle} className={wideWorkItemStyles.wide_work_item}>
      <div className={wideWorkItemStyles.preview}>
        <div className={wideWorkItemStyles.mobile}>
          <div className={wideWorkItemStyles.image}>
            <StaticImage src="../../../static/images/thecamp_06.png" alt="preview image" />
          </div>
          <div className={wideWorkItemStyles.shadow}></div>
        </div>
        <div className={wideWorkItemStyles.desktop}>
          <div className={wideWorkItemStyles.image}>
            <StaticImage src="../../../static/images/thecamp_05.png" alt="preview image" />
          </div>
          <div className={wideWorkItemStyles.shadow}></div>
        </div>
      </div>
      <div className={wideWorkItemStyles.card}>
        <Link to={path}>
          <span className={wideWorkItemStyles.project_name}>
            <FiLink />
            {projectName}
          </span>
          <ul className={wideWorkItemStyles.category}>
            {category.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <span className={wideWorkItemStyles.content}>{content}</span>
        </Link>
      </div>
    </animated.div>
  );
}