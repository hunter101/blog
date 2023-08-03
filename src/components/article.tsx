import fs from "fs";
import matter from "gray-matter";
import {remark} from "remark";
import html from "remark-html"

export async function getArticle(slug: string) {
    const source = fs.readFileSync(process.cwd() + "/src/md/" + slug + ".mdx")
    const matterResult = matter(source.toString())

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    return {
        contentHtml: processedContent.toString(),
        id: matterResult.data.id,
        date: matterResult.data.date
    }
}

export function Article({content}: { content: string }) {
    return (
        <article className="prose lg:prose-lg dark:prose-invert prose-h1:text-4xl">
            <div dangerouslySetInnerHTML={{__html: content}}/>
        </article>
    )
}