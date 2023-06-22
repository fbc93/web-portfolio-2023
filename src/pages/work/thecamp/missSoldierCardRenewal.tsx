import { HeadFC, Link, navigate } from "gatsby";
import React from "react";
import Layout from "../../../components/layout";
import { SEO } from "../../../components/seo";
import Card from "../../../components/detail/card";
import GoBackBtn from "../../../components/detail/goBackBtn";
import WorkDetail from "../../../components/detail/workDetail";
import * as workDetailStyles from "../../../styles/components/detail/WorkDetail.module.scss";
import Footer from "../../../components/layout/footer";

export default function MissSoldierCardRenewal() {
  const containerRef = React.useRef<HTMLDivElement>(null!)

  return (
    <Layout containerRef={containerRef}>
      <WorkDetail />
      <Footer />
    </Layout>
  )
}

export const Head: HeadFC = () => <SEO title="보고싶은군인 카드 UI 개선" />