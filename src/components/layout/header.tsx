import React from "react";
import * as headerStyles from "../../styles/components/layout/Header.module.scss";

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.container}>
        <div className={headerStyles.line + " " + headerStyles.bold}></div>
        <div className={headerStyles.content}>
          <h1 className={headerStyles.title}>Younhwa's Web Portfolio</h1>
          <div className={headerStyles.status}>
            <div className={headerStyles.text}>Available Now</div>
            <div className={headerStyles.update}>Last update 2023.06.11</div>
          </div>
        </div>
        <div className={headerStyles.line}></div>
        <div className={headerStyles.subTitle}>
          <div className={headerStyles.nickname}>yhwa : </div>
          <ul className={headerStyles.keywords}>
            <li>함께 만드는 즐거움을 아는 사람</li>
            <li>웹 퍼블리셔</li>
            <li>UI 개발자</li>
            <li>예비 FE 개발자</li>
            <li> 입니다.</li>
          </ul>
        </div>
        <div className={headerStyles.line + " " + headerStyles.bold}></div>
      </div>
    </header>
  )
}