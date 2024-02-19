import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./featured-blog.module.css";

const FeaturedBlog = ({
  authorName,
  releaseDate,
  category,
  blogTitle,
  blogDescription,
  authorimage,
  blogimage,
}) => {
  const router = useRouter();

  const onContinuebuttonClick = useCallback(() => {
    router.push("/blog-article");
  }, [router]);

  return (
    <div className={styles.featuredBlog}>
      <div className={styles.info}>
        <div className={styles.featuredblogtext}>
          <div className={styles.names}>
            <b className={styles.designToCode}>{category}</b>
            <div className={styles.time}>
              <div className={styles.minRead}>3 min read</div>
            </div>
          </div>
          <b className={styles.locofyaiTurn}>{blogTitle}</b>
          <div className={styles.featuredblogdescription}>
            <div className={styles.goFromFigma}>{blogDescription}</div>
            <button
              className={styles.continuebutton}
              onClick={onContinuebuttonClick}
            >
              <div className={styles.continueReading}>Continue reading</div>
              <img className={styles.iconBack} alt="" src="/icon--back.svg" />
            </button>
          </div>
        </div>
        <div className={styles.infoChild} />
        <div className={styles.articleAuthor}>
          <img className={styles.avatarIcon} alt="" src={authorimage} />
          <div className={styles.authorText}>
            <div className={styles.annaRos}>{authorName}</div>
            <div className={styles.postedJustNow}>{releaseDate}</div>
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <img className={styles.image32Icon} alt="" src={blogimage} />
      </div>
    </div>
  );
};

export default FeaturedBlog;
