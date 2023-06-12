import React from "react";
import * as introStyles from "../../styles/components/main/Intro.module.scss";
import Logo from "./logo";

export default function Intro({ introScrollRestoration }: any) {
  return (
    <article className={introStyles.intro} {...introScrollRestoration}>
      <div className={introStyles.container}>
        <div className={introStyles.title}>
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
        </div>
        <div className={introStyles.description}>
          <div className={introStyles.first}>
            <div>
              <strong className={introStyles.primary_color}>서비스</strong>
              <span>라는 단 하나의 목표를 추구하는</span>
            </div>
            <div>
              <strong className={introStyles.gray_color}>회색 영역 이 없는</strong>
              <span> 개발자 이윤화입니다.</span>
            </div>
          </div>
          <div className={introStyles.last}>
            <div>미지의 영역을 탐구하고 새로운 것을 배우고 도전하는 과정을 사랑(💙)합니다.</div>
            <div>백엔드 / 프론트 / 디자인 / 마케팅 등</div>
            <div>서로의 의견을 제시하고 맞춰갔던 지난 경험들에 기반하여</div>
            <div>좀 더 넓은 시각으로 서비스를 바라봅니다.</div>
          </div>
        </div>
        <div className={introStyles.scroll_guide}>Scroll Down</div>
        <div className={introStyles.bg_moving_text}></div>
      </div>
    </article>
  )
}