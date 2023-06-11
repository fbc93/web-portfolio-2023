import React from "react";
import * as introStyles from "../../styles/components/main/Intro.module.scss";

export default function Intro() {
  return (
    <article className={introStyles.intro}>
      <div className={introStyles.container}>
        <div className={introStyles.title}>
          <div className={introStyles.title_container}>
            <strong>Sub Title</strong>
            <div>Main Logo</div>
          </div>
        </div>
        <div className={introStyles.description}>
          intro description
        </div>
        <div className={introStyles.scroll_guide}>Scroll Down</div>
        <div className={introStyles.bg_moving_text}></div>
      </div>
    </article>
  )
}