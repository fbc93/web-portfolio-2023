import React from "react";
import { useScroll, animated } from '@react-spring/web';
import * as transitionBgStyles from "../../styles/components/main/TransitionBg.module.scss";

export default function TransitionBg() {
  const { scrollYProgress } = useScroll({
    default: {
      immediate: true,
    }
  });

  return (
    <div className={transitionBgStyles.decoration_bg}>
      <animated.div
        className={transitionBgStyles.bg}
        style={{
          translateY: scrollYProgress.to(scrollP => {
            const value = scrollP * 500 * -1;
            return value;
          })
        }}
      ></animated.div>
    </div>
  );
}