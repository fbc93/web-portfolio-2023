import type { GatsbyConfig } from "gatsby"
import IconsConfig from "./icons-config"
import metaConfig from "./site-meta-config"

const config: GatsbyConfig = {
  siteMetadata: metaConfig,
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Ysabeau SC`,
            file: `https://fonts.googleapis.com/css2?family=Ysabeau+SC:wght@400;500;600&display=swap`,
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        display: "minimal-ui",
        icon: "./static/favicons/favicon-32x32.svg",
        icons: IconsConfig,
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/work-items`
      }
    },
  ],
}

export default config
