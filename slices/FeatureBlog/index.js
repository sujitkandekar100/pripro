

 import FeaturedBlog from "../../components/featured-blog";
const FeatureBlog = ({ slice }) => {
  return (
   <FeaturedBlog
   authorName={slice.primary.blog.data.author.data.name}
   releaseDate={slice.primary.blog.data.releasedate}
   category={slice.primary.blog.data.category}
   blogTitle={slice.primary.blog.data.title} 
   blogDescription={slice.primary.blog.data.description}
   blogimage={slice.primary.blog.data.coverimage.url}
   authorimage={slice.primary.blog.data.author.data.image.url}


   />


  );
};

export default FeatureBlog;
