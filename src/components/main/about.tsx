import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FiDownload } from "react-icons/fi";
import * as aboutStyles from "../../styles/components/main/About.module.scss";
import Logo from "./logo";

export default function About({ aboutScrollRestoration }: any) {
  return (
    <article className={aboutStyles.about} {...aboutScrollRestoration}>
      <div className={aboutStyles.container}>
        <div className={aboutStyles.visual}>
          <div className={aboutStyles.profile}>
            <div className={aboutStyles.left}>
              <StaticImage height={600} src="../../../static/images/profile_01.jpg" alt="profile image" />
            </div>
            <div className={aboutStyles.right}>
              <StaticImage height={600} src="../../../static/images/profile_03.jpg" alt="profile image" />
              <StaticImage height={600} src="../../../static/images/profile_02.jpg" alt="profile image" />
            </div>
          </div>
          <div className={aboutStyles.animation_text}>
            <div className={aboutStyles.screen_out}>About Younhwa</div>
            <div className={aboutStyles.first_text}>I'm Learn From </div>
            <div className={aboutStyles.second_text}>GRAY ZONE</div>
          </div>
        </div>
        <div className={aboutStyles.content}>
          <div className={aboutStyles.content_title}>
            <span>ABOUT_</span>
            <Logo />
          </div>
          <div className={aboutStyles.content_desc}>
            <p>
              안녕하세요, UI 개발 & 웹 퍼블리싱 / 신입 FE 개발 지원자 이윤화입니다. <br />
              좋은 서비스라는 하나의 목표를 위하는 마음으로 경계없이 배우고 일합니다. <br />
              백엔드 / 프론트 / 디자이너 / 기획자(PM)와 한 팀으로 협업하며 퍼블리싱 1인 담당자로서 근무했습니다.
            </p>
            <p>개발자와 UI 디자이너 사이에서 작업에 대한 커뮤니케이션을 지속적으로 진행하여 두 가지 직무에 대한 높은 이해도를 기반으로 프로젝트를 진행했으며, 자사 서비스 웹앱 / 어드민 / 카페24 쇼핑몰 퍼블리싱 경험을 바탕으로 반응형 스타일과 크로스 플랫폼 / 브라우징 작업에 능숙합니다.</p>
            <p>FE 개발자와 협업하여 앱 내에 외부 광고를 붙이거나 화면에 대한 케이스 분석을 함께 진행했으며, 하우스 개발자뿐만 아니라 외주 업체 개발자들과의 2주 단위 스프린트 프로젝트를 통해 백로그를 작성하여 작업을 기록하고 공유하는 워크플로우를 경험했습니다.</p>
            <p>회사 업무 외에 개인적인 자기계발을 통해 React와 Typescript를 배웠으며, 프레임워크 컴포넌트 단위의 마크업과 스타일 작업을 할 수 있습니다.</p>
          </div>
          <div className={aboutStyles.download_link}>
            <Link to="/">
              <FiDownload />
              <span>자기소개 자세히 보기</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}