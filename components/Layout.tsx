import React from 'react'
import Head from 'next/head'
import { NavBar } from './Nav/NavBar'
import type { Layout } from 'interfaces'

const Layout = ({ children, title = 'Chimp Tracker' }: Layout) => (
  <div className='relative'>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className='layout mt-[2.5px] flex flex-col justify-betwween'>
      <header>
        <NavBar/>
      </header>
      {children}
    </div>
  </div>
)

export default Layout
