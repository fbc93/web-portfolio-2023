import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>Main</div>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <title>Main</title>
  )
}
