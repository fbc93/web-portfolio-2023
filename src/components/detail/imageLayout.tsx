import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as imageLayoutStyle from "../../styles/components/detail/ImageLayout.module.scss";

export default function ImageLayout() {
  return (
    <div className={imageLayoutStyle.image_layout_container}>
      <div className={imageLayoutStyle.image_layout}>
        <div className={imageLayoutStyle.preview}>
          <StaticImage src="../../../static/images/thecamp_01.png" alt="preview image" />
        </div>
        <div className={imageLayoutStyle.content_container}>
          <div className={imageLayoutStyle.top}>Content 01</div>
          <div className={imageLayoutStyle.bottom}>Content 02</div>
        </div>
      </div>
      <div className={imageLayoutStyle.image_layout}>
        <div className={imageLayoutStyle.preview}>
          <StaticImage src="../../../static/images/thecamp_01.png" alt="preview image" />
        </div>
        <div className={imageLayoutStyle.content_container}>
          <div className={imageLayoutStyle.top}>Content 01</div>
          <div className={imageLayoutStyle.bottom}>Content 02</div>
        </div>
      </div>
    </div>
  )
}