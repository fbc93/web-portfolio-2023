import { Link } from "gatsby";
import React, { useState } from "react";
import * as studyStyles from "../../styles/components/main/Study.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import { FiArrowLeftCircle } from "react-icons/fi";
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

              <animated.strong style={{ ...studySubTitle }} className={studyStyles.sub}>STUDY</animated.strong>

              <strong className={studyStyles.main}>
                <span className="screen_out">overcome my gray zone</span>

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
                프로젝트를 진행하면서 문제를 정의하고 해결해나가는 힘을 키울 수 있었어요. <br />
                무엇보다 작업 완료 기한을 먼저 정하고, 그 기한을 지키는 연습을 함으로써 실제 업무를 하는 자세로 작업했습니다.
              </p>
            </animated.div>

            <animated.div style={{ ...studyBtn }} className={studyStyles.linkBtn}>
              <Link to="/">
                <FiArrowLeftCircle />
                <span>Github 바로가기</span>
              </Link>
            </animated.div>

          </div>
        </div>
        <div className={studyStyles.content}>
          <div className={studyStyles.content_container}>

            <div className={studyStyles.content_item}>
              <Link to="/">
                <span className={studyStyles.thumbnail}>
                  <StaticImage src="../../../static/images/study_preview_01.png" alt="preview image" />
                </span>
                <div className={studyStyles.text}>
                  <span>sub title</span>
                  <strong>title</strong>
                  <p>쉽고, 재밌고, 특별함을 담아 글쓰는 걸 좋아해요.
                    새로 배운 지식부터 공유하고 싶은 경험까지 글로 차곡차곡 담았습니다.
                    지금까지 110만 명 이상이 블로그에 방문해서 글을 읽었어요.</p>
                </div>
              </Link>
              <div className={studyStyles.line}></div>
            </div>
            <div className={studyStyles.content_item}>
              <Link to="/">
                <span className={studyStyles.thumbnail}>
                  <StaticImage src="../../../static/images/study_preview_02.png" alt="preview image" />
                </span>
                <div className={studyStyles.text}>
                  <span>sub title</span>
                  <strong>title</strong>
                  <p>쉽고, 재밌고, 특별함을 담아 글쓰는 걸 좋아해요.
                    새로 배운 지식부터 공유하고 싶은 경험까지 글로 차곡차곡 담았습니다.
                    지금까지 110만 명 이상이 블로그에 방문해서 글을 읽었어요.</p>
                </div>
              </Link>
              <div className={studyStyles.line}></div>
            </div>
            <div className={studyStyles.content_item}>
              <Link to="/">
                <span className={studyStyles.thumbnail}>
                  <StaticImage src="../../../static/images/study_preview_03.png" alt="preview image" />
                </span>
                <div className={studyStyles.text}>
                  <span>sub title</span>
                  <strong>title</strong>
                  <p>쉽고, 재밌고, 특별함을 담아 글쓰는 걸 좋아해요.
                    새로 배운 지식부터 공유하고 싶은 경험까지 글로 차곡차곡 담았습니다.
                    지금까지 110만 명 이상이 블로그에 방문해서 글을 읽었어요.</p>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>

      <animated.div
        style={{
          transform: scrollYProgress.to(scrollP => {
            let progress = 0;
            let result = -60;

            if (scrollP >= 0.74) {
              const divideEnd = (scrollP * 100) - 74;
              const divisor = 20;

              progress = (divideEnd / divisor) * 100;
              result = -74 + progress;
            }

            if (scrollP >= 0.88) {
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