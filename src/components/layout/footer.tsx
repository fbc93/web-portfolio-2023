import React from "react";
import * as footerStyle from "../../styles/components/layout/Footer.module.scss";
import Logo from "../main/logo";

export default function Footer() {

  const words = ['j', 'y', 'j', 'c', 'y', '5', '0', '1', '@', 'n', 'a', 'v', 'e', 'r', '.', 'c', 'o', 'm'];

  return (
    <footer className={footerStyle.footer}>
      <div className={footerStyle.container}>
        <div className={footerStyle.sub_title}>함께 일할 줄 아는 사람을 찾고계신가요?</div>
        <div className={footerStyle.animation_title}>
          {words.map((word, idx) => (
            <div key={idx}>
              {word}
            </div>
          ))}
        </div>
        <div className={footerStyle.copyright}>
          <Logo />
          <span>{`All Rights Reserved Copyright ${new Date().getFullYear()}`}</span>
        </div>
      </div>
    </footer>
  )
}