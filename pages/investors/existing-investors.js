import Head from 'next/head'
import Image from 'next/image'
import BackButton from '../../components/BackButton'
import CogitentVentures from '../../public/cogitent-ventures.jpg'
import GlobalVentures from '../../public/punja-global-ventures.jpg'
import styles from '../../styles/Blog.module.css'

function ExistingInvstors() {
    return (
        <>
            <Head>
                <title>String | Investors</title>
            </Head>

            <div className="page-inner">
                <BackButton />
                <div className="page-heading">
                    <div className="page-icon">
                        <i className="icon-existing-investors" />
                    </div>
                    <h1>Investors</h1>
                </div>
                <div className={styles.Blog}>
                    <div className={styles.BlogItems}>
                        <div className={styles.BlogItem}>
                            <div>
                                <Image src={CogitentVentures}
                                    alt="Cogitent Ventures"
                                    width="285"
                                    height="280"
                                    loading="lazy"
                                />
                            </div>
                            <hr/>
                            <h5>Cogitent Ventures</h5>
                            <div className={styles.Short}>
                                cogitent.ventures
                            </div>
                        </div>

                        <div className={styles.BlogItem}>
                            <div>
                                <Image src={GlobalVentures}
                                    alt="Punja Global Ventures"
                                    width="285"
                                    height="280"
                                    loading="lazy"
                                />
                            </div>
                            <hr/>
                            <h5>Punja Global Ventures</h5>
                            <div className={styles.Short}>
                                punja.vc
                            </div>
                        </div>

                        <div className={styles.BlogItem}>
                            <div className={styles.Empty}>
                                <span>This could be you.</span>
                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExistingInvstors;