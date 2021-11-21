// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {Html, Head, Main, NextScript} from 'next/document'


class MyDocument extends Document {

    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link

                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    <link
                        rel="stylesheet"
                        href='https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&display=swap'
                    />
                    <link
                        rel="stylesheet"
                        href='https://fonts.googleapis.com/css2?family=Bonheur+Royale&family=Scheherazade+New:wght@400;700&display=swap'
                    />
                    <link
                        rel="stylesheet"
                        href='https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap'
                    />
                    <link
                        rel="stylesheet"
                        href='https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap'
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    <link
                        rel="stylesheet"
                        href='https://fonts.googleapis.com/css2?family=Dosis:wght@200&display=swap'
                    />
                    <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet"/>


                </Head>
                <body>
                <Main/>
                {/*<script src="https://yastatic.net/share2/share.js" async/>*/}
                <NextScript/>

                </body>
            </Html>
        )
    }
}

export default MyDocument