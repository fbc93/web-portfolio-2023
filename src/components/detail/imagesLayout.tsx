import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as imagesLayoutStyle from "../../styles/components/detail/ImagesLayout.module.scss";

interface IImagesLayoutProps {
  data: Queries.WorkDetailQuery;
}

export default function ImagesLayout({ data }: IImagesLayoutProps) {
  return (
    <div className={imagesLayoutStyle.images_layout}>
      <div className={imagesLayoutStyle.image_container}>
        <div className={imagesLayoutStyle.preview}>
          <GatsbyImage image={data.mdx?.frontmatter?.imagesLayout_01_image?.childImageSharp?.gatsbyImageData as any} alt="preview image" />
        </div>
        <div className={imagesLayoutStyle.preview}>
          <GatsbyImage image={data.mdx?.frontmatter?.imagesLayout_02_image?.childImageSharp?.gatsbyImageData as any} alt="preview image" />
        </div>
      </div>
      <div className={imagesLayoutStyle.content_container}>

        {data.mdx?.frontmatter?.imagesLayout_01_content != null && (
          <div>{data.mdx?.frontmatter?.imagesLayout_01_content}</div>
        )}

        {data.mdx?.frontmatter?.imagesLayout_01_content === null && (
          <GatsbyImage image={data.mdx.frontmatter.imagesLayout_01_content_image?.childImageSharp?.gatsbyImageData as any} alt="preview image" />
        )}

        <div>{data.mdx?.frontmatter?.imagesLayout_02_content}</div>
      </div>
    </div>
  );
}