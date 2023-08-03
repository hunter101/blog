import * as fs from "fs";
import {Article, getArticle} from "@/components/article";

export async function generateStaticParams() {
    const files = fs.readdirSync(process.cwd() + "/src/app/md/articles")
    return await Promise.all(files.map(async file => {
        return {
            slug: file.split(".")[0],
        }
    }))
}

export default async function Post({params}: { params: { slug: string } }) {
    const post = await getArticle(`articles/${params.slug}`)
    return (
        <div className="flex flex-col">
            <Article content={post.contentHtml}/>
            <div className="text-center text-xs font-sans mt-20 pt-5 border-t border-white/30">
                <div className="font-semibold">Published</div>
                <div className="opacity-60">{post.date}</div>
            </div>
        </div>
    )
}