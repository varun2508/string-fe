import IndexLayout from '../components/IndexLayout'
import MainLayout from '../components/MainLayout'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
    if (Component.indexLayout) {
        return (
            <IndexLayout>
                <Component {...pageProps} />
            </IndexLayout>
        )
    }

    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    )
}