import { useCallback } from "react";
import { useRouter } from "next/router";
import TopHeader from "../components/top-header";
import FeaturedBlog from "../components/featured-blog";
import EditorsPick from "../components/editors-pick";
import Categories from "../components/categories";
import GuestAuthor from "../components/guest-author";
import CTA from "../components/c-t-a";
import styles from "./index.module.css";
import dynamic from "next/dynamic";
import { createClient } from "../prismicio"
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";
const BlogHome = ({page}) => {
  console.log(page);
  const router = useRouter();

  const onLocofyGuieLogoImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.blogHome}>
      <TopHeader onLocofyGuieLogoImageClick={onLocofyGuieLogoImageClick} />
      <section className={styles.blogContainer}>
      <SliceZone
        slices={page.data.slices}
       components={components}
        />
       
      </section>
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

export default dynamic (() => Promise.resolve(BlogHome), {ssr: false})

export async function  getServerSideProps()//getServerSideProps
{
   const client  = createClient();
   const homepage=  await client.getSingle('homepage',
   {
    fetchLinks:['article.title','article.description','article.category','article.releasedate','article.author','article.time','article.coverimage','author.name','author.image']
   });
   console.log(homepage)
   return{
    props:{
      page:homepage,
    }
   }
}