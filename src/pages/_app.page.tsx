import Head from 'next/head'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@/lib/react-query'
import { globalStyles } from '@/styles/global'
import '../lib/dayjs'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Head>
          <title>Ignite Call</title>
        </Head>
        <Component {...pageProps} />
      </SessionProvider>
    </QueryClientProvider>
  )
}
