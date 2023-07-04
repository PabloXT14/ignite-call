import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Heading } from '@ignite-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ignite Call</title>
      </Head>
      <main className={inter.className}>
        <Heading as="h1" size="lg">
          Hello World
        </Heading>
      </main>
    </>
  )
}
