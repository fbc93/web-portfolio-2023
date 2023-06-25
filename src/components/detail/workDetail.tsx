import { Link } from "gatsby";
import React from "react"
import * as workDetailStyles from "../../styles/components/detail/WorkDetail.module.scss";
import ProjectTitleCard from "./card";
import GoBackBtn from "./goBackBtn";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import ImageLayout from "./imageLayout";
import ImagesLayout from "./imagesLayout";
import NextWorkList from "./nextWorkList";
interface IWorkDetailProps {
  data: Queries.WorkDetailQuery;
  previewImage: any;
}

export default function WorkDetail({ data, previewImage }: IWorkDetailProps) {
  return (
    <article className={workDetailStyles.work_detail}>
      <GoBackBtn />
      <div className={workDetailStyles.container}>
        <div className={workDetailStyles.preview}>
          <GatsbyImage image={previewImage} alt="preview image" />
        </div>
        <ProjectTitleCard data={data} />
      </div>
      <ImageLayout />
      <ImageLayout />
      <ImagesLayout />
      <NextWorkList data={data} />
    </article>
  )
}