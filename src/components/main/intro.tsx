import React from "react";
import * as introStyles from "../../styles/components/main/Intro.module.scss";
import Logo from "./logo";
import { useScroll, animated, useSprings, useSpring, config, useTrail } from '@react-spring/web';
import { FiChevronDown } from "react-icons/fi";

export default function Intro({
  mainTitle,
  firstSubTitle,
  secondSubTitle,
  lastSubTitle,
  scrollDown,
}: any) {

  const { scrollYProgress } = useScroll();

  return (
    <article className={introStyles.intro}>
      <div className={introStyles.container}>

        <animated.div style={{ ...mainTitle }} className={introStyles.title}>
          <div className={introStyles.title_container}>
            <strong className={introStyles.sub_title}>
              <span>함께 </span>
              <span>만들고</span>
              <span> 성장하는 즐거움</span>
              <span>을 알아요</span>
            </strong>
            <div className={introStyles.logo}>
              <Logo pathStyle={introStyles.st1} />
            </div>
          </div>
        </animated.div>

        <div className={introStyles.description}>
          <div className={introStyles.first}>

            <animated.div style={{ ...firstSubTitle }}>
              <strong className={introStyles.primary_color}>서비스</strong>
              <span>라는 하나의 목표를 추구합니다.</span>
            </animated.div>

            <animated.div style={{ ...secondSubTitle }}>
              <strong className={introStyles.gray_color}>회색지대로부터 배우는</strong>
              <span>개발자 이윤화입니다.</span>
            </animated.div>
          </div>
          <animated.div style={{ ...lastSubTitle }} className={introStyles.last}>
            <div>좀 더 넓은 시각으로 탐구하고 성장합니다.</div>
          </animated.div>
        </div>


        <animated.div style={{ ...scrollDown }} className={introStyles.scroll_guide}>
          <div>Please Scroll Down</div>
          <div className={introStyles.scroll_dwn_icon}>
            <FiChevronDown />
          </div>
        </animated.div>

        <animated.div style={{
          opacity: scrollYProgress.to(scrollP => {
            let result = 1;

            if (scrollP > 0.04) {
              result = 0.5 - scrollP;
            }

            if (scrollP > 0.1) {
              result = 0;
            }

            return result;
          })
        }} className={introStyles.bg_moving_text}></animated.div>
      </div>
    </article>
  )
}