import Head from 'next/head'
import Image from 'next/image'
import {Navigation} from "../components/Navigation";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Doni Dominguez Hernandez | Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Navigation />

          <section className="h-screen bg-gray-900 flex text-white justify-center items-center">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h1>Hi, I'm Doni</h1>
          </section>

      </main>

      <footer>

      </footer>
    </div>
  )
}
