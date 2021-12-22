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
			<div className="mt-10 sm:mt-20 flex flex-col justify-center items-center">
				<div className="text-4xl font-semibold text-gray-900 mb-4">
					Blog
				</div>
				<div className="-m-2 flex flex-col p-8 w-full sm:w-1/2">
					{posts.map((item) => (
						<BlogListItem className="" key={item.slug} {...item} />
					))}
				</div>
			</div>

			{/* For BookItem
			<div className="flex justify-center">
				<div className="grid grid-cols-3 lg:grid-cols-4 gap-2 p-10 w-full sm:w-3/5 -mt-5 sm:-mt-10">
					{posts.map((item) => (
						<BlogListItem className="flex-grow" key={item.slug} {...item} />
					))}
				</div> 
			</div>
			*/}
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

function BlogListItem({ slug, title, date, tag }) {
	return (
		<div className="flex flex-col sm:flex-row mt-2 text-sm sm:text-base">
			<div className="flex flex-row">
				{styledTag(tag)}
				<Link href={`/blog/${slug}`}>
					<a className="ml-16 hover:underline relative">{title}</a>
				</Link>
			</div>
			<div className="ml-0 sm:ml-auto text-gray-400">{format(parseISO(date), 'MMM d, uuu')}</div>
		</div>
	)
}

function styledTag(tag) {
	if (tag == "Book") {
		return (
			<p className="text-emerald-500 absolute">{tag}</p>
		)
	} else if (tag == "School") {
		return (
			<p className="text-amber-400 absolute">{tag}</p>
		)
	}
}

function BookItem({ slug }) {
	return (
		<div>
			<Link href={`/blog/${slug}`}>
				<img src={`../images/${slug}.jpg`} className="mt-5 sm:mt-10 max-h-40 max-h-48 cursor-pointer shadow-md hover:shadow-lg transition duration-900 ease-in"></img>
			</Link>
		</div>
	)
}
