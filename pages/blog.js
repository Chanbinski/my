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
			<div className="flex flex-col h-screen items-center pt-20 space-y-6">
				{posts.map((item) => (
					<BlogListItem key={item.slug} {...item} />
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

function BlogListItem({ slug, title, subtitle, date, content }) {
	return (
		<div className="space-y-1 w-3/5 border border-black-100 p-4 shadow hover:shadow-md rounded transition duration-200 ease-in">
			<div className="text-gray-600 text-sm">{format(parseISO(date), 'MMMM do, uuu')}</div>
			<div>
				<Link href={`/blog/${slug}`}>
					<a className="text-2xl font-bold">{title}</a>
				</Link>
			</div>
			<div class="text-lg text-gray-600">{subtitle}</div>
			{/*<div>{content.substr(0, 300)}</div>*/}
		</div>
	)
}




