import React from "react";
import * as introStyles from "../../styles/components/main/Intro.module.scss";
import Logo from "./logo";
import { useScroll, animated, useSprings, useSpring, config, useTrail } from '@react-spring/web';
import { FiChevronDown } from "react-icons/fi";


export default function Intro() {

  const [mainTitle, mainTitleApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: "translateY(30px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)"
    },
    config: config.stiff,
  }))

  const [firstSubTitle, firstSubTitleApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: "translateY(30px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)"
    },
    config: config.stiff,
    delay: 500,
  }))

  const [secondSubTitle, secondSubTitleApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: "translateY(30px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)"
    },
    config: config.stiff,
    delay: 1000,
  }))

  const [lastSubTitle, lastSubTitleApi] = useSpring(() => ({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1
    },
    config: config.molasses,
    delay: 1800,
  }))

  const [scrollDown, scrollDownApi] = useSpring(() => ({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1
    },
    config: config.stiff,
    delay: 2200,
  }))

  const [movingBg, movingBgApi] = useSpring(() => ({
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
    config: config.molasses,
  }))



  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      //console.log(scrollYProgress)

      if (scrollYProgress < 0.03) {
        mainTitleApi.start({
          opacity: 1,
          transform: "translateY(0px)"
        })

        firstSubTitleApi.start({
          opacity: 1,
          transform: "translateY(0px)",
          delay: 500,
        })

        secondSubTitleApi.start({
          opacity: 1,
          transform: "translateY(0px)",
          delay: 1000,
        })

        lastSubTitleApi.start({
          opacity: 1,
          delay: 1800,
        })

        scrollDownApi.start({
          opacity: 1,
          delay: 2200,
        })

        movingBgApi.start({
          opacity: 1,
        })


      } else {
        mainTitleApi.start({
          opacity: 0,
          transform: "translateY(30px)",
        })

        firstSubTitleApi.start({
          opacity: 0,
          transform: "translateY(30px)",
        })

        secondSubTitleApi.start({
          opacity: 0,
          transform: "translateY(30px)",
        })

        lastSubTitleApi.start({
          opacity: 0,
        })

        scrollDownApi.start({
          opacity: 0,
        })

        movingBgApi.start({
          opacity: 0,
        })

      }
    },
    default: {
      immediate: true,
    }
  })

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