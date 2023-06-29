import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { animated } from '@react-spring/web';
import * as companyStyles from "../../styles/components/main/Company.module.scss";
import { Link } from "gatsby";

export default function Company({ springStyle }: any) {

  return (
    <animated.div style={springStyle} className={companyStyles.company}>

      <div className={companyStyles.company_info}>
        <div className={companyStyles.logo}>
          <StaticImage width={500} src="../../../static/images/thecamp_logo.jpg" alt="THE CAMP" />
        </div>
        <div className={companyStyles.container}>
          <div className={companyStyles.app}>
            <a className={companyStyles.app_store} href="https://apps.apple.com/kr/app/the-camp/id1364855523" target="_blank"></a>
            <a className={companyStyles.google_play} href="https://play.google.com/store/apps/details?id=com.enabledaonsoft.thecamp" target="_blank"></a>
          </div>
          <div className={companyStyles.title}>
            <div className={companyStyles.text}>더 캠프</div>
            <div className={companyStyles.duration}>21/09 - 23/02</div>
          </div>

          <div className={companyStyles.my_work}>UI 개발 / 퍼블리싱</div>
        </div>
      </div>

      <div className={companyStyles.company_desc}>
        <div className={companyStyles.name}>@인에이블다온소프트 / 더 캠프</div>
        <div className={companyStyles.content}>
          더캠프는 대한민국 육군을 위한 위문편지 서비스입니다. <br />
          보고싶은 군인을 등록하여 신병 훈련기간 동안 인터넷 위문편지를 주고 받을 수 있습니다. <br />
          전역일 계산기(D-Day) / 식단 / 훈련소와 사단별 공지사항 및 훈련소 사진과 토크 게시판을 제공합니다.<br />
        </div>

        <div className={companyStyles.service_tech}>
          <div className={companyStyles.title}>서비스 기술 스택</div>
          <div className={companyStyles.tech_desc}>
            JAVA / Spring 프레임워크 기반의 JPA를 이용한 웹 어플리케이션 / 하이브리드 모바일 앱.<br />
          </div>
        </div>

        <div className={companyStyles.my_tech}>
          <div className={companyStyles.title}>퍼블리싱 기술 스택</div>
          <div>
            HTML5(JSP) / CSS3 / Javascript(ES6) / JSTL / jQuery를 이용한 Ajax
          </div>
        </div>

        <div className={companyStyles.dev_env}>
          <div className={companyStyles.title}>개발 환경</div>
          <div>intelliJ / VSCode / Git Fork (Git GUI) / Mac</div>
        </div>

        <div className={companyStyles.co_work_tool}>
          <div className={companyStyles.title}>협업 툴</div>
          <div>Figma / Notion / Slack</div>
        </div>

      </div>


    </animated.div>
  )
}