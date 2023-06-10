import type { GatsbyConfig } from "gatsby"
import IconsConfig from "./icons-config"
import metaConfig from "./site-meta-config"

const config: GatsbyConfig = {
  siteMetadata: metaConfig,
  graphqlTypegen: true,
  plugins: [
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
  ],
}

export default config
