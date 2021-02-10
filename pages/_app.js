import '../styles/globals.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>P not b</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/fonts/fonts.css" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
