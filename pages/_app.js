import Link from 'next/link'
import Head from "next/head";
import '../styles/globals.css'
import { Navbar } from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="h-16 flex flex-row justify-center items-center">
        <Navbar />
      </div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
