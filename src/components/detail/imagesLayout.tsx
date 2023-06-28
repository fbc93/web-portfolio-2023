import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import * as imagesLayoutStyle from "../../styles/components/detail/ImagesLayout.module.scss";
import { useScroll, animated, useSprings, useSpring, config, useTrail } from '@react-spring/web';

interface IImagesLayoutProps {
  data: Queries.WorkDetailQuery;
  imagesLayoutPreviewFirst: any;
  imagesLayoutPreviewLast: any;
  imagesLayoutContent: any;
}

export default function ImagesLayout({ data, imagesLayoutPreviewFirst, imagesLayoutPreviewLast, imagesLayoutContent }: IImagesLayoutProps) {
  return (
    <div className={imagesLayoutStyle.images_layout}>
      <div className={imagesLayoutStyle.image_container}>

        <animated.div className={imagesLayoutStyle.preview} style={{ ...imagesLayoutPreviewFirst }}>
          <GatsbyImage image={data.mdx?.frontmatter?.imagesLayout_01_image?.childImageSharp?.gatsbyImageData as any} alt="preview image" />
        </animated.div>

        <animated.div className={imagesLayoutStyle.preview} style={{ ...imagesLayoutPreviewLast }}>
          <GatsbyImage image={data.mdx?.frontmatter?.imagesLayout_02_image?.childImageSharp?.gatsbyImageData as any} alt="preview image" />
        </animated.div>

      </div>

      <animated.div className={imagesLayoutStyle.content_container} style={{ ...imagesLayoutContent }}>
        {data.mdx?.frontmatter?.imagesLayout_01_content != null && (
          <div className={imagesLayoutStyle.text}>{data.mdx?.frontmatter?.imagesLayout_01_content}</div>
        )}

        {data.mdx?.frontmatter?.imagesLayout_01_content === null && (
          <GatsbyImage image={data.mdx.frontmatter.imagesLayout_01_content_image?.childImageSharp?.gatsbyImageData as any} alt="preview image" />
        )}

        <div>{data.mdx?.frontmatter?.imagesLayout_02_content}</div>
      </animated.div>

    </div>
  );
}