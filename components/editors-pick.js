import EditorCard from "./editor-card";
import styles from "./editors-pick.module.css";

const EditorsPick = ({arrayOfBlogs}) => {
  return (
    <div className={styles.editorsPick}>
      <div className={styles.editorsPick1}>Editor’s Pick</div>
      <div className={styles.cards}>
        {
          arrayOfBlogs ? arrayOfBlogs?.map((item,i) => {
            let data = item.blogs.data;
            return <EditorCard
            blogTitletitle={data.title}
            authorName={data.author.data.name}
            blogCategory={data.category}
            blogImage1={data.coverimage.url}
            releaseDate={data.releasedate}   
            avatarAuthor={data.author.data.image.url}
            readTime={data.time}
            uid={item.blogs.uid}
            />
          }) : null
}
      </div>
    </div>
  );
};

export default EditorsPick;

/*      
<EditorCard
blogImage1="/rectangle-478@2x.png"
blogCategory="Integrations"
readTime="3 min read"
blogTitle="Best UI library to use in Figma"
avatarAuthor="/avatar6@2x.png"
authorName="Justin Chen"
releaseDate="Posted Sep 5, 2021"
blogdataAlignSelf="unset"
blogdataGap="11px"
postedJustNowWidth="unset"
/>*/