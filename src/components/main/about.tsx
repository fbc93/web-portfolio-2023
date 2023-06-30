import { Link } from "gatsby";
import React, { useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FiDownload } from "react-icons/fi";
import { useTrail, useSprings, useScroll, animated, config } from '@react-spring/web';
import * as aboutStyles from "../../styles/components/main/about.module.scss";
import Logo from "./logo";
interface IAboutProps {
  profile: any[];
  subTitle: any[];
  trail: any[];
  words: string[];
  contentTitle: any[];
  contentDesc: any[];
  downloadBtn: any[];
}

export default function About({
  profile,
  subTitle,
  trail,
  words,
  contentTitle,
  contentDesc,
  downloadBtn
}: IAboutProps) {

  return (
    <article className={aboutStyles.about}>
      <div className={aboutStyles.container}>
        <div className={aboutStyles.visual}>
          {profile.map((props, idx) => (
            <animated.div className={aboutStyles.profile} style={props} key={idx}>
              <StaticImage height={600} src="../../../static/images/profile_01.jpg" alt="profile image" />
            </animated.div>
          ))}
          <div className={aboutStyles.animation_text}>
            <strong className="screen_out">About Younhwa</strong>

            {subTitle.map((props, idx) => (
              <animated.div className={aboutStyles.first_text} style={props} key={idx}>Learning From </animated.div>
            ))}

            <animated.div className={aboutStyles.second_text}>
              {trail.map(({ opacity, rotateX }, idx) => (
                <div key={idx}>
                  <animated.span
                    key={words[idx]}
                    style={{
                      opacity: opacity.to((value: number) => `${value}`),
                      transform: rotateX.to((value: number) => `perspective(600px) rotateX(${value}deg)`),
                      transformStyle: 'preserve-3d',
                    }}
                  >{'?'}</animated.span>
                  <animated.span
                    style={{
                      opacity: opacity.to((value: number) => `${value}`),
                      transform: rotateX.to((value: number) => `perspective(600px) rotateX(${180 - value}deg)`),
                      transformStyle: 'preserve-3d',
                    }}
                  >{words[idx]}</animated.span>
                </div>
              ))}
            </animated.div>

          </div>
        </div>
        <div className={aboutStyles.content}>

          {contentTitle.map((props, idx) => (
            <animated.div className={aboutStyles.content_title} style={props} key={idx}>
              <span>ABOUT.</span>
              <Logo />
            </animated.div>
          ))}

          {contentDesc.map((props, idx) => (
            <animated.div className={aboutStyles.content_desc} style={props} key={idx}>
              <p>
                안녕하세요, 웹 퍼블리셔 / 신입 FE 개발 지원자 이윤화입니다. <br />
                문제를 정의하고 해결하는 재미로 UI 개발을 시작하게되었습니다.
                업무의 회색지대를 적극적으로 인지하여 경계없이 성장하고, 다양한 직군의 동료들과 함께 작업할 수 있습니다.
              </p>
              <p>직무가 다른 작업자 사이의 꼼꼼한 커뮤니케이션을 가장 중요하게 생각합니다. 자사 서비스(모바일 웹앱/PC) / 백오피스 / 카페24 쇼핑몰의 퍼블리싱 신규개발 및 유지보수에 참여했고, 2주 단위의 스프린트를 통해 백로그를 작성하여 작업을 기록하고 공유하는 워크플로우를 경험했습니다.</p>
              <p>회사 업무 외에 지속적인 자기계발을 통해 React와 Typescript를 익혔으며, 프레임워크 컴포넌트 단위의 마크업과 스타일 작업을 할 수 있습니다.</p>
            </animated.div>
          ))}

          {/* {downloadBtn.map((props, idx) => (
            <animated.div className={aboutStyles.download_link} style={props} key={idx}>
              <Link to="/">
                <FiDownload />
                <span>자기소개 자세히 보기</span>
              </Link>
            </animated.div>
          ))} */}
        </div>
      </div>
    </article>
  )
}