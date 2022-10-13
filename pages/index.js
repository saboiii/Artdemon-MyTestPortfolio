import Head from 'next/head'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
        <Head>
            <meta charset="utf-8" name="description" content="My portfolio."/>
            <title>ArtDevil | Portfolio</title>
        </Head>
        <Navbar/>
        <Body />
    </div>
  )
}