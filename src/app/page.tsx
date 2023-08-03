import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";

async function getData() {
    const files = fs.readdirSync(process.cwd() + "/src/md/articles")
    return await Promise.all(files.map(async file => {
        const source = fs.readFileSync(process.cwd() + "/src/md/articles/" + file)
        const matterResult = matter(source.toString())

        return {
            title: matterResult.data.title,
            id: matterResult.data.id,
            slug: file.split('.')[0]
        }
    }))
}

export default async function Home() {
    let posts = await getData()
    posts = posts.sort((a, b) => a.id < b.id ? -1 : 1);

    return (
        <nav className="text-2xl sm:text-4xl">
            <ul className="space-y-8 sm:space-y-10">
                {(posts).map(post => (
                    <li key={post.slug} className="hover:underline"><Link
                        href={`/posts/${post.slug}`}>{post.title}</Link></li>
                ))}
            </ul>
        </nav>
    )
}
