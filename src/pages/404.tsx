import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import { SEO } from "../components/seo"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <div>404</div>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <SEO title="404" />
