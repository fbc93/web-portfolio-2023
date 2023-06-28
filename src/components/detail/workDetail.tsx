import { Link } from "gatsby";
import React from "react"
import * as workDetailStyles from "../../styles/components/detail/WorkDetail.module.scss";
import ProjectTitleCard from "./card";
import GoBackBtn from "./goBackBtn";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import ImageLayout from "./imageLayout";
import ImagesLayout from "./imagesLayout";
import NextWorkList from "./nextWorkList";
import missSoldierCardRenewalGif from '../../../static/images/miss-soldier-card-renewal.gif';
import recommendCelebSoldierGif from '../../../static/images/recommend-celeb-soldier.gif';
import offerwallPointGif from '../../../static/images/offerwall-point.gif';
import uiRenewalGif from '../../../static/images/ui-renewal.gif';
import campMallCafe24MobileGif from '../../../static/images/camp-mall-cafe24-mobile.gif';

interface IWorkDetailProps {
  data: Queries.WorkDetailQuery;
}

export default function WorkDetail({ data }: IWorkDetailProps) {
  const cardImage = data.mdx?.frontmatter?.cardImage;

  return (
    <article className={workDetailStyles.work_detail}>
      <div className={workDetailStyles.container}>
        <div className={workDetailStyles.preview}>
          {cardImage === "miss-soldier-card-renewal" && <img src={missSoldierCardRenewalGif} alt="보고싶은군인 카드 리뉴얼" />}
          {cardImage === "recommend-celeb-soldier" && <img src={recommendCelebSoldierGif} alt="추천 스타군인" />}
          {cardImage === "offerwall-point" && <img src={offerwallPointGif} alt="오퍼월 포인트 획득" />}
          {cardImage === "ui-renewal" && <img src={uiRenewalGif} alt="UI 화면 개선" />}
          {cardImage === "camp-mall-cafe24-mobile" && <img src={campMallCafe24MobileGif} alt="캠프몰(카페24)" />}
        </div>
        <ProjectTitleCard data={data} />
      </div>

      <ImageLayout data={data} />

      {data.mdx?.frontmatter?.imagesLayout_01_image != null && (
        <ImagesLayout data={data} />
      )}

      <NextWorkList data={data} />
    </article>
  )
}