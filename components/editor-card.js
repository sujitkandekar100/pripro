import { useMemo } from "react";
import styles from "./editor-card.module.css";

const EditorCard = ({
  blogImage1 = "/rectangle-478@2x.png",
  blogCategory,
  readTime,
  blogTitle,
  avatarAuthor,
  authorName,
  releaseDate,
  blogdataAlignSelf,
  blogdataGap,
  postedJustNowWidth,
  uid
}) => {
  const blogdataStyle = useMemo(() => {
    return {
      alignSelf: blogdataAlignSelf,
      gap: blogdataGap,
    };
  }, [blogdataAlignSelf, blogdataGap]);

  const postedJustNowStyle = useMemo(() => {
    return {
      width: postedJustNowWidth,
    };
  }, [postedJustNowWidth]);

  return (
    <a className={styles.editorcard} href={"/" + uid}>
      <div className={styles.image}>
        <img className={styles.imageChild} alt="" src={blogImage1} />
      </div>
      <div className={styles.blogdata} style={blogdataStyle}>
        <div className={styles.editorheader}>
          <div className={styles.names}>
            <div className={styles.designToCode}>{blogCategory}</div>
            <div className={styles.time}>
              <div className={styles.minRead}>{readTime}</div>
            </div>
          </div>
          <b className={styles.figmaForDevelopers}>{blogTitle}</b>
        </div>
        <div className={styles.blogdataChild} />
        <div className={styles.articleAuthor}>
          <img className={styles.avatarIcon} alt="" src={avatarAuthor} />
          <div className={styles.authorText}>
            <div className={styles.justinChen}>{authorName}</div>
            <div className={styles.postedJustNow} style={postedJustNowStyle}>
              {releaseDate}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default EditorCard;
