import Head from 'next/head'
import Image from 'next/image'
import BackButton from '../../components/BackButton'
import { useRouter } from 'next/router'
import techItems from '../../data/tech-items'

function TechInner() {
    const router = useRouter()

    if(!router.isReady) return null

    const { id } = router.query
    const page = techItems.find(item => item.id === id)

    if(!page) return null

    return (
        <>
            <Head>
                <title>String | {page.title}</title>
            </Head>

            <div className="page-inner">
                <BackButton />
                <div className="page-heading">
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
                        <Image src={page.image} alt={page.title} loading="lazy" width="440" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechInner;