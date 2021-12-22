import Link from "next/link";
import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chanbin Park</title>
      </Head>
      <div className="flex flex-col justify-center items-center mt-32 sm:mt-44 space-y-5">
        <img
          src="images/header-image.jpg"
          className="justify-center rounded-full w-2/6 sm:w-40"
        />
        <h1 className="text-4xl my-4 font-bold text-center">Chanbin Park</h1>
        <div className="text-gray-800 mt-6 w-5/6 sm:w-2/5">
          Hi, I am a freshman at University of California, Berkeley studying computer science.
          I am a basketball lover, stationary addict, and a huge fan of romantic movies. I'm on <a href="https://www.instagram.com/jjangu1015/" className="text-emerald-500">instagram</a> and <a href="https://www.linkedin.com/in/chanbin-park-4b795920b/" className="text-emerald-500">linkedin</a>.
          Check out my <Link href="/blog"><a className="text-emerald-500">blog</a></Link> and <Link href="/blog"><a className="text-emerald-500">project</a></Link> page!
        </div>
      </div>
    </div>
  );
}