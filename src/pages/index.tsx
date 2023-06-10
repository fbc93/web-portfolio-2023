import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { SEO } from "../components/seo"
import Layout from "../components/layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <article>Home</article>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO title="웹 포트폴리오" />