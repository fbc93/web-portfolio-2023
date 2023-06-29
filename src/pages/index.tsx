import * as React from "react"
import { useRef } from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import { SEO } from "../components/seo"
import Layout from "../components/layout"
import Intro from "../components/main/intro"
import TransitionBg from "../components/main/transitionBg"
import About from "../components/main/about"
import Works from "../components/main/works"
import Study from "../components/main/study"
import Footer from "../components/layout/footer"
import Contact from "../components/main/contact"
import { useScroll, animated, useSprings, useSpring, config, useTrail } from '@react-spring/web';

const IndexPage = ({ data }: PageProps<Queries.WorkItemDataQuery>) => {
  const containerRef = React.useRef<HTMLDivElement>(null!)
  const workItemData = data.allMdx.nodes.filter((item, index) => index <= 3)
  const wideWorData = data.allMdx.nodes[4].frontmatter;

  //Intro useSpring
  const [mainTitle, mainTitleApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: "translateY(30px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)"
    },
    config: config.stiff,
  }))

  const [firstSubTitle, firstSubTitleApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: "translateY(30px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)"
    },
    config: config.stiff,
    delay: 500,
  }))

  const [secondSubTitle, secondSubTitleApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: "translateY(30px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)"
    },
    config: config.stiff,
    delay: 1000,
  }))

  const [lastSubTitle, lastSubTitleApi] = useSpring(() => ({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1
    },
    config: config.molasses,
    delay: 1800,
  }))

  const [scrollDown, scrollDownApi] = useSpring(() => ({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1
    },
    config: config.stiff,
    delay: 2200,
  }))



  //About useSpring
  const aboutWords = ['G', 'R', 'A', 'Y', 'Z', 'O', 'N', 'E'];
  const isFlipped = useRef(false);

  const [profile, profileApi] = useSprings(1,
    () => ({
      from: {
        opacity: 1,
        transform: 'translateY(50px)'
      },
      to: {
        opacity: 0,
        transform: 'translateY(0px)'
      },
      config: config.stiff,
    }), []);

  const [subTitle, subTitleApi] = useSprings(1,
    () => ({
      from: {
        opacity: 0,
        transform: 'translateY(50px)'
      },
      to: {
        opacity: 1,
        transform: 'translateY(0px)'
      },
      config: config.stiff,
    }), []);

  const [trail, trailApi] = useTrail(
    aboutWords.length,
    () => ({
      opacity: 0,
      rotateX: 0,
      config: config.stiff,
    }), []);

  const [contentTitle, contentTitleApi] = useSprings(1,
    () => ({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
      config: config.stiff,
    }), []);

  const [contentDesc, contentDescApi] = useSprings(1,
    () => ({
      from: {
        opacity: 0,
        transform: 'translateY(50px)'
      },
      to: {
        opacity: 1,
        transform: 'translateY(0px)'
      },
      config: config.molasses,
    }), []);

  const [downloadBtn, downloadBtnApi] = useSprings(1,
    () => ({
      from: {
        opacity: 0,
        transform: 'translateX(-50px)'
      },
      to: {
        opacity: 1,
        transform: 'translateX(0px)'
      },
      config: config.molasses,
    }), []);



  //Works useSpring
  const [worksTextBg, worksTextBgApi] = useSpring(() => ({
    from: {
      opacity: 1,
      transform: 'translateY(50px)',
    },
    to: {
      opacity: 0,
      transform: 'translateY(0px)',
    },
    config: config.stiff,
  }))

  const [company, companyApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: 'translateY(50px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
    config: config.stiff,
    delay: 500,
  }))


  const [workItemSprings, workItemSpringsApi] = useTrail(
    4,
    () => ({
      opacity: 0,
      transform: 'translateY(50px)',
      config: config.stiff,
      delay: 1000,
    }), []);


  const [wideWorkItem, wideWorkItemApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: 'translateY(50px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
    config: config.stiff,
  }))



  //Study useSpring
  const studyWords = ['G', 'R', 'A', 'Y', 'Z', 'O', 'N', 'E'];
  const [studySubTitle, studySubTitleApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: 'translateY(30px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
    config: config.stiff,
  }))

  const [studyMiniTitle, studyMiniTitleApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: 'translateY(30px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
    config: config.stiff,
  }))

  const [studyTrail, studyTrailApi] = useTrail(
    studyWords.length,
    () => ({
      opacity: 0,
      rotateX: 0,
      config: config.stiff,
    }), []);

  const [studyDesc, studyDescApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: 'translateY(30px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
    config: config.stiff,
  }))

  const [studyBtn, studyBtnApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: 'translateX(-50px)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0px)',
    },
    config: config.molasses,
  }))


  //Contact useSpring
  const contactWords = ['j', 'y', 'j', 'c', 'y', '5', '0', '1', '@', 'n', 'a', 'v', 'e', 'r', '.', 'c', 'o', 'm'];
  const [contactSubTitle, contactSubTitleApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: 'translateY(50px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
    config: {
      mass: 2,
      friction: 20,
      tension: 200,
    },
  }))

  const [contactTitle, contactTitleApi] = useSpring(() => ({
    from: {
      opacity: 0,
      transform: 'translateY(0px)',
    },
    to: {
      opacity: 0,
      transform: 'translateY(50px)',
    },
    config: {
      mass: 2,
      friction: 20,
      tension: 200,
    },
  }))

  const [mailTrail, mailTrailApi] = useTrail(
    contactWords.length,
    () => ({
      opacity: 0,
      y: 50,
      config: {
        mass: 1,
        friction: 30,
        tension: 500,
      },
    }), []);

  const [contactDesc, contactDescApi] = useSpring(() => ({
    from: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
    to: {
      opacity: 0,
      transform: 'translateY(50px)',
    },
    config: config.molasses
  }))

  const [contactLastDesc, contactLastDescApi] = useSpring(() => ({
    from: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
    to: {
      opacity: 0,
      transform: 'translateY(50px)',
    },
    config: config.molasses
  }))

  const [contactBtn, contactBtnApi] = useSpring(() => ({
    from: {
      opacity: 1,
      transform: 'translateX(0px)',
    },
    to: {
      opacity: 0,
      transform: 'translateX(-50px)',
    },
    config: config.molasses,
  }))

  const [contactBg, contactBgApi] = useSpring(() => ({
    from: {
      opacity: 0.09,
      scale: 1.2,
    },
    to: {
      opacity: 0,
      scale: 1,
    },
    config: {
      mass: 2,
      friction: 20,
      tension: 80,
    },
  }))

  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      //console.log("index___", scrollYProgress);


      //Intro
      if (scrollYProgress <= 0.05) {
        mainTitleApi.start({
          opacity: 1,
          transform: "translateY(0px)"
        })

        firstSubTitleApi.start({
          opacity: 1,
          transform: "translateY(0px)",
          delay: 500,
        })

        secondSubTitleApi.start({
          opacity: 1,
          transform: "translateY(0px)",
          delay: 1000,
        })

        lastSubTitleApi.start({
          opacity: 1,
          delay: 1800,
        })

        scrollDownApi.start({
          opacity: 1,
          delay: 2200,
        })

      } else {
        mainTitleApi.start({
          opacity: 0,
          transform: "translateY(30px)",
        })

        firstSubTitleApi.start({
          opacity: 0,
          transform: "translateY(30px)",
        })

        secondSubTitleApi.start({
          opacity: 0,
          transform: "translateY(30px)",
        })

        lastSubTitleApi.start({
          opacity: 0,
        })

        scrollDownApi.start({
          opacity: 0,
        })
      }


      //About
      if (scrollYProgress >= 0.05 && scrollYProgress <= 0.4) {

        profileApi.start({
          opacity: 1,
          transform: 'translateY(0px)'
        })

        subTitleApi.start({
          opacity: 1,
          transform: 'translateY(0px)',
          delay: 200,
        });

        trailApi.start({
          opacity: 1,
          rotateX: 180,
          delay: 400,
        });

        isFlipped.current = true;

        contentTitleApi.start({
          opacity: 1,
          delay: 600,
        });

        contentDescApi.start({
          opacity: 1,
          transform: 'translateY(0px)',
          delay: 800,
        });

        downloadBtnApi.start({
          opacity: 1,
          transform: 'translateX(0px)',
          delay: 1000,
        });


      } else {
        subTitleApi.start({
          opacity: 0,
          transform: 'translateY(50px)',
        });

        trailApi.start({
          opacity: 0,
          rotateX: 0,
        });

        isFlipped.current = false;

        profileApi.start({
          opacity: 0,
          transform: 'translateY(50px)'
        })

        contentTitleApi.start({
          opacity: 0,
        });

        contentDescApi.start({
          opacity: 0,
          transform: 'translateY(50px)',
        });

        downloadBtnApi.start({
          opacity: 0,
          transform: 'translateX(-50px)',
        });
      }


      //Works
      if (scrollYProgress >= 0.25 && scrollYProgress <= 0.7) {
        worksTextBgApi.start({
          opacity: 1,
          transform: 'translateY(0px)',
        })

      } else {
        worksTextBgApi.start({
          opacity: 0,
          transform: 'translateY(50px)',
        })
      }

      if (scrollYProgress >= 0.19 && scrollYProgress <= 0.45) {

        companyApi.start({
          opacity: 1,
          transform: 'translateY(0px)',
          delay: 500,
        })

      } else {

        companyApi.start({
          opacity: 0,
          transform: 'translateY(50px)',
        })
      }

      if (scrollYProgress >= 0.2 && scrollYProgress <= 0.7) {
        workItemSpringsApi.start({
          opacity: 1,
          transform: 'translateY(0px)',
          delay: 1000,
        })

      } else {
        workItemSpringsApi.start({
          opacity: 0,
          transform: 'translateY(50px)',
        })
      }

      if (scrollYProgress >= 0.45 && scrollYProgress <= 0.7) {
        wideWorkItemApi.start({
          opacity: 1,
          transform: 'translateY(0px)',
        })
      } else {
        wideWorkItemApi.start({
          opacity: 0,
          transform: 'translateY(50px)',
        })
      }


      //Study
      if (scrollYProgress >= 0.65 && scrollYProgress <= 0.9) {
        studySubTitleApi.start({
          opacity: 1,
          transform: 'translateY(0px)',
        })

        studyMiniTitleApi.start({
          opacity: 1,
          transform: 'translateY(0px)',
          delay: 400,
        })

        studyTrailApi.start({
          opacity: 1,
          rotateX: 180,
          delay: 800,
        });

        studyDescApi.start({
          opacity: 1,
          transform: 'translateY(0px)',
          delay: 1500,
        })

        studyBtnApi.start({
          opacity: 1,
          transform: 'translateX(0px)',
          delay: 2000,
        })

      } else {
        studySubTitleApi.start({
          opacity: 0,
          transform: 'translateY(30px)',
        })

        studyMiniTitleApi.start({
          opacity: 0,
          transform: 'translateY(30px)',
        })

        studyTrailApi.start({
          opacity: 0,
          rotateX: 0,
        });

        studyDescApi.start({
          opacity: 0,
          transform: 'translateY(30px)',
        })

        studyBtnApi.start({
          opacity: 0,
          transform: 'translateX(-50px)'
        })
      }


      //Contact
      if (scrollYProgress >= 0.9) {
        contactSubTitleApi.start({
          opacity: 1,
          transform: 'translateY(0px)',
        })

        contactTitleApi.start({
          opacity: 1,
          transform: 'translateY(0px)',
          delay: 200,
        })

        mailTrailApi.start({
          opacity: 1,
          y: 0,
          delay: 400,
        })

        contactDescApi.start({
          opacity: 1,
          transform: 'translateY(0px)',
          delay: 800,
        })

        contactLastDescApi.start({
          opacity: 1,
          transform: 'translateY(0px)',
          delay: 1000,
        })

        contactBgApi.start({
          opacity: 0.09,
          scale: 1.2,
        })

        contactBtnApi.start({
          opacity: 1,
          transform: 'translateX(0px)',
          delay: 1500,
        })


      } else {
        contactSubTitleApi.start({
          opacity: 0,
          transform: 'translateY(50px)',
        })

        contactTitleApi.start({
          opacity: 0,
          transform: 'translateY(50px)',
        })

        mailTrailApi.start({
          opacity: 0,
          y: 50,
        })

        contactDescApi.start({
          opacity: 0,
          transform: 'translateY(50px)',
        })

        contactLastDescApi.start({
          opacity: 0,
          transform: 'translateY(50px)',
        })

        contactBgApi.start({
          opacity: 0,
          scale: 1,
        })

        contactBtnApi.start({
          opacity: 0,
          transform: 'translateX(-50px)',
        })
      }

    },
    default: {
      immediate: true,
    }
  })

  return (
    <Layout containerRef={containerRef}>
      <Intro
        mainTitle={mainTitle}
        firstSubTitle={firstSubTitle}
        secondSubTitle={secondSubTitle}
        lastSubTitle={lastSubTitle}
        scrollDown={scrollDown}
        contentDesc={contentDesc}
      />
      <TransitionBg />
      <About
        profile={profile}
        subTitle={subTitle}
        trail={trail}
        words={aboutWords}
        contentTitle={contentTitle}
        contentDesc={contentDesc}
        downloadBtn={downloadBtn}
      />
      <Works
        workData={workItemData}
        wideWorData={wideWorData}
        worksTextBg={worksTextBg}
        company={company}
        workItemSprings={workItemSprings}
        wideWorkItem={wideWorkItem}
      />
      <Study
        words={studyWords}
        studySubTitle={studySubTitle}
        studyMiniTitle={studyMiniTitle}
        studyTrail={studyTrail}
        studyDesc={studyDesc}
        studyBtn={studyBtn}
      />
      <Contact
        words={contactWords}
        contactSubTitle={contactSubTitle}
        contactTitle={contactTitle}
        mailTrail={mailTrail}
        contactDesc={contactDesc}
        contactLastDesc={contactLastDesc}
        contactBtn={contactBtn}
        contactBg={contactBg}
      />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO title="웹 포트폴리오" />

export const query = graphql`
  query WorkItemData {
    allMdx (sort: {frontmatter: {id: ASC}}) {
      nodes {
          frontmatter {
            category
            description
            name
            slug
            previewPCImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            previewImage {
              childImageSharp {
                gatsbyImageData
            }
          }
        }
      }
    }
  }
`