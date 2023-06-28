import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as imageLayoutStyle from "../../styles/components/detail/ImageLayout.module.scss";
import { useScroll, animated, useSprings, useSpring, config, useTrail } from '@react-spring/web';

interface IImageLayoutProps {
  data: Queries.WorkDetailQuery;
  layoutPreviewFirst: any;
  layoutContentImgFirst: any;
  layoutContentTextFirst: any;
  layoutPreviewLast: any;
  layoutContentImgLast: any;
  layoutContentTextLast: any;
}

export default function ImageLayout({ data, layoutPreviewFirst, layoutContentImgFirst, layoutContentTextFirst, layoutPreviewLast, layoutContentImgLast, layoutContentTextLast }: IImageLayoutProps) {
  return (
    <div className={imageLayoutStyle.image_layout_container}>
      <div className={imageLayoutStyle.image_layout}>

        <animated.div className={imageLayoutStyle.preview} style={{ ...layoutPreviewFirst }}>
          <GatsbyImage image={data.mdx?.frontmatter?.imageLayout_01_image?.childImageSharp?.gatsbyImageData as any} alt="preview image" />
        </animated.div>

        <div className={imageLayoutStyle.content_container}>
          <animated.div style={{ ...layoutContentImgFirst }}>
            <GatsbyImage image={data.mdx?.frontmatter?.imageLayout_01_image_big?.childImageSharp?.gatsbyImageData as any} alt="preview image" />
          </animated.div>
          <animated.div style={{ ...layoutContentTextFirst }}>
            {data.mdx?.frontmatter?.imageLayout_01_content}
          </animated.div>
        </div>

      </div>
      <div className={imageLayoutStyle.image_layout}>

        <animated.div className={imageLayoutStyle.preview} style={{ ...layoutPreviewLast }}>
          <GatsbyImage image={data.mdx?.frontmatter?.imageLayout_02_image?.childImageSharp?.gatsbyImageData as any} alt="preview image" />
        </animated.div>

        <div className={imageLayoutStyle.content_container}>
          <animated.div style={{ ...layoutContentImgLast }}>
            <GatsbyImage image={data.mdx?.frontmatter?.imageLayout_02_image_big?.childImageSharp?.gatsbyImageData as any} alt="preview image" />
          </animated.div>
          <animated.div style={{ ...layoutContentTextLast }}>
            {data.mdx?.frontmatter?.imageLayout_02_content}
          </animated.div>
        </div>

      </div>
    </div>
  )
}