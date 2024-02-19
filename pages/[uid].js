/*import { createClient } from "../prismicio";
export default function BlogPage(props){
    return <>
    </>
}


export async function getServerSideProps(ctx){
    const client =  createClient();
    const article =await client.getByID('article',ctx.params.uid,{
        fetchLinks:['author.name','author.image']
    });
    console.log(article)
    return{
        props:{
            category:article.data.category,
            authorName:article.data.author.data.name,
            title:article.data.title,
            authorPic:article.data.author.data.image.url,
            releaseDate:article.data.releasedate,
            slices:article.data.slices,
            coverimage:article.data.image.url
        }
    }
}*/

