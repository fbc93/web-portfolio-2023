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
          <div className={imageLayoutStyle.top}>


          </div>
          <div className={imageLayoutStyle.bottom}>
            해당 업무는 마케팅 담당자가 요청하는 경우가 많아서, 템플릿을 한 곳에서 확인할 수 있는 사이트를 별도로 만들었습니다. 담당자는 기존의 요청과 산출물을 다시 볼 수 있어 활용이 쉬워지고, 개발자는 히스토리를 쉽게 관리할 수 있게 되었습니다.
          </div>
        </div>
      </div>
      <div className={imageLayoutStyle.image_layout}>
        <div className={imageLayoutStyle.preview}>
          <StaticImage src="../../../static/images/thecamp_01.png" alt="preview image" />
        </div>
        <div className={imageLayoutStyle.content_container}>
          <div className={imageLayoutStyle.top}>Content 01</div>
          <div className={imageLayoutStyle.bottom}>
            해당 업무는 마케팅 담당자가 요청하는 경우가 많아서, 템플릿을 한 곳에서 확인할 수 있는 사이트를 별도로 만들었습니다. 담당자는 기존의 요청과 산출물을 다시 볼 수 있어 활용이 쉬워지고, 개발자는 히스토리를 쉽게 관리할 수 있게 되었습니다.
          </div>
        </div>
      </div>
    </div>
  )
}