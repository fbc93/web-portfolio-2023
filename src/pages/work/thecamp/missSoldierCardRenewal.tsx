import { HeadFC } from "gatsby";
import React from "react";
import Layout from "../../../components/layout";
import { SEO } from "../../../components/seo";
import WorkDetail from "../../../components/work/workDetail";

export default function MissSoldierCardRenewal() {
  return (
    <Layout>
      <WorkDetail />
    </Layout>
  )
}

export const Head: HeadFC = () => <SEO title="보고싶은군인 카드 UI 개선" />