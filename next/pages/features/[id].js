import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import featuresItems from '../../data/features-items'

function FeaturesInner() {
    const router = useRouter()

    if(!router.isReady) return null

    const { id } = router.query
    const page = featuresItems.find(item => item.id === id)

    return (
        <div className="page">
            <Head>
                <title>String | {page.title}</title>
            </Head>

            <div className="page-inner">
                <div className="page-heading">
                    <Link href="/features" className="button-back">
                        <i className="icon-back" />
                    </Link>
                    <div className="page-icon">
                        <i className={page.icon} />
                    </div>
                    <h1>{page.title}</h1>
                </div>
                <div className="page-intro">
                    <div
                        dangerouslySetInnerHTML={{ __html: page.text }}
                    />
                    <div className="page-banner">
                        <Image src={page.image} alt={page.title} loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesInner;