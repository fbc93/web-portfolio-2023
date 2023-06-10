import { graphql, useStaticQuery } from "gatsby"

interface IuseSiteMetadata {
  title: string;
  generator: string;
  description: string;
  image: string;
  siteUrl: string;
  keywords: string;
}

export const useSiteMetadata = (): IuseSiteMetadata => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          generator
          description
          image
          siteUrl
          keywords
        }
      }
    }
  `)

  return data.site.siteMetadata
}