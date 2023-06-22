import React from "react";
import * as headerStyles from "../../styles/components/layout/Header.module.scss";
import { useTrail, useSprings, useScroll, animated, config } from '@react-spring/web';

export default function Header() {
  const containerRef = React.useRef<HTMLDivElement>(null!);

  const [subHeader, subHeaderApi] = useSprings(1,
    () => ({
      from: {
        opacity: 1,
        display: "block",
      },
      to: {
        opacity: 0,
        display: "none",
      },
    }), []);

  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {

      if (scrollYProgress > 0) {
        subHeaderApi.start({
          opacity: 0,
          display: "none",
        });

      } else {
        subHeaderApi.start({
          opacity: 1,
          display: "block",
        });
      }
    },
  });

  return (
    <header className={headerStyles.header} ref={containerRef}>
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

        {subHeader.map((props, idx) => (
          <animated.div style={props} key={idx}>
            <div className={headerStyles.subTitle} >
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
          </animated.div>
        ))}

      </div>
    </header>
  )
}