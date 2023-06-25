import React from "react";
import * as worksStyles from "../../styles/components/main/Works.module.scss";
import * as worksBgStyles from "../../styles/components/main/WorksBg.module.scss";
import { animated } from '@react-spring/web';
import WorkItem from "./workItem";
import Company from "./company";
import WideWorkItem from "./wideWorkItem";
import WorksBgText from "./worksBgText";
interface IWorksProps {
  workData: any;
  wideWorData: any;
  worksTextBg: any;
  company: any;
  workItemSprings: any[];
  wideWorkItem: any;
}

export default function Works({
  workData,
  wideWorData,
  worksTextBg,
  company,
  workItemSprings,
  wideWorkItem,
}: IWorksProps) {

  console.log(wideWorData)

  return (
    <article className={worksStyles.works}>
      <div className={worksStyles.works_container}>
        <strong className={worksStyles.title}>Work Experience</strong>
        <Company springStyle={company} />
        <div className={worksStyles.works_list}>
          {workItemSprings.map(({ ...opacity }, index) => (
            <WorkItem
              springStyle={opacity}
              projectName={workData[index].frontmatter?.name}
              category={workData[index].frontmatter?.category}
              content={workData[index].frontmatter?.description}
              previewImage={workData[index].frontmatter?.previewImage?.childImageSharp?.gatsbyImageData}
              path={`/work/thecamp/${workData[index].frontmatter?.slug}`}
              key={index}
            />
          ))}
        </div>
        <WideWorkItem
          springStyle={wideWorkItem}
          wideWorData={wideWorData}
          projectName={wideWorData.name}
          content={wideWorData.description}
          path={`/work/thecamp/${wideWorData.slug}`}
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