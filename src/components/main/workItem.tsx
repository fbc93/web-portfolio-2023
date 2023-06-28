import { Link } from "gatsby";
import React, { useState } from "react";
import { FiLink } from "react-icons/fi";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { useTrail, useSpring, useSprings, useScroll, animated, config } from '@react-spring/web';
import * as workItemStyles from "../../styles/components/main/workItem.module.scss";

interface IWorkItemProps {
  springStyle: any;
  projectName: any;
  category: any;
  content: any;
  previewImage: any;
  path: any,
}

export default function WorkItem({
  springStyle,
  projectName,
  category,
  content,
  previewImage,
  path
}: IWorkItemProps) {
  return (
    <animated.div style={springStyle} className={workItemStyles.work_item}>
      <div className={workItemStyles.preview}>
        <GatsbyImage image={previewImage} alt="preview image" />
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