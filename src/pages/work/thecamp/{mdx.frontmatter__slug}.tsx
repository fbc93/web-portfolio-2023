import { graphql } from "gatsby";
import React from "react";
import Layout from "../../../components/layout";
import { SEO } from "../../../components/seo";
import WorkDetail from "../../../components/detail/workDetail";
import Footer from "../../../components/layout/footer";
import { useScroll, animated, useSprings, useSpring, config, useTrail } from '@react-spring/web';

interface IWorkItemDetailProps {
  data: Queries.WorkDetailQuery;
}

export default function WorkItemDetail({ data }: IWorkItemDetailProps) {
  const containerRef = React.useRef<HTMLDivElement>(null!)

  //preview useSpring
  const [preview, previewApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: "translateY(30px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)"
    },
    config: {
      easing: 10
    },
  }))

  //subTitle useSpring
  const [subTitle, subTitleApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: "translateY(30px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)"
    },
    config: {
      easing: 10
    },
    delay: 200,
  }))

  //title useSpring
  const [title, titleApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: "translateY(30px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)"
    },
    config: {
      easing: 10
    },
    delay: 400,
  }))

  //category useSpring
  const [category, categoryApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: "translateY(30px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)"
    },
    config: {
      easing: 10
    },
    delay: 600,
  }))

  //team useSpring
  const [team, teamApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: "translateY(30px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)"
    },
    config: {
      easing: 10
    },
    delay: 800,
  }))

  //team useSpring
  const [desc, descApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: "translateY(30px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)"
    },
    config: {
      easing: 10
    },
    delay: 1000,
  }))

  //image layout
  const [layoutPreviewFirst, layoutPreviewFirstApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: "translateY(30px)"
    },
    config: {
      easing: 10
    },
  }))

  const [layoutContentImgFirst, layoutContentImgFirstApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: "translateY(30px)"
    },
    config: {
      easing: 10
    },
    delay: 200,
  }))

  const [layoutContentTextFirst, layoutContentTextFirstApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: "translateY(30px)"
    },
    config: {
      easing: 10
    },
    delay: 400,
  }))

  const [layoutPreviewLast, layoutPreviewLastApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: "translateY(30px)"
    },
    config: {
      easing: 10
    },
    delay: 600,
  }))

  const [layoutContentImgLast, layoutContentImgLastApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: "translateY(30px)"
    },
    config: {
      easing: 10
    },
    delay: 800,
  }))

  const [layoutContentTextLast, layoutContentTextLastApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: "translateY(30px)"
    },
    config: {
      easing: 10
    },
    delay: 1000,
  }))


  //images layout
  const [imagesLayoutPreviewFirst, imagesLayoutPreviewFirstApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: "translateY(30px)"
    },
    config: {
      easing: 10
    },
  }))

  const [imagesLayoutPreviewLast, imagesLayoutPreviewLastApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: "translateY(30px)"
    },
    config: {
      easing: 10
    },
    delay: 200,
  }))

  const [imagesLayoutContent, imagesLayoutContentApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: "translateY(30px)"
    },
    config: {
      easing: 10
    },
    delay: 400,
  }))

  const [nextWorkItems, nextWorkItemsApi] = useSpring(() => ({
    from: {
      opacity: 0,
    },
    config: config.molasses,
  }))

  const [nextWorkListTrail, nextWorkListTrailApi] = useTrail(
    4,
    () => ({
      opacity: 0,
      x: -70,
      config: config.molasses,
      delay: 500,
    }), []);



  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      console.log("index___", scrollYProgress);

      // Preview
      if (scrollYProgress >= 0 && scrollYProgress <= 0.3) {
        previewApi.start({
          opacity: 1,
          transform: "translateY(0px)"
        })

        subTitleApi.start({
          opacity: 1,
          transform: "translateY(0px)",
          delay: 200,
        })

        titleApi.start({
          opacity: 1,
          transform: "translateY(0px)",
          delay: 400,
        })

        categoryApi.start({
          opacity: 1,
          transform: "translateY(0px)",
          delay: 600,
        })

        teamApi.start({
          opacity: 1,
          transform: "translateY(0px)",
          delay: 800,
        })

        descApi.start({
          opacity: 1,
          transform: "translateY(0px)",
          delay: 1000,
        })

      } else {
        previewApi.start({
          opacity: 0,
          transform: "translateY(30px)"
        })

        subTitleApi.start({
          opacity: 0,
          transform: "translateY(30px)"
        })

        titleApi.start({
          opacity: 0,
          transform: "translateY(30px)"
        })

        categoryApi.start({
          opacity: 0,
          transform: "translateY(30px)"
        })

        teamApi.start({
          opacity: 0,
          transform: "translateY(30px)"
        })

        descApi.start({
          opacity: 0,
          transform: "translateY(30px)"
        })
      }

      //image layout
      if (scrollYProgress >= 0 && scrollYProgress <= 0.6) {

        layoutPreviewFirstApi.start({
          opacity: 1,
          transform: "translateY(0px)",
        })

        layoutContentImgFirstApi.start({
          opacity: 1,
          transform: "translateY(0px)",
          delay: 200,
        })

        layoutContentTextFirstApi.start({
          opacity: 1,
          transform: "translateY(0px)",
          delay: 400,
        })

        layoutPreviewLastApi.start({
          opacity: 1,
          transform: "translateY(0px)",
          delay: 600,
        })

        layoutContentImgLastApi.start({
          opacity: 1,
          transform: "translateY(0px)",
          delay: 800,
        })

        layoutContentTextLastApi.start({
          opacity: 1,
          transform: "translateY(0px)",
          delay: 1000,
        })

      } else {
        layoutPreviewFirstApi.start({
          opacity: 0,
          transform: "translateY(30px)"
        })

        layoutContentImgFirstApi.start({
          opacity: 0,
          transform: "translateY(30px)",
          delay: 200,
        })

        layoutContentTextFirstApi.start({
          opacity: 0,
          transform: "translateY(30px)",
          delay: 400,
        })

        layoutPreviewLastApi.start({
          opacity: 0,
          transform: "translateY(30px)",
          delay: 600,
        })

        layoutContentImgLastApi.start({
          opacity: 0,
          transform: "translateY(30px)",
          delay: 800,
        })

        layoutContentTextLastApi.start({
          opacity: 0,
          transform: "translateY(30px)",
          delay: 1000,
        })
      }

      //images layout
      if (scrollYProgress >= 0.3 && scrollYProgress <= 0.9) {

        imagesLayoutPreviewFirstApi.start({
          opacity: 1,
          transform: "translateY(0px)",
        })

        imagesLayoutPreviewLastApi.start({
          opacity: 1,
          transform: "translateY(0px)",
          delay: 200,
        })

        imagesLayoutContentApi.start({
          opacity: 1,
          transform: "translateY(0px)",
          delay: 400,
        })

      } else {
        imagesLayoutPreviewFirstApi.start({
          opacity: 0,
          transform: "translateY(30px)",
        })

        imagesLayoutPreviewLastApi.start({
          opacity: 0,
          transform: "translateY(30px)",
          delay: 200,
        })

        imagesLayoutContentApi.start({
          opacity: 0,
          transform: "translateY(30px)",
          delay: 400,
        })
      }

      //next work list
      if (scrollYProgress >= 0.7) {
        nextWorkItemsApi.start({
          opacity: 1,
        })

        nextWorkListTrailApi.start({
          opacity: 1,
          x: 0,
          delay: 500,
        })

      } else {
        nextWorkItemsApi.start({
          opacity: 0,
        })

        nextWorkListTrailApi.start({
          opacity: 0,
          x: -70,
          delay: 500,
        })
      }

      //moving text
    }
  });

  return (
    <Layout containerRef={containerRef}>
      <WorkDetail
        data={data}
        preview={preview}
        subTitle={subTitle}
        title={title}
        category={category}
        teamSpring={team}
        desc={desc}
        layoutPreviewFirst={layoutPreviewFirst}
        layoutContentImgFirst={layoutContentImgFirst}
        layoutContentTextFirst={layoutContentTextFirst}
        layoutPreviewLast={layoutPreviewLast}
        layoutContentImgLast={layoutContentImgLast}
        layoutContentTextLast={layoutContentTextLast}
        imagesLayoutPreviewFirst={imagesLayoutPreviewFirst}
        imagesLayoutPreviewLast={imagesLayoutPreviewLast}
        imagesLayoutContent={imagesLayoutContent}
        nextWorkListTrail={nextWorkListTrail}
        nextWorkItems={nextWorkItems}
      />
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query WorkDetail($frontmatter__slug: String) {
    allMdx(sort: {frontmatter: {id: ASC}}) {
      nodes {
        frontmatter {
          slug
          name
        }
      }
    }
    
    mdx(frontmatter: { slug: { eq: $frontmatter__slug }}) {
      frontmatter {
        category
        description
        name
        slug
        team
        cardImage
        cardDesc
        imageLayout_01_content
        imageLayout_01_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        imageLayout_01_image_big {
          childImageSharp {
            gatsbyImageData
          }
        }
        imageLayout_02_content
        imageLayout_02_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        imageLayout_02_image_big {
          childImageSharp {
            gatsbyImageData
          }
        }
        imagesLayout_01_content
        imagesLayout_01_content_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        imagesLayout_01_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        imagesLayout_02_content
        imagesLayout_02_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({ data }: IWorkItemDetailProps) => {
  return (
    <SEO title={data.mdx?.frontmatter?.name!} />
  )
}