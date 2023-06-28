import { Link } from "gatsby";
import React, { useState } from "react";
import * as studyStyles from "../../styles/components/main/Study.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import { FiArrowLeftCircle, FiExternalLink } from "react-icons/fi";
import { useTrail, useSpring, useSprings, useScroll, animated, config } from '@react-spring/web';
interface IStudyProps {
  words: string[];
  studySubTitle: any;
  studyMiniTitle: any;
  studyTrail: any[];
  studyDesc: any;
  studyBtn: any;
}

export default function Study({
  words,
  studySubTitle,
  studyMiniTitle,
  studyTrail,
  studyDesc,
  studyBtn
}: IStudyProps) {

  const [isFixed, setIsFixed] = useState(false);

  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {

      if (scrollYProgress >= 0.8) {
        setIsFixed(true);

      } else {
        setIsFixed(false);
      }
    },
    default: {
      immediate: true,
    }
  });

  return (
    <article className={studyStyles.study}>
      <div className={studyStyles.container}>
        <div className={studyStyles.info}>
          <div className={studyStyles.info_container}>
            <div className={studyStyles.info_title}>

              <animated.strong style={{ ...studySubTitle }} className={studyStyles.sub}>Study</animated.strong>

              <strong className={studyStyles.main}>
                <span className="screen_out">overcoming my gray zone</span>

                <animated.div style={{ ...studyMiniTitle }} className={studyStyles.text}>Overcoming MY</animated.div>

                <div className={studyStyles.animation_text}>
                  {studyTrail.map(({ opacity, rotateX }, index) => (
                    <div key={index}>
                      <animated.span
                        style={{
                          opacity: opacity.to((value: number) => value),
                          transform: rotateX.to((value: number) => `perspective(600px) rotateX(${value}deg)`),
                          transformStyle: 'preserve-3d',
                        }}
                      >?</animated.span>
                      <animated.span
                        style={{
                          opacity: opacity.to((value: number) => value),
                          transform: rotateX.to((value: number) => `perspective(600px) rotateX(${180 - value}deg)`),
                          transformStyle: 'preserve-3d',
                        }}
                      >{words[index]}</animated.span>
                    </div>
                  ))}
                </div>
              </strong>
            </div>
            <animated.div style={{ ...studyDesc }} className={studyStyles.info_content}>
              <p>
                퇴사후, 근무할때는 경험하지 못했던 여러 프레임워크들을 부지런히 습득했습니다. <br />
                온라인 부트캠프 강의를 이용해 학습하고 진행한 개인 프로젝트들입니다. <br />
                문제를 스스로 정의하고 적극적으로 해결해나가는 힘을 키울 수 있었어요. 🏋️‍♀️
              </p>
            </animated.div>

            <animated.div style={{ ...studyBtn }} className={studyStyles.linkBtn}>
              <a href="https://github.com/fbc93" target="_blank">
                <FiArrowLeftCircle />
                <span>Github 바로가기</span>
              </a>
            </animated.div>

          </div>
        </div>
        <div className={studyStyles.content}>
          <div className={studyStyles.content_container}>

            <div className={studyStyles.content_item}>
              <div className={studyStyles.content_item_container}>
                <a href="https://github.com/fbc93/time-rabbit-todo-app" target="_blank">
                  <span className={studyStyles.thumbnail}>
                    <p className={studyStyles.cover}>
                      <span>Github 바로가기</span>
                      <FiExternalLink />
                    </p>
                    <StaticImage src="../../../static/images/study_preview_01.png" alt="preview image" />
                  </span>
                </a>
                <div className={studyStyles.text}>
                  <span>'23. 05. 06 - 05. 15 (10일)</span>
                  <strong>타임래빗 투두 앱</strong>
                  <ul className={studyStyles.category}>
                    <li>React</li>
                    <li>TS</li>
                    <li>Recoil</li>
                    <li>Styled-Component</li>
                  </ul>
                  <p>
                    하루 24시간을 알차게 쓰기 위해 어떻게 동기부여를 하면 좋을까 고민하며 만든 Todo 앱입니다.
                    react-dnd 라이브러리를 이용해서 Drag&Drop할 수 있는 todo 보드를 구현했습니다.
                  </p>
                </div>
              </div>
              <div className={studyStyles.line}></div>
            </div>
            <div className={studyStyles.content_item}>
              <div className={studyStyles.content_item_container}>
                <a href="https://github.com/fbc93/poong-player" target="_blank">
                  <span className={studyStyles.thumbnail}>
                    <p className={studyStyles.cover}>
                      <span>Github 바로가기</span>
                      <FiExternalLink />
                    </p>
                    <StaticImage src="../../../static/images/study_preview_02.png" alt="preview image" />
                  </span>
                </a>
                <div className={studyStyles.text}>
                  <span>'23. 05. 22 - 06. 05 (15일)</span>
                  <strong>Poong Player (풍-플레이어)</strong>
                  <ul className={studyStyles.category}>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>Pug / SCSS</li>
                  </ul>
                  <p>
                    YouTube Iframe API를 이용해서 영상을 아카이빙하고 스트리밍할 수 있는 플랫폼입니다.
                    회사내에서 프로젝트를 진행하면서 백엔드 개발자와 소통할 기회가 많았는데,
                    함께 작업하면서 얻은 지식을 좀 더 명확하게 하기위해
                    실제적으로 FE와 BE, 배포까지 혼자 진행해본 프로젝트입니다.
                  </p>
                </div>
              </div>
              <div className={studyStyles.line}></div>
            </div>
            <div className={studyStyles.content_item}>
              <div className={studyStyles.content_item_container}>
                <a href="https://github.com/fbc93/web-portfolio-2023" target="_blank">
                  <span className={studyStyles.thumbnail}>
                    <p className={studyStyles.cover}>
                      <span>Github 바로가기</span>
                      <FiExternalLink />
                    </p>
                    <StaticImage src="../../../static/images/study_preview_03.png" alt="preview image" />
                  </span>
                </a>
                <div className={studyStyles.text}>
                  <span>'23. 06. 09 - 06. 24 (16일)</span>
                  <strong>2023년 웹 포트폴리오</strong>
                  <ul className={studyStyles.category}>
                    <li>Gatsby</li>
                    <li>TS</li>
                    <li>GraphOL</li>
                    <li>SCSS</li>
                  </ul>
                  <p>
                    지금까지 학습해온 React와 TS 지식을 기반으로 새로운 도전을 해보기위해 Gatsby를 사용해 웹 포트폴리오를 만들었습니다.
                    React-Spring을 이용하여 스크롤 애니메이션을 구현했습니다.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <animated.div
        style={{
          transform: scrollYProgress.to(scrollP => {
            let progress = 0;
            let result = -60;

            if (scrollP >= 0.6) {
              const divideEnd = (scrollP * 100) - 60;
              const divisor = 30;

              progress = (divideEnd / divisor) * 100;
              result = -60 + progress;
            }

            if (scrollP >= 0.78) {
              result = 0;
            }

            return `translateX(${result}%) translateZ(0px)`;
          })
        }}
        className={studyStyles.bg_direction_x}
      ></animated.div>
      <animated.div
        style={{
          transform: scrollYProgress.to(scrollP => {
            let progress = 0;
            let result = -70;

            if (scrollP >= 0.8) {
              const divideEnd = (scrollP * 100) - 70;
              const divisor = 100;

              progress = (divideEnd / divisor) * 100;
              result = -70 + progress;
            }

            return `translateY(${result}%) translateZ(0px)`;
          })
        }}
        className={isFixed ? studyStyles.bg_direction_y + " " + studyStyles.fixed : studyStyles.bg_direction_y}></animated.div>
    </article>
  )
}