import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
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
            <div className={aboutStyles.first_text}>First Text</div>
            <div className={aboutStyles.second_text}>Second Text</div>
          </div>
        </div>
        <div className={aboutStyles.content}>
          <div className={aboutStyles.content_title}>
            <span>ABOUT</span>
            <Logo />
          </div>
          <div className={aboutStyles.content_desc}>About Content Text</div>
          <div className={aboutStyles.download_link}>
            <Link to="/">
              <span>Icon</span>
              <span>이력서 다운받기</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}