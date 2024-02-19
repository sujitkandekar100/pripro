import { useCallback } from "react";
import { useRouter } from "next/router";
import TopHeader from "../components/top-header";
import CTA1 from "../components/c-t-a1";
import Blogs from "../components/blogs";
import styles from "./blog-article.module.css";

const BlogArticle = () => {
  const router = useRouter();

  const onLocofyGuieLogoImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onBlogbackClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onIntroductionClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contentbodyContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onZeroFrictionClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='tablecontent2Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAIPoweredClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='tablecontent3Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onViewCodeClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='tablecontent4Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onShareCollaborateClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='tablecontent5Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onDirectExportClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='directDeploy']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onConclusionClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='tablecontent7Container']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.blogArticle}>
      <div className={styles.blogArticleBody}>
        <TopHeader onLocofyGuieLogoImageClick={onLocofyGuieLogoImageClick} />
        <button className={styles.blogback} onClick={onBlogbackClick}>
          <img className={styles.iconBack} alt="" src="/icon--back1.svg" />
          <a className={styles.blogs}>Blogs</a>
        </button>
        <div className={styles.articlebody}>
          <div className={styles.articlebodytable}>
            <div className={styles.tableOfContents}>Table of Contents</div>
            <div className={styles.tablecontent}>
              <a className={styles.introduction} onClick={onIntroductionClick}>
                Introduction
              </a>
              <a className={styles.introduction} onClick={onZeroFrictionClick}>
                Zero Friction
              </a>
              <a className={styles.introduction} onClick={onAIPoweredClick}>
                AI Powered
              </a>
              <a
                className={styles.viewCode}
                onClick={onViewCodeClick}
              >{`View Code & Digest Dynamic Data`}</a>
              <a
                className={styles.shareCollaborate}
                onClick={onShareCollaborateClick}
              >{`Share & Collaborate Seamlessly with Locofy Builder`}</a>
              <a
                className={styles.directExport}
                onClick={onDirectExportClick}
              >{`Direct Export & Deploy`}</a>
              <a className={styles.directExport} onClick={onConclusionClick}>
                Conclusion
              </a>
            </div>
          </div>
          <div className={styles.articlebodydescription}>
            <div className={styles.articlebodyheader}>
              <div className={styles.articleupperside}>
                <div className={styles.bheader}>
                  <div className={styles.names}>
                    <b className={styles.designToCode}>Design to COde</b>
                    <div className={styles.time}>
                      <div className={styles.minRead}>3 min read</div>
                    </div>
                  </div>
                  <b className={styles.locofyaiTurn}>
                    Locofy.ai – Turn Figma to Code!
                  </b>
                  <div className={styles.goFromFigma}>
                    Go from Figma to code in minimum amount of time using
                    Locofy. Take your design to real world with Locofy's AI
                    powered plugin.
                  </div>
                </div>
                <div className={styles.authorframe}>
                  <div className={styles.articleAuthor}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar4@2x.png"
                    />
                    <div className={styles.authorText}>
                      <div className={styles.annaRos}>Anna Rosé</div>
                      <div className={styles.postedJustNow}>
                        Posted just now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.articleimage}>
              <img
                className={styles.image33Icon}
                alt=""
                src="/image-33@2x.png"
              />
            </div>
            <div className={styles.articlebodydescriptionChild} />
            <div className={styles.introofarticle}>
              <div className={styles.tablecontent1}>
                <div className={styles.contentbody}>
                  <b className={styles.directDeployContainer}>Introduction</b>
                  <div className={styles.figmaHasBecomeContainer}>
                    <p
                      className={styles.figmaHasBecome}
                    >{`Figma has become a household name in the UIUX community. Being a truly browser-first product (not just storage in the cloud - no installation, no patching, no updates) and with highly collaborative features that no other player could think of or execute, Figma emerged as the clear market leader. `}</p>
                    <p className={styles.figmaHasBecome}>&nbsp;</p>
                    <p className={styles.figmaHasBecome}>
                      You can design anything on Figma – from a cool logo to
                      native apps and much more. But design is just the
                      beginning of building a world-class product. You need to
                      bring your product to life by actually building it -
                      Writing the damn code!
                    </p>
                    <p className={styles.figmaHasBecome}>&nbsp;</p>
                    <p
                      className={styles.figmaHasBecome}
                    >{`That’s where Locofy.ai comes in. While Figma is enough to get the ball rolling, Locofy.ai even takes it further by enabling anyone with a Figma design to get high-quality, pixel-perfect code. Hence, accelerating the building process – with minimal time and a shallow learning curve, builders can now quickly and easily go from Figma to code. `}</p>
                    <p className={styles.figmaHasBecome}>&nbsp;</p>
                    <p className={styles.figmaHasBecome}>
                      Validating an idea? Revamping your UI? The Locofy plugin
                      puts Figma on steroids by taking your idea from design to
                      websites and app.
                    </p>
                  </div>
                  <div className={styles.contentbodyChild} />
                  <div
                    className={styles.anchorContentbody}
                    data-scroll-to="contentbodyContainer"
                  />
                </div>
                <div className={styles.figmaHasBecomeContainer}>
                  Locofy takes your design through various stages and eventually
                  deploys it on a provider of your choice (Netlify, Vercel).
                </div>
                <div
                  className={styles.tablecontent2}
                  data-scroll-to="tablecontent2Container"
                >
                  <b className={styles.directDeployContainer}>Zero Friction</b>
                  <div className={styles.figmaHasBecomeContainer}>
                    <p
                      className={styles.figmaHasBecome}
                    >{`We have made it very easy for builders to use Locofy. We are a Figma plugin (Adobe XD & Sketch support coming soon) and completely brower-based tool. You can use your existing tech & design stacks to transform Figma to code.`}</p>
                    <p className={styles.figmaHasBecome}>&nbsp;</p>
                    <p
                      className={styles.figmaHasBecome}
                    >{`Locofy is built by creators for creators and therefore, we understand designers & creators need flexibility and choices. Hence, Locofy provides a plethora of tools and options, not present in vanilla Figma, to accelerate your design to code journey.`}</p>
                    <p className={styles.figmaHasBecome}>&nbsp;</p>
                    <p
                      className={styles.figmaHasBecome}
                    >{`Moreover, Locofy plugin offers a comprehensive collection of components such as buttons, inputs and dropdowns from all the top UI libraries namely Material, Chakra UI, Bootstrap and Ant Design, easing the process of designing while offering high flexibility & choices as you take your project from Figma to code.`}</p>
                  </div>
                </div>
                <div className={styles.contentbody}>
                  <b className={styles.directDeployContainer}>AI Powered</b>
                  <div className={styles.figmaHasBecomeContainer}>
                    <p
                      className={styles.figmaHasBecome}
                    >{`Locofy converts your design components into the apt code by the help of something called “Tags”. Tags are essentially types that you can assign to components so Locofy can create proper code for them. `}</p>
                    <p className={styles.figmaHasBecome}>&nbsp;</p>
                    <p
                      className={styles.figmaHasBecome}
                    >{`Tagging allows you to turn static layers on your Figma design files into interactive functional buttons, input fields, videos, iFrames and more. `}</p>
                    <p className={styles.figmaHasBecome}>
                      Locofy plugin uses AI to scan your design and recommends
                      tags, so you can quickly tag all the components and go
                      from Figma to code in astronomical speeds.
                    </p>
                  </div>
                  <div className={styles.contentbodyChild} />
                  <div
                    className={styles.anchorContentbody}
                    data-scroll-to="tablecontent3Container"
                  />
                </div>
                <div className={styles.contentbody}>
                  <b
                    className={styles.directDeployContainer}
                  >{`View Code & Digest Dynamic Data`}</b>
                  <div className={styles.figmaHasBecomeContainer}>
                    <p className={styles.figmaHasBecome}>
                      Locofy Builder doesn’t restrict engineers from creating
                      apps that rely on a server or database for data.
                    </p>
                    <p className={styles.figmaHasBecome}>&nbsp;</p>
                    <p
                      className={styles.figmaHasBecome}
                    >{`Using it, developers can create websites & apps that can digest dynamic content by allowing them to split their design into functional components that accept props, much like you do in an actual code base, only this time it is easier, faster and much more visual.`}</p>
                    <p className={styles.figmaHasBecome}>&nbsp;</p>
                    <p className={styles.figmaHasBecome}>
                      Additionally, you can also just export the selected
                      components you need without exporting the entire source
                      code. These components can easily be plugged into your
                      project and follow best industry practices so you don’t
                      have to spend time refactoring and cleaning it!
                    </p>
                    <p className={styles.figmaHasBecome}>&nbsp;</p>
                    <p className={styles.figmaHasBecome}>
                      Moreover, you also get access to the code files even
                      before exporting in the Builder so you can monitor live
                      changes to your code as you create components and accept
                      props.
                    </p>
                  </div>
                  <div
                    className={styles.anchorContentbody}
                    data-scroll-to="tablecontent4Container"
                  />
                </div>
                <div className={styles.contentbody}>
                  <b
                    className={styles.directDeployContainer}
                  >{`Share & Collaborate Seamlessly with Locofy Builder`}</b>
                  <div className={styles.figmaHasBecomeContainer}>
                    <p className={styles.figmaHasBecome}>
                      Once you are ready to go live, the Locofy plugin will
                      redirect you to the browser-based Locofy Builder where you
                      can view code, share your work with your team members and
                      not only will you get access to a live prototype, but you
                      can quickly share the prototypes too!
                    </p>
                    <p className={styles.figmaHasBecome}>&nbsp;</p>
                    <p
                      className={styles.figmaHasBecome}
                    >{`Your team members can contribute directly via browser. `}</p>
                    <p className={styles.figmaHasBecome}>&nbsp;</p>
                    <p className={styles.figmaHasBecome}>
                      It also shows your design file as layers, much like Figma,
                      so you can get a birds eye view of your design.
                    </p>
                    <p className={styles.figmaHasBecome}>&nbsp;</p>
                    <p className={styles.figmaHasBecome}>
                      Locofy Builder is inspired by the collaborative nature of
                      Figma and therefore, not only will you get access to a
                      live prototype, but you can quickly share the prototypes
                      too!
                    </p>
                    <p className={styles.figmaHasBecome}>&nbsp;</p>
                    <p className={styles.figmaHasBecome}>
                      After you are done with the prototype, you can easily
                      share it by using the public link provided by the Locofy
                      Builder.
                    </p>
                  </div>
                  <div className={styles.contentbodyChild} />
                  <div
                    className={styles.anchorContentbody}
                    data-scroll-to="tablecontent5Container"
                  />
                </div>
                <div className={styles.tablecontent2}>
                  <b className={styles.directDeployContainer}>
                    {`Direct Deploy & Export`}
                    <div
                      className={styles.anchorContentbody}
                      data-scroll-to="directDeploy"
                    />
                  </b>
                  <div className={styles.figmaHasBecomeContainer}>
                    <p className={styles.figmaHasBecome}>
                      Not only do you get options in terms of UI libraries,
                      Locofy Builder can also export code to various market
                      leading frameworks like React, Next.js, Gatsby and React
                      Native. Exported code can use TypeScript and CSS modules
                      too.
                    </p>
                    <p className={styles.figmaHasBecome}>&nbsp;</p>
                    <p
                      className={styles.figmaHasBecome}
                    >{`Don’t like frameworks? Locofy also supports plain HTML & CSS.`}</p>
                    <p className={styles.figmaHasBecome}>&nbsp;</p>
                    <p className={styles.figmaHasBecome}>
                      Locofy isn’t just another Figma to React plugin. It can
                      also handle deployment for you.
                    </p>
                    <p className={styles.figmaHasBecome}>&nbsp;</p>
                    <p
                      className={styles.figmaHasBecome}
                    >{`Locofy integrates with trusted cloud hosts – Netlify and Vercel, freeing you from the nitty gritty nuances associated with deploying the code yourself. `}</p>
                  </div>
                </div>
                <div className={styles.contentbody}>
                  <b className={styles.directDeployContainer}>Conclusion</b>
                  <div className={styles.figmaHasBecomeContainer}>
                    <p
                      className={styles.figmaHasBecome}
                    >{`Figma is an exceptionally powerful tool to design UI/UX and offers a wide range of free community resources that are more than sufficient for anyone to take the ball and run with it. However, the entire journey of turning your pixel-perfect design to responsive apps can take weeks, if not months and even after that, iterating over work can be challenging. `}</p>
                    <p className={styles.figmaHasBecome}>&nbsp;</p>
                    <p
                      className={styles.withLocofyaiYou}
                    >{`With Locofy.ai you can beat the clock and go from Figma to code while following all the best industry practices. It does so with an AI-powered plugin so you can easily go from Figma to code  and also provides you with features that are not present in Figma such as prototypes. `}</p>
                    <p className={styles.figmaHasBecome}>&nbsp;</p>
                    <p className={styles.figmaHasBecome}>
                      Locofy is on a mission to supercharge your creations by
                      taking them from just design files to servers all over the
                      world. Build your first project on locofy.ai now.
                    </p>
                  </div>
                  <div
                    className={styles.anchorContentbody}
                    data-scroll-to="tablecontent7Container"
                  />
                </div>
              </div>
              <div className={styles.sharesticker}>
                <button className={styles.linkedin}>
                  <div className={styles.linkedinChild} />
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </button>
                <button className={styles.linkedin}>
                  <div className={styles.linkedinChild} />
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector1.svg"
                  />
                </button>
                <button className={styles.linkedin}>
                  <div className={styles.linkedinChild} />
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector2.svg"
                  />
                </button>
                <button className={styles.linkedin}>
                  <div className={styles.linkedinChild} />
                  <img
                    className={styles.instagramItem}
                    alt=""
                    src="/group-7560.svg"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.articlefooter}>
        <CTA1 />
        <div className={styles.articlebodydescriptionChild} />
        <b className={styles.directDeployContainer}>You may also like</b>
        <Blogs />
      </div>
      <div className={styles.locofyPteLtd}>
        © 2022, Locofy Pte Ltd. All Rights Reserved.
      </div>
      <img
        className={styles.madeWithLocofyImageIcon}
        alt=""
        src="/madewithlocofy-11@3x.png"
      />
    </div>
  );
};

export default BlogArticle;
