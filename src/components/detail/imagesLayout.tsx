import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as imagesLayoutStyle from "../../styles/components/detail/ImagesLayout.module.scss";

export default function ImagesLayout() {
  return (
    <div className={imagesLayoutStyle.images_layout}>
      <div className={imagesLayoutStyle.image_container}>
        <div className={imagesLayoutStyle.preview}>
          <StaticImage src="../../../static/images/thecamp_01.png" alt="preview image" />
        </div>
        <div className={imagesLayoutStyle.preview}>
          <StaticImage src="../../../static/images/thecamp_01.png" alt="preview image" />
        </div>
      </div>
      <div className={imagesLayoutStyle.content_container}>
        <div>content_01</div>
        <div>content_02</div>
      </div>
    </div>
  );
}