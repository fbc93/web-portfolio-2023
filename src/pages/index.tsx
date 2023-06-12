import * as React from "react"
import { HeadFC, PageProps, useScrollRestoration } from "gatsby"
import { SEO } from "../components/seo"
import Layout from "../components/layout"
import Intro from "../components/main/intro"
import TransitionBg from "../components/main/transitionBg"

const IndexPage: React.FC<PageProps> = () => {
  const introScrollRestoration = useScrollRestoration(`intro-article`)

  return (
    <Layout>
      <Intro introScrollRestoration={introScrollRestoration} />
      <TransitionBg />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO title="웹 포트폴리오" />