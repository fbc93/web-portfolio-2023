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
    allMdx {
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
      }
    }
  }
`

export const Head = ({ data }: IWorkItemDetailProps) => {
  return (
    <SEO title={data.mdx?.frontmatter?.name!} />
  )
}