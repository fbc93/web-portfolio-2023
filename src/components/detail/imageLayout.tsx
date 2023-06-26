import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as imageLayoutStyle from "../../styles/components/detail/ImageLayout.module.scss";

interface IImageLayoutProps {
  data: Queries.WorkDetailQuery;
}

export default function ImageLayout({ data }: IImageLayoutProps) {
  return (
    <div className={imageLayoutStyle.image_layout_container}>
      <div className={imageLayoutStyle.image_layout}>
        <div className={imageLayoutStyle.preview}>
          <GatsbyImage image={data.mdx?.frontmatter?.imageLayout_01_image?.childImageSharp?.gatsbyImageData as any} alt="preview image" />
        </div>
        <div className={imageLayoutStyle.content_container}>
          <div>
            <GatsbyImage image={data.mdx?.frontmatter?.imageLayout_01_image_big?.childImageSharp?.gatsbyImageData as any} alt="preview image" />
          </div>
          <div>
            {data.mdx?.frontmatter?.imageLayout_01_content}
          </div>
        </div>
      </div>
      <div className={imageLayoutStyle.image_layout}>
        <div className={imageLayoutStyle.preview}>
          <GatsbyImage image={data.mdx?.frontmatter?.imageLayout_02_image?.childImageSharp?.gatsbyImageData as any} alt="preview image" />
        </div>
        <div className={imageLayoutStyle.content_container}>
          <div>
            <GatsbyImage image={data.mdx?.frontmatter?.imageLayout_02_image_big?.childImageSharp?.gatsbyImageData as any} alt="preview image" />
          </div>
          <div>
            {data.mdx?.frontmatter?.imageLayout_02_content}
          </div>
        </div>
      </div>
    </div>
  )
}