import Head from 'next/head'
import Header from '../components/Header'
import SocialNav from '../components/SocialNav'

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
      <Header />

    </div>
  )
}
