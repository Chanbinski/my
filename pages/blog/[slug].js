import Head from 'next/head';
import { format, parseISO } from 'date-fns';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { getAllPosts } from '../../lib/data';

function countWords(str) {
  return str.split(" ").length;
}

export default function BlogPage({ title, author, subtitle, date, content, blog }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <div className="flex flex-col items-center pt-10 sm:pt-28 pb-28">
          <div className="w-4/5 lg:w-1/2">
            <div className="mb-10 space-y-4">
              <div>
                <div className="text-gray-600 text-md">
                  {format(parseISO(date), 'MMMM do, uuu')}
                </div>
              </div>

              <h2 className="text-5xl font-bold">{title}</h2>
              <h2 className="text-xl mr-auto">by {author}</h2>
              <h2 className="text-xl text-gray-600">{subtitle}</h2>
            </div>
            <div className="prose text-lg">
              <MDXRemote {...content} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const allPosts = getAllPosts();
  const { data, content } = allPosts.find((item) => item.slug === params.slug);
  const mdxSource = await serialize(content);

  return {
    props: {
      ...data,
      date: data.date.toISOString(),
      content: mdxSource,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}