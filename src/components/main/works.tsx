import React, { useRef } from "react";
import * as worksStyles from "../../styles/components/main/Works.module.scss";
import { useTrail, useSprings, useScroll, animated, config } from '@react-spring/web';
import WorkItem from "./workItem";
import Company from "./company";
import WideWorkItem from "./wideWorkItem";

export default function Works({ worksScrollRestoration }: any) {

  const words = ['2', '1', '/', '0', '9', '~', '2', '3', '/', '0', '2', '_', 'T', 'H', 'E', 'C', 'A', 'M', 'P'];
  const containerRef = React.useRef<HTMLDivElement>(null!);
  const isFlipped = useRef(false);

  const [fixedBg, fixedBgApi] = useSprings(1,
    () => ({
      from: {
        display: 'none'
      },
      to: {
        display: 'flex'
      },
    })
  );

  const [title, titleApi] = useSprings(1,
    () => ({
      from: {
        opacity: 0,
        transform: 'translateY(50px)'
      },
      to: {
        opacity: 1,
        transform: 'translateY(0px)'
      },
      config: config.stiff,
    }), []);

  const [trail, trailApi] = useTrail(
    words.length,
    () => ({
      opacity: 0,
      rotateX: 0,
      config: config.stiff,
    }), []);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {

      if (scrollYProgress >= 0.6) {
        titleApi.start({
          opacity: 1,
          transform: 'translateY(0px)',
        });

        trailApi.start({
          opacity: 1,
          rotateX: 180,
        });

        fixedBgApi.start({
          display: 'flex',
        });

      } else {
        titleApi.start({
          opacity: 0,
          transform: 'translateY(50px)',
        });

        trailApi.start({
          opacity: 0,
          rotateX: 0,
        });
      }

      //fixedBg 위로 scroll하면 intro에서 안보이도록 중간에서 사라짐.
      if (scrollYProgress < 0.6) {
        fixedBgApi.start({
          display: 'none'
        });
      }
    }
  });

  const workItems = [
    {
      projectName: "보고싶은군인 카드 개선",
      category: "리뉴얼",
      keywords: [
        "Markup",
        "Style",
        "케이스분석",
        "Cross-Platform"
      ],
      content: "기존의 레거시 코드를 걷어내고 카드의 전체적인 UI 디자인을 변경하는 프로젝트입니다.",
    },
    {
      projectName: "추천 스타군인",
      category: "신규개발",
      keywords: [
        "Markup",
        "Style",
        "Cross-Platform"
      ],
      content: "디자이너의 부재로 UI 디자인을 제안하고 기획자와 협의하여 개발까지 함께 진행했습니다.",
    },
    {
      projectName: "오퍼월 포인트 획득",
      category: "신규개발",
      keywords: [
        "Markup",
        "Style",
        "Cross-Platform"
      ],
      content: "외주 개발자들과 함께 협업한 프로젝트입니다. UI 디자인을 제안하여 적용했습니다.",
    },
    {
      projectName: "UI 개선",
      category: "유지보수",
      keywords: [
        "Markup",
        "Style",
        "Cross-Platform"
      ],
      content: "기존 기능을 유지하고 신규 디자인에 맞춰 UI를 변경합니다."
    }
  ];

  return (
    <article className={worksStyles.works} {...worksScrollRestoration}>
      <div className={worksStyles.works_container}>
        <strong className="screen_out">Work Experience</strong>
        <Company />
        <div className={worksStyles.works_list}>
          {workItems.map((workItem, idx) => (
            <WorkItem
              projectName={workItem.projectName}
              category={workItem.category}
              keywords={workItem.keywords}
              content={workItem.content}
              imageName={`thecamp_0${idx + 1}`}
              key={idx}
            />
          ))}
        </div>
        <WideWorkItem />
      </div>

      {fixedBg.map((props, idx) => (
        <animated.div className={worksStyles.fixed_bg} style={props} key={idx}>
          {title.map((props, idx) => (
            <animated.strong className={worksStyles.main_title} style={props} key={idx}>Work Experience</animated.strong>
          ))}

          <strong className={worksStyles.sub_title}>
            <span className="screen_out">2021-23 THE CAMP</span>
            <div className={worksStyles.animation_text}>
              {trail.map(({ rotateX, opacity }, idx) => (
                <div key={idx}>
                  <animated.span
                    key={idx}
                    style={{
                      opacity: opacity.to(val => val),
                      transform: rotateX.to(val => `perspective(600px) rotateX(${val}deg)`),
                      transformStyle: 'preserve-3d',
                    }}
                  >{'?'}</animated.span>
                  <animated.span
                    style={{
                      opacity: opacity.to(val => val),
                      transform: rotateX.to(val => `perspective(600px) rotateX(${180 - val}deg)`),
                      transformStyle: 'preserve-3d',
                    }}
                  >{words[idx]}</animated.span>
                </div>
              ))}
            </div>
          </strong>
        </animated.div>
      ))}

    </article>
  )
}