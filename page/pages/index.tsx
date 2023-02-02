import Head from 'next/head'
import { Inter } from '@next/font/google';
import { NavBar } from '@components/Nav/NavBar';
import { Hero } from '@components/sections/Hero';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Track & cancel Free Trials and subscriptions | Chimp Tracker</title>
        <meta name="description" content="Chimp Tracker allows you monitor, schedule cancellation of your free trials all on our platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar/>
        <Hero/>
      </main>
    </>
  )
}