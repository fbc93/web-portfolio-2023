import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

interface ISeoProps {
  title: string;
  description?: string;
  pathname?: string;
}

export const SEO = ({ title, description, pathname }: ISeoProps) => {
  const { title: defaultTitle, generator, description: defaultDescription, image, siteUrl, keywords } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    generator: generator,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    keywords: keywords,
  }

  return (
    <>
      <meta name="generator" content={seo.generator} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={seo.url} />
      <meta name="og:site_name" content={defaultTitle + " | " + seo.title} />
      <meta name="og:title" content={defaultTitle + " | " + seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:image" content={seo.image} />
      <meta name="twitter:title" content={defaultTitle + " | " + seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:url" content={defaultTitle + " | " + seo.title} />
      <meta name="twitter:image" content={seo.image} />
      <title>{defaultTitle + " | " + seo.title}</title>
    </>
  )
}