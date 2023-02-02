import React from 'react'
import Head from 'next/head'
import { Nav } from './Navbar/Nav'
import {Tabs} from './Navbar/Tabs'
type Props = {
  children?: React.ReactNode
  title?: string
}

const Layout = ({ children, title = 'Chimp Tracker' }: Props) => (
  <div className='relative'>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className='layout mt-[2.5px] flex flex-col justify-betwween'>
      <header>
        <Nav/>
      </header>
      {children}
      <Tabs/>

      </div>
  </div>
)

export default Layout
