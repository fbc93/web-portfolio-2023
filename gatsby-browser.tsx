import * as React from "react"
import { GatsbyBrowser } from "gatsby"
import "./src/styles/config/_variable.scss"
import "./src/styles/config/_reset.scss"

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  console.log("shouldUpdateScroll");
}

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return (
    <div className="root">
      {element}
    </div>
  )
}