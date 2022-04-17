import Link from "next/link";
import Head from "next/head";

export default function Projects() {
    return (
        <div>
            <Head>
                <title>Chanbin's Projects</title>
            </Head>
            <div className="mt-10 sm:mt-20 flex flex-col justify-center items-center">
                <div className="text-4xl font-semibold text-gray-900 mb-4">
                    Projects
                </div>
                <div className="mt-10 grid sm:grid-cols-2 gap-6 w-full sm:w-1/2">
                    <div className="bg-green-50 border border-green-50 p-4 ml-4 mr-4 sm:ml-0 sm:mr-0 rounded-lg gap-y-4">
                        <p className="text-sm text-green-700">Spring 2022</p>
                        <p className="mt-1 text-xl text-green-900 font-bold">
                            <a href="https://bearwear.vercel.app/">Bearwear</a>
                        </p>
                        <p className="mt-3 text-base text-green-800">A digital closet where users can manage their clothings. </p>
                    </div>
                    <div className="bg-blue-50 border border-blue-50 p-4 ml-4 mr-4 sm:ml-0 sm:mr-0 rounded-lg gap-y-4">
                        <p className="text-sm text-blue-700">Fall 2021</p>
                        <p className="mt-1 text-xl text-blue-900 font-bold">
                            <a href="https://odysseus-tau.vercel.app/">Odysseus</a>
                        </p>
                        <p className="mt-3 text-base text-blue-800">A web tool that helps users connect concepts and generate ideas from it. </p>
                    </div>
                    <div className="bg-indigo-50 border border-indigo-50 p-4 ml-4 mr-4 sm:ml-0 sm:mr-0 rounded-lg gap-y-4">
                        <p className="text-sm text-indigo-700">Summer 2021</p>
                        <p className="mt-1 text-xl text-indigo-900 font-bold">
                            <a href="https://chrome.google.com/webstore/detail/wordentifier-improve-your/jhjhjkoadlkanedlnhnhlihpmjbmnine">Wordentifier</a>
                        </p>
                        <p className="mt-3 text-base text-indigo-800">A chrome extension that highlights words on user's vocab list when it appears on their browser.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}