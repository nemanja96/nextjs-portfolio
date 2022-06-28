import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Portfolio from '../components/Portfolio'
import SocialNav from '../components/SocialNav'
import Technologies from '../components/Technologies'

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Head>
        <title>Nemanja Radivojevic - Front End Developer</title>
        <meta name="description" content="Portfolio website" />
        <meta name="theme-color" content="#32ffaa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SocialNav />
      <Nav />
      <Header />
      <Technologies />
      <About />
      <Portfolio />
      <Contact />

    </div>
  )
}
