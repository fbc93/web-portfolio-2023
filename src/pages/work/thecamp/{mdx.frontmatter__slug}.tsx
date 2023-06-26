import { graphql } from "gatsby";
import React from "react";
import Layout from "../../../components/layout";
import { SEO } from "../../../components/seo";
import WorkDetail from "../../../components/detail/workDetail";
import Footer from "../../../components/layout/footer";

interface IWorkItemDetailProps {
  data: Queries.WorkDetailQuery;
}

export default function WorkItemDetail({ data }: IWorkItemDetailProps) {
  const containerRef = React.useRef<HTMLDivElement>(null!)

  return (
    <Layout containerRef={containerRef}>
      <WorkDetail data={data} />
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