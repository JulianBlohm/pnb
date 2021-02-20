import '../styles/globals.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Genderthroughpersonality</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="/fonts/fonts.css" />
                <link rel="stylesheet" href="https://use.typekit.net/qef7evb.css"/>
                <html lang="en"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
