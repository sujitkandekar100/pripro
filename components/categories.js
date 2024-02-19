import { useCallback } from "react";
import { useRouter } from "next/router";
import Namescategory from "./namescategory";
import CategoryCard from "./category-card";
import styles from "./categories.module.css";

const Categories = ({arrayOfBlogger}) => {
  const router = useRouter();

  const onCategoryCardClick = useCallback(() => {
    router.push("/blog-article");
  }, [router]);

  return (
    <div className={styles.categories}>
      <div className={styles.list}>
        <div className={styles.discoverMoreTopics}>Discover more topics</div>
        <Namescategory blogCategory="All" />
      </div>
      <div className={styles.blogs}>
     {
      arrayOfBlogger ? arrayOfBlogger?.map((item,i) => {
        let data = item.blogger.data;
        return <CategoryCard
          blogImage3={data.coverimage.url}
          blogCategory={data.category}
          readTime={data.time}
          blogTitle={data.title}
          blogDescription={data.description}
          avatarImage2={data.author.data.image.url}
          authorName={data.author.data.name}
          releaseDate={data.releasedate}   
          onCategoryCardClick={onCategoryCardClick}
        />
      }) : null
    }
          </div>
          </div>
      );
    };  
export default Categories;
/* <CategoryCard
          blogImage3="/image@2x.png"
          blogCategory="Design to code"
          readTime="2 min read"
          blogTitle="Figma for Developers"
          blogDescription="Developers often believe they will be off to a flying start if they skip the designing process and jump directly to code."
          avatarImage2="/avatar@2x.png"
          authorName="Justin Chen"
          releaseDate="Posted on Sep 6, 2022"
          categoryCardAlignSelf="stretch"
          articleAuthorBackgroundColor="unset"
          avatarIconWidth="40px"
          avatarIconHeight="40px"
          annaRosWidth="145.5px"
          postedJustNowWidth="145.5px"
          infoGap="13px"
          infoFlex="unset"
          articleAuthorBorderRadius="8px"
          categoryCardTransition="0.3s"
          lineDivAlignSelf="stretch"
          lineDivWidth="unset"
          categoryCardMarginBottom="20px"
        />
        <CategoryCard
          blogImage3="/image@2x.png"
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
          categoryCardTransition="0.3s"
          lineDivAlignSelf="stretch"
          lineDivWidth="unset"
          categoryCardMarginBottom="20px"
        />
      </div>
    </div>
  );
};*/