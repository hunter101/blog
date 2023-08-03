import {Article, getArticle} from "@/components/article";

export default async function About() {
    const post = await getArticle(`about`)
    return <Article content={post.contentHtml} />
}