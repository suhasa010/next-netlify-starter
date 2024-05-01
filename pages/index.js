import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Auric Smiles Dental Clinic</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Auric Smiles Dental Clinic" />
        <p className="description">
          Coming Soon!</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
