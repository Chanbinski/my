import Link from 'next/link'
import Head from "next/head";
import '../styles/globals.css'
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex justify-center align-center">
        <Navbar />
      </div>
      <Component {...pageProps} className="min-h-screen" />
    </div>
  )
}

export default MyApp
