import CategoryCard from "./category-card";
import styles from "./blogs.module.css";

const Blogs = () => {
  return (
    <div className={styles.blogs}>
      <CategoryCard
        blogImage3="/rectangle-4782@2x.png"
        blogCategory="Design to code"
        readTime="2 min read"
        blogTitle="Figma for Developers"
        blogDescription="Developers often believe they will be off to a flying start if they skip the designing process and jump directly to code."
        avatarImage2="/avatar5@2x.png"
        authorName="Justin Chen"
        releaseDate="Posted on Sep 6, 2022"
        categoryCardAlignSelf="stretch"
        articleAuthorBackgroundColor="unset"
        avatarIconWidth="40px"
        avatarIconHeight="40px"
        annaRosWidth="145.5px"
        postedJustNowWidth="145.5px"
        infoGap="unset"
        infoFlex="1"
        articleAuthorBorderRadius="unset"
        categoryCardTransition="unset"
        lineDivAlignSelf="unset"
        lineDivWidth="302.7px"
        categoryCardMarginBottom="20px"
      />
      <CategoryCard
        blogImage3="/rectangle-4783@2x.png"
        blogCategory="Integrations"
        readTime="2 min read"
        blogTitle="Best UI library to use in Figma"
        blogDescription="Find out what UI library suit your product the most. From Material UI, Bootstrap, ..."
        avatarImage2="/avatar6@2x.png"
        authorName="Isaac Tan"
        releaseDate="Posted on Sep 5, 2022"
        categoryCardAlignSelf="stretch"
        articleAuthorBackgroundColor="unset"
        avatarIconWidth="40px"
        avatarIconHeight="40px"
        annaRosWidth="145.5px"
        postedJustNowWidth="145.5px"
        infoGap="unset"
        infoFlex="1"
        articleAuthorBorderRadius="unset"
        categoryCardTransition="unset"
        lineDivAlignSelf="unset"
        lineDivWidth="330.7px"
        categoryCardMarginBottom="20px"
      />
      <CategoryCard
        blogImage3="/rectangle-4784@2x.png"
        blogCategory="Design"
        readTime="3 min read"
        blogTitle="Locofy.ai – Turn Figma to Code!"
        blogDescription="Go from Figma to code in minimum amount of time using Locofy. Take your.."
        avatarImage2="/avatar7@2x.png"
        authorName="Anna Rosé"
        releaseDate="Posted just now"
        categoryCardAlignSelf="unset"
        articleAuthorBackgroundColor="unset"
        avatarIconWidth="40px"
        avatarIconHeight="40px"
        annaRosWidth="145.5px"
        postedJustNowWidth="145.5px"
        infoGap="13px"
        infoFlex="unset"
        articleAuthorBorderRadius="unset"
        categoryCardTransition="unset"
        lineDivAlignSelf="stretch"
        lineDivWidth="unset"
        categoryCardMarginBottom="unset"
      />
    </div>
  );
};

export default Blogs;
