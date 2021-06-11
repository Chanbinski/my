import Link from "next/link";
import Head from "next/head"

const name = "Chanbin Park"; 

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chanbin Park</title>
      </Head>
      <div className="flex flex-col h-screen items-center justify-center space-y-5 -mt-10">
        <img
          src="/images/header-image.jpg"
          alt={name}
          className="justify-center w-44 rounded-full"        
        />
        <h1 className="text-4xl my-4 font-bold text-center">{name}</h1>
        <div className="w-4/5 sm:w-2/5">
          Hi, I'm a student based in South Korea. This fall, I'm heading to UC Berkeley to study Computer Science. 
          I'm a basketball lover, stationary addict, and an Apple Fanatic! I'm on <a href="https://www.instagram.com/jjangu1015/">instagram</a> and <a href="https://www.linkedin.com/in/chanbin-park-4b795920b/">linkedin</a>. 
          I just started my <Link href="/blog"><a>blog</a></Link>, which I will be renewing it constantly. Below are some of the features I want to add.

          <div className="pt-6">
            <ul className="list-disc list-inside bg-green-100 p-1 text-gray-500 text-sm">
              <li>Separate the my blog into a review page and an article page.</li>
              <li>Add a search bar on the blog page.</li>
              <li>Redesign individual pages.</li>
            </ul>
        </div>
        </div>
      </div>
    </div>
  );
}