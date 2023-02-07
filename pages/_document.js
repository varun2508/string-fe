import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;600&family=Quattrocento+Sans:wght@400;700&display=swap" rel="stylesheet" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}