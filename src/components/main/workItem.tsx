import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as workItemStyles from "../../styles/components/main/WorkItem.module.scss";

export default function WorkItem() {
  return (
    <div className={workItemStyles.work_item}>
      Work Item
    </div>
  )
}