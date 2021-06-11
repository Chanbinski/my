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

    <Navbar />
    <Component {...pageProps} className="min-h-screen" />
    <Footer/>
  </div>
  )
}

export default MyApp
