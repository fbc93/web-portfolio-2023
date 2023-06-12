import { Link } from "gatsby";
import React from "react";
import * as aboutStyles from "../../styles/components/main/About.module.scss";

export default function About({ aboutScrollRestoration }: any) {
  return (
    <article className={aboutStyles.about} {...aboutScrollRestoration}>
      <div className={aboutStyles.visual}>
        <div className={aboutStyles.profile}>
          <div>
            Profile Image
          </div>
        </div>
        <strong className={aboutStyles.animation_text}>
          <span className={aboutStyles.screen_out}>About ME</span>
          <div className={aboutStyles.first_text}>First Text</div>
          <div className={aboutStyles.second_text}>Second Text</div>
        </strong>
      </div>
      <div className={aboutStyles.content}>
        <strong className={aboutStyles.content_title}>Content Title</strong>
        <div className={aboutStyles.content_desc}>About Content Text</div>
      </div>
      <div className={aboutStyles.download_link}>
        <Link to="/">
          <span>Icon</span>
          <span>이력서 다운받기</span>
        </Link>
      </div>
    </article>
  )
}