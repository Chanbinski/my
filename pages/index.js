import Link from "next/link";
import Head from "next/head"
import 'tailwindcss/tailwind.css'

const name = "Chanbin Park";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chanbin Park</title>
      </Head>
      <div className="flex flex-col h-screen items-center justify-center space-y-5 -mt-20">
        <img
          src="images/header-image.jpg"
          className="justify-center rounded-full w-2/6 sm:w-40 mt-20 sm:mt-0"
        />
        <h1 className="text-4xl my-4 font-bold text-center">{name}</h1>
        <div className="text-gray-800 mt-6 w-5/6 sm:w-2/5">
          Hi, I am a freshman at University of California Berkeley studying Computer Science. I am from South Korea.
          I am a basketball lover, stationary addict, and a huge fan of romantic movies. I'm on <a href="https://www.instagram.com/jjangu1015/">instagram</a> and <a href="https://www.linkedin.com/in/chanbin-park-4b795920b/">linkedin</a>.
          I just started my <Link href="/blog"><a>blog</a></Link>, which I will be renewing it constantly.
        </div>
      </div>
    </div>
  );
}