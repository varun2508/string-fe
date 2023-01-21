import IndexLayout from '../components/IndexLayout'
import MainLayout from '../components/MainLayout'
import Transition from '../components/Transition';

import '../styles/globals.css'
import '../styles/transition.css';

export default function App({ Component, pageProps }) {
    if (Component.indexLayout) {
        return (
            <IndexLayout>
                <Transition>
                    <Component {...pageProps} />
                </Transition>
            </IndexLayout>
        )
    }

    return (
        <MainLayout>
            <Transition>
                <div className="page-content">
                    <Component {...pageProps} />
                </div>
            </Transition>
        </MainLayout>
    )
}