import Head from 'next/head'
import Link from 'next/link'

import Footer from '@components/Footer'

export default function Success() {
  return (
    <div className="container">
      <Head>
        <title>Next.js 歡迎來到 工具箱首頁!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Submission Received!</h1>
        <p>感謝你的臉書提供有關工具箱相關的訊息!  <Link href="/"><a>home page</a></Link>.</p>
      </main>

      <Footer />
    </div>
  )
}
