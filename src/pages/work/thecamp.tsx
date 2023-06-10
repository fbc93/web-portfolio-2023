import { HeadFC } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import { SEO } from "../../components/seo";

export default function TheCamp() {
  return (
    <Layout>
      <article>The camp</article>
    </Layout>
  )
}

export const Head: HeadFC = () => <SEO title="더캠프" />