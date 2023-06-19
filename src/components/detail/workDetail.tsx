import { Link } from "gatsby";
import React from "react"
import * as workDetailStyles from "../../styles/components/detail/WorkDetail.module.scss";
import ProjectTitleCard from "./card";
import GoBackBtn from "./goBackBtn";
import { StaticImage } from "gatsby-plugin-image";
import ImageLayout from "./imageLayout";
import ImagesLayout from "./imagesLayout";
import NextWorkList from "./nextWorkList";

export default function WorkDetail() {
  return (
    <article className={workDetailStyles.work_detail}>
      <GoBackBtn />
      <div className={workDetailStyles.container}>
        <div className={workDetailStyles.preview}>
          <StaticImage src="../../../static/images/thecamp_01.png" alt="preview image" />
        </div>
        <ProjectTitleCard />
      </div>
      <ImageLayout />
      <ImageLayout />
      <ImagesLayout />
      <NextWorkList />
    </article>
  )
}