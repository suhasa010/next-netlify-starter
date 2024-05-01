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
          <code>Coming Soon!</code>
        </p>
    <form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Phone Number <input type="phone" name="phone" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
      </main>

      <Footer />
    </div>
  )
}
