import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import { SEO } from "../components/seo"
import Layout from "../components/layout"
import Intro from "../components/main/intro"
import TransitionBg from "../components/main/transitionBg"
import About from "../components/main/about"
import Works from "../components/main/works"
import Study from "../components/main/study"
import Footer from "../components/layout/footer"
import Contact from "../components/main/contact"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Intro />
      <TransitionBg />
      <About />
      <Works />
      <Study />
      <Contact />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO title="웹 포트폴리오" />