import React, { useRef } from "react";
import * as worksStyles from "../../styles/components/main/Works.module.scss";
import * as worksBgStyles from "../../styles/components/main/WorksBg.module.scss";
import { useTrail, useSpring, useSprings, useScroll, animated, config } from '@react-spring/web';
import WorkItem from "./workItem";
import Company from "./company";
import WideWorkItem from "./wideWorkItem";
import { workItemsData, wideWorkItemData } from "../../data/dummy_data";
import WorksBgText from "./worksBgText";

interface IWorksProps {
  worksTextBg: any;
  company: any;
  workItemSprings: any[];
  wideWorkItem: any;
}

export default function Works({
  worksTextBg,
  company,
  workItemSprings,
  wideWorkItem,
}: IWorksProps) {

  return (
    <article className={worksStyles.works}>
      <div className={worksStyles.works_container}>
        <strong className={worksStyles.title}>Work Experience</strong>
        <Company springStyle={company} />
        <div className={worksStyles.works_list}>
          {workItemSprings.map(({ ...opacity }, index) => (
            <WorkItem
              springStyle={opacity}
              projectName={workItemsData[index].projectName}
              category={workItemsData[index].category}
              content={workItemsData[index].content}
              imageName={`thecamp_0${index + 1}`}
              path={`/work/thecamp/${workItemsData[index].path}`}
              key={index}
            />
          ))}
        </div>
        <WideWorkItem
          springStyle={wideWorkItem}
          projectName={wideWorkItemData.projectName}
          category={wideWorkItemData.category}
          content={wideWorkItemData.content}
          path={`/work/thecamp/${wideWorkItemData.path}`}
        />
      </div>
      <animated.div
        style={{ ...worksTextBg }}
        className={worksBgStyles.work_bg}>
        <strong className={worksBgStyles.title}>Work Experience</strong>
        <strong className={worksBgStyles.bg_text}>
          <div className={worksBgStyles.image}>
            <WorksBgText />
          </div>
        </strong>
      </animated.div>
    </article>
  )
}