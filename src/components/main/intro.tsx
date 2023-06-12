import React from "react";
import * as introStyles from "../../styles/components/main/Intro.module.scss";
import Logo from "./logo";
import { useScroll, animated, useSprings, config } from '@react-spring/web';
import { FiChevronDown } from "react-icons/fi";


export default function Intro({ introScrollRestoration }: any) {

  const { scrollYProgress } = useScroll({
    default: {
      immediate: true,
    }
  });

  const [title, titleApi] = useSprings(1,
    () => ({
      from: {
        opacity: 0,
        transform: 'translateY(20px)'
      },
      to: {
        opacity: 1,
        transform: 'translateY(0px)'
      },
      config: config.molasses,
      delay: 300,
    }), [])

  const [desc, descApi] = useSprings(1,
    () => ({
      from: {
        opacity: 0,
        transform: 'translateY(20px)'
      },
      to: {
        opacity: 1,
        transform: 'translateY(0px)'
      },
      config: config.molasses,
      delay: 800,
    }), [])

  const [flowUpText, flowUpTextApi] = useSprings(1,
    () => ({
      from: {
        transform: 'translateY(35px)'
      },
      to: {
        transform: 'translateY(5px)'
      },
      delay: 2300,
    }), [])

  const [flowUpDescText, flowUpDescTextApi] = useSprings(1,
    () => ({
      from: {
        transform: 'translateY(40px)',
      },
      to: {
        transform: 'translateY(0px)',
      },
      delay: 3000,
    }), [])

  const [scrollDown, scrollDownApi] = useSprings(1,
    () => ({
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      },
      delay: 3500,
    })
  )

  return (
    <animated.article className={introStyles.intro}
      style={{
        opacity: scrollYProgress.to(scrollP => {
          let value = 1;
          if (scrollP > 0.05) {
            value = value - scrollP;
          }
          return value;
        })
      }}
      {...introScrollRestoration}>
      <div className={introStyles.container}>

        {title.map((props, idx) => (
          <animated.div className={introStyles.title} style={props} key={idx}>
            <div className={introStyles.title_container}>
              <strong className={introStyles.sub_title}>
                <span>함께 </span>
                <span>만들고</span>
                <span> 성장하는 즐거움</span>
                <span>을 알아요</span>
              </strong>
              <div className={introStyles.logo}>
                <Logo />
              </div>
            </div>
          </animated.div>
        ))}

        {desc.map((props, idx) => (
          <animated.div className={introStyles.description} style={props} key={idx}>
            <div className={introStyles.first}>
              <div>
                <strong className={introStyles.primary_color}>서비스</strong>
                <span>라는 단 하나의 목표를 추구하는</span>
              </div>
              <div>
                <strong className={introStyles.gray_color}>회색 영역 이 없는</strong>
                {flowUpText.map((props, idx) => (
                  <animated.span style={props} key={idx}>개발자 이윤화입니다.</animated.span>
                ))}
              </div>
            </div>
            <div className={introStyles.last}>
              {flowUpDescText.map((props, idx) => (
                <animated.div style={props} key={idx}>좀 더 넓은 시각으로 탐구하고 성장합니다.</animated.div>
              ))}
            </div>
          </animated.div>
        ))}

        {scrollDown.map((props, idx) => (
          <animated.div className={introStyles.scroll_guide} style={props} key={idx}>
            <div>Please Scroll Down</div>
            <div className={introStyles.scroll_dwn_icon}>
              <FiChevronDown />
            </div>
          </animated.div>
        ))}
        <div className={introStyles.bg_moving_text}></div>
      </div>
    </animated.article>
  )
}