import Link from "next/link";
import Head from "next/head";
import { format, parseISO } from 'date-fns'
import { getAllPosts } from "../lib/data";


export default function Home({ posts }) {
	return (
		<div>
			<Head>
				<title>Chanbin's Blog</title>
			</Head>
			<div className="grid grid-cols-3 h-screen lg:grid-cols-5 p-14 gap-4">
				{posts.map((item) => (
					<BlogListItem className="flex-grow" key={item.slug} {...item} />
				))}
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const allPosts = getAllPosts();
	return {
		props: {
			posts: allPosts.map(({ data, content, slug }) => ({
				...data,
				date: data.date.toISOString(),
				content,
				slug,
			})),
		},
	};
}

function BlogListItem({ slug }) {
	return (
		<div>
			<Link href={`/blog/${slug}`}>
				<img src={`../images/${slug}.jpg`} className="min-h-20 max-h-40 lg:h-60 max-h-60 mx-auto cursor-pointer shadow-md hover:shadow-lg transition duration-900 ease-in"></img>
			</Link>
		</div>
	)
}
