import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { SEO } from "../components/seo"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>Main</div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO title="웹 포트폴리오" />