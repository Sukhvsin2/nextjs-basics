import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document{
    render() {
        return <Html>
            <Head>
                <title>Next.ts</title>
                <meta content='check' property='custom' />
            </Head>
            <body>
                <Main/>
            </body>
            <NextScript/>
        </Html>
    }
}