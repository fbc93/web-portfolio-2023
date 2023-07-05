# 🏋️‍♀️ Web Portfolio 2023 (2023년 웹 포트폴리오)

21/09 ~ 23/02 (1년 5개월)의 경력 사항과 이후 4개월 간 작업한 개인 토이 프로젝트를 기반으로 만든 웹 포트폴리오입니다. 

<br>

<img width="1440" alt="스크린샷 2023-06-29 오후 2 53 12" src="https://github.com/fbc93/web-portfolio-2023/assets/81315091/a5089e6a-8b2d-461d-88d2-411338f7dedc">

<br>

 👉 [웹 포트폴리오 바로가기](https://2023-yhwa-web-portfolio.netlify.app/)

## 1. 기술 스택
- `Gatsby`, `Typescript`, `GraphQL`, `SCSS`, `React-Spring`, `MDX`
- `Netlify` 배포

<br>

## 2. 개발 일정
- 1인 프로젝트
- 개발 : 2023-06-09 ~ 2023-06-28 (20일)
- 배포 : 2023-06-28 (1일)

<br>

## 3. 주요 작업 내용
### 📌 CSS Keyframe Animation
- SVG 이미지에 CSS `stroke-dashoffset` 속성을 적용하여 화면이 최초 load될때, 키프레임 애니메이션으로 path를 그리도록 작업했습니다.

![ezgif com-video-to-gif](https://github.com/fbc93/web-portfolio-2023/assets/81315091/35e818f0-9672-43a0-b5df-0df9bd7cfa5e)

<br>

### 📌 Scroll Animation
- `스크롤 애니메이션`을 구현하기위해 `React-Spring` 플러그인을 사용했습니다.
- `useScroll`으로 스크롤 포지션 Y값을 얻어 if문 조건식으로 영역을 구획했습니다.
- 특정 스크롤값에 접근하면 useSpring/useTrail로 정의된 스타일이 적용됩니다.

![ezgif com-video-to-gif](https://github.com/fbc93/web-portfolio-2023/assets/81315091/8f3bf69c-b054-4f21-9c05-336aecf6fc7d)

<br>

### 📌 반응형 스타일 적용
- 데스크탑에서 모바일까지 UI가 틀어지지 않도록 SCSS으로 반응형 디자인을 적용했습니다.

![ezgif com-video-to-gif (1)](https://github.com/fbc93/web-portfolio-2023/assets/81315091/3826bcf7-fbe3-4c98-a775-25460bbad742)

<br>

### 📌 Dynamic Pages를 이용한 컴포넌트 재사용
- mdx파일에 페이지별 내용을 작성하고 이를 바탕으로 GraphQL 정적쿼리를 이용했습니다.
- 페이지별로 다른 slug 데이터를 dynamic pages로 사용하여 work detail 페이지에 대한 레이아웃을 재사용할 수 있습니다.

![ezgif com-video-to-gif (1)](https://github.com/fbc93/web-portfolio-2023/assets/81315091/1ef3260d-cd8a-4095-8a21-dfe986121f0b)

<br>

### 📌 클릭하여 메일 주소 복사
- 버튼을 클릭하면 텍스트를 클립보드에 저장할 수 있도록 `react-copy-to-clipboard` 플러그인을 적용했습니다.

![ezgif com-video-to-gif](https://github.com/fbc93/web-portfolio-2023/assets/81315091/4557cd93-34b5-4790-b4f0-225552de3de7)
