import { HeadFC, Link } from "gatsby";
import React from "react";
import Layout from "../../../components/layout";
import { SEO } from "../../../components/seo";

export default function MissSoldierCardRenewal() {
  return (
    <Layout>
      <article style={{ height: 100 + "vh", paddingTop: 20 + "vh" }}>
        <Link to="/">뒤로</Link>
      </article>
    </Layout>
  )
}

export const Head: HeadFC = () => <SEO title="보고싶은군인 카드 UI 개선" />