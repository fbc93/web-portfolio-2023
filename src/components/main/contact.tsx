import { Link } from "gatsby";
import React, { useState } from "react";
import * as contactStyles from "../../styles/components/main/Contact.module.scss";
import { FiArrowLeftCircle, FiCopy, FiThumbsUp } from "react-icons/fi";
import { useScroll, animated, useSprings, useSpring, config, useTrail } from '@react-spring/web';
import Logo from "./logo";
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface IContactProps {
  words: string[];
  contactSubTitle: any;
  contactTitle: any;
  mailTrail: any[];
  contactDesc: any;
  contactLastDesc: any;
  contactBtn: any;
  contactBg: any;
}

export default function Contact({
  words,
  contactSubTitle,
  contactTitle,
  mailTrail,
  contactDesc,
  contactLastDesc,
  contactBtn,
  contactBg,
}: IContactProps) {

  const [isCopied, setIsCopied] = useState(false);
  const AFTER_COPIED_COLOR = "#ff6b6b";
  const BEFORE_COPIED_COLOR = "#0652DD";

  const handleOnCopyEmail = () => {
    try {
      setIsCopied(true);

    } catch (error) {
      setIsCopied(false);
      alert("복사에 실패했습니다, 다시 시도해주세요.")
    }
  }

  return (
    <article className={contactStyles.contact}>
      <div className={contactStyles.container}>
        <animated.strong style={{ ...contactSubTitle }}>Contact</animated.strong>

        <animated.div style={{ ...contactTitle }} className={contactStyles.sub_title}>
          <span>함께 일할 줄 아는 동료를 찾고계신가요?</span>
          <span className={isCopied ? contactStyles.copied_style : null}>메일로 언제든지 제안해주세요 🙋‍♀️</span>
        </animated.div>

        <div className={contactStyles.mail}>
          <div className={contactStyles.animation_text}>
            {mailTrail.map(({ opacity, y }, index) => (
              <animated.div
                key={index}
                style={{
                  opacity: opacity.to((value: number) => value),
                  transform: y.to((value: number) => `translateY(${value}px)`),
                  color: isCopied ? AFTER_COPIED_COLOR : BEFORE_COPIED_COLOR,
                }}>
                {words[index]}
              </animated.div>
            ))}
          </div>
        </div>
        <div className={contactStyles.content}>
          <animated.div style={{ ...contactDesc }} className={contactStyles.desc}>
            <p>
              서비스를 위해 고민하고 경계없이 성장할 수 있는 개발자를 찾고 계신가요? <br />
              합류 및 협업 제안이 있으시다면 언제든지 환영합니다. 💖
              메일을 보내주시면 내용 확인 후 1-2일 이내로 회신드리겠습니다.
            </p>
          </animated.div>

          <div className={contactStyles.desc}>
            <animated.p style={{ ...contactLastDesc }}>
              포트폴리오나 저에 대해서 더 궁금한 점이 있으시다면 편하게 연락주세요 :)
              아래 버튼을 클릭하면 이메일 주소를 클립보드에 복사할 수 있습니다.
            </animated.p>

            <CopyToClipboard
              text="jyjcy501@naver.com"
              onCopy={handleOnCopyEmail}>
              <animated.div style={{ ...contactBtn }}>
                {isCopied ? (
                  <>
                    <FiThumbsUp />
                    <span>메일주소 복사 완료</span>
                  </>
                ) : (
                  <>
                    <FiCopy />
                    <span>클릭해서 메일주소 복사</span>
                  </>
                )}
              </animated.div>
            </CopyToClipboard>

          </div>
        </div>

      </div>
      <footer className={contactStyles.footer}>
        <div className={contactStyles.container}>
          <div className={contactStyles.copyright}>
            <Logo />
            <span>{`All Rights Reserved Copyright ${new Date().getFullYear()}`}</span>
          </div>
        </div>
      </footer>

      <div className={contactStyles.bg_image}>
        <animated.svg style={{ ...contactBg }} viewBox="0 0 257 81" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.68 80.96V0.319994H23.24V31.4H48.56V0.319994H71.24V80.96H48.56V47.6H23.24V80.96H0.68ZM94.3813 80.96L75.1813 0.319994H97.8613L108.421 51.08H108.901L121.741 0.319994H139.981L152.701 51.08H153.061L164.341 0.319994H184.021L164.701 80.96H142.021L130.021 31.28H129.661L117.181 80.96H94.3813ZM214.199 23.72L205.679 50.48H223.199L214.679 23.72H214.199ZM175.919 80.96L204.119 0.319994H228.239L256.199 80.96H233.159L227.759 65H201.359L196.319 80.96H175.919Z" fill="#333333" fillOpacity="0.5" />
        </animated.svg>
      </div>
    </article>
  )
}