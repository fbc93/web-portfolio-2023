import React from "react";
import * as footerStyle from "../../styles/components/layout/Footer.module.scss";
import Logo from "../main/logo";
import { useScroll, animated, useSprings, useSpring, config, useTrail } from '@react-spring/web';

export default function Footer({ footerTitle, footerTrail }: any) {

  const words = ['j', 'y', 'j', 'c', 'y', '5', '0', '1', '@', 'n', 'a', 'v', 'e', 'r', '.', 'c', 'o', 'm'];

  return (
    <footer className={footerStyle.footer}>
      <div className={footerStyle.container}>
        <animated.div className={footerStyle.sub_title} style={{ ...footerTitle }}>함께 일할 줄 아는 사람을 찾고계신가요? 🙋‍♀️</animated.div>
        <div className={footerStyle.animation_title}>
          {footerTrail.map(({ opacity, y }: any, idx: number) => (
            <animated.div
              key={idx}
              style={{
                opacity,
                transform: y.to((value: number) => `translateY(${value}px)`)
              }}>
              {words[idx]}
            </animated.div>
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