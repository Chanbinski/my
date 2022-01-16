import Link from "next/link";
import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chanbin Park</title>
      </Head>
      <div className="flex flex-col justify-center items-center pt-5 sm:pt-10 space-y-5">
        <img className="w-3/4 sm:w-1/4 drop-shadow" src="images/header-image.jpg"/>
        <div className="text-gray-800 pt-8 w-5/6 sm:w-2/5">
          Hi, I am a freshman at University of California, Berkeley studying computer science.
          I am a basketball lover, stationary addict, and a huge fan of romantic movies. I'm on <a href="https://www.instagram.com/jjangu1015/" className="text-emerald-500">instagram</a> and <a href="https://www.linkedin.com/in/chanbin-park-4b795920b/" className="text-emerald-500">linkedin</a>.
          Check out my <Link href="/blog"><a className="text-emerald-500">blog</a></Link> and <Link href="/projects"><a className="text-emerald-500">project</a></Link> page!
        </div>
      </div>
    </div>
  );
}