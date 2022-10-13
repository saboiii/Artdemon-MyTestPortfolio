import Head from 'next/head'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <Head>
                <meta charset="utf-8" name="description" content="My project."/>
                <title>ArtDevil | Projects</title>
            </Head>
            <Navbar />
            <Projects />
        </div>
    )
}