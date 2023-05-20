/**
 * Rendered on the server side
 */

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Smart contract raffle</title>
      <meta name="description" content="Web3 Lottery" />
      <meta name='keywords' content='web3, lottery, raffle, smart contract' />
      <link rel="icon" href="/favicon.ico" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
