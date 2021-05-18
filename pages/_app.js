import Link from 'next/link'
import Head from "next/head";
import '../styles/globals.css'
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
  <div>
    <Head>
        <title>Chanbin Park</title>
        <link rel="icon" href="/favicon.png" />
    </Head>

    <Navbar />
    <Component {...pageProps} />
    <div className="relative">
      <Footer className="absolute bottom-0"/>
    </div>
  </div>
  )
}

export default MyApp
