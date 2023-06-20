import { Link } from "gatsby";
import React from "react";
import * as contactStyles from "../../styles/components/main/Contact.module.scss";
import { FiArrowLeftCircle } from "react-icons/fi";
import Logo from "./logo";

export default function Contact() {
  const words = ['j', 'y', 'j', 'c', 'y', '5', '0', '1', '@', 'n', 'a', 'v', 'e', 'r', '.', 'c', 'o', 'm'];

  return (
    <article className={contactStyles.contact}>
      <div className={contactStyles.container}>
        <strong>CONTACT</strong>
        <div className={contactStyles.sub_title}>
          <span>함께 일할 줄 아는 사람을 찾고계신가요?</span>
          <span>메일로 언제든지 제안해주세요 🙌</span>
        </div>
        <div className={contactStyles.mail}>
          <div className={contactStyles.animation_text}>
            {words.map((word, idx) => (
              <div key={idx}>
                {word}
              </div>
            ))}
          </div>
        </div>
        <div className={contactStyles.content}>
          <div className={contactStyles.desc}>
            <p>역량과 경험을 갖춘 UI 개발자를 찾고 계신가요? 합류 및 협업 제안이 있으시다면 언제든지 연락해 주세요! 함께 할 멋진 일에 대해 메일을 보내주시면 1~2일 내로 답장을 드릴게요.</p>
          </div>
          <div className={contactStyles.desc}>
            <p>또는 저와 나누고 싶은 얘기가 있으신가요? 웹 포트폴리오나 UI 개발과 관련이 없는 내용이여도 좋아요. 궁금한 내용이 있다면 편하게 말씀해 주세요 :)</p>
            <Link to="/">
              <FiArrowLeftCircle />
              <span>메일 보내기</span>
            </Link>
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
    </article>
  )
}