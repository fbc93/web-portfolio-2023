import React from "react";
import { useScroll, animated, useSpring, config } from '@react-spring/web';
import * as transitionBgStyles from "../../styles/components/main/TransitionBg.module.scss";

export default function TransitionBg() {

  const [movingBg, movingBgApi] = useSpring(() => ({
    from: {
      translateY: 500,
    }
  }))

  const { scrollYProgress } = useScroll({
    default: {
      immediate: true,
    }
  });

  return (
    <div className={transitionBgStyles.decoration_bg}>
      <animated.div
        style={{
          transform: scrollYProgress.to(scrollP => {

            let result = 500;
            if (scrollP > 0) {
              result = result - 3000 * scrollP;

              if (result < -500) {
                result = -500;
              }
            }

            return `translateY(${result}px) translateZ(0px)`;
          })
        }}
        className={transitionBgStyles.bg}
      ></animated.div>
    </div>
  );
}