import Link from 'next/link'
import '../styles/globals.css'
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
  <div>
    <Navbar />
    <Component {...pageProps} />
    <div className="relative">
      <Footer className="absolute bottom-0"/>
    </div>
  </div>
  )
}

export default MyApp
