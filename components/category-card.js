import { useMemo } from "react";
import styles from "./category-card.module.css";

const CategoryCard = ({
  blogImage3 ,
  blogCategory,
  readTime,
  blogTitle,
  blogDescription,
  avatarImage2,
  authorName,
  releaseDate,
  onCategoryCardClick,
  categoryCardAlignSelf,
  articleAuthorBackgroundColor,
  avatarIconWidth,
  avatarIconHeight,
  annaRosWidth,
  postedJustNowWidth,
  infoGap,
  infoFlex,
  articleAuthorBorderRadius,
  categoryCardTransition,
  lineDivAlignSelf,
  lineDivWidth,
  categoryCardMarginBottom,
}) => {
  const categoryCardStyle = useMemo(() => {
    return {
      alignSelf: categoryCardAlignSelf,
      transition: categoryCardTransition,
      marginBottom: categoryCardMarginBottom,
    };
  }, [categoryCardAlignSelf, categoryCardTransition, categoryCardMarginBottom]);

  const articleAuthorStyle = useMemo(() => {
    return {
      backgroundColor: articleAuthorBackgroundColor,
      borderRadius: articleAuthorBorderRadius,
    };
  }, [articleAuthorBackgroundColor, articleAuthorBorderRadius]);

  const avatarIconStyle = useMemo(() => {
    return {
      width: avatarIconWidth,
      height: avatarIconHeight,
    };
  }, [avatarIconWidth, avatarIconHeight]);

  const annaRosStyle = useMemo(() => {
    return {
      width: annaRosWidth,
    };
  }, [annaRosWidth]);

  const postedJustNow1Style = useMemo(() => {
    return {
      width: postedJustNowWidth,
    };
  }, [postedJustNowWidth]);

  const infoStyle = useMemo(() => {
    return {
      gap: infoGap,
      flex: infoFlex,
    };
  }, [infoGap, infoFlex]);

  const lineDivStyle = useMemo(() => {
    return {
      alignSelf: lineDivAlignSelf,
      width: lineDivWidth,
    };
  }, [lineDivAlignSelf, lineDivWidth]);

  return (
    <a
      className={styles.categorycard}
      onClick={onCategoryCardClick}
      style={categoryCardStyle}
    >
      <img className={styles.imageIcon} alt="" src={blogImage3} />
      <div className={styles.info} style={infoStyle}>
        <div className={styles.blogtext}>
          <div className={styles.blogheader}>
            <div className={styles.names}>
              <div className={styles.designToCode}>{blogCategory}</div>
              <div className={styles.time}>
                <div className={styles.minRead}>{readTime}</div>
              </div>
            </div>
            <b className={styles.locofyaiTurn}>{blogTitle}</b>
          </div>
          <div className={styles.description}>
            <div className={styles.goFromFigma}>{blogDescription}</div>
          </div>
        </div>
        <div className={styles.infoChild} style={lineDivStyle} />
        <div className={styles.articleAuthor} style={articleAuthorStyle}>
          <img
            className={styles.avatarIcon}
            alt=""
            src={avatarImage2}
            style={avatarIconStyle}
          />
          <div className={styles.authorText}>
            <div className={styles.annaRos} style={annaRosStyle}>
              {authorName}
            </div>
            <div className={styles.postedJustNow} style={postedJustNow1Style}>
              {releaseDate}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CategoryCard;
