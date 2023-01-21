import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Timeline.module.css'

function Timeline() {
    return (
        <>
            <Head>
                <title>String | Timeline</title>
            </Head>

            <div className="page-inner">
                <div className="page-heading">
                    <Link href="/home" className="button-back">
                        <i className="icon-back" />
                    </Link>
                    <div className="page-icon">
                        <i className="icon-timeline" />
                    </div>
                    <h1>Timeline</h1>
                </div>
                <div className={styles.TimelineFeed}>
                    <div>
                        <h2>Our<br/>Roadmap</h2>
                    </div>

                    <div>

                        <div className={styles.TimelineFeedItem}>
                            <div>
                                <h5>Inception</h5>
                                <p>
                                    Account Recovery Protocol, MFA,
                                    Remediation, IP-less Internet Layer & Node Communication
                                </p>
                            </div>
                            <div>
                                <span className={styles.TimelineItemDate}>
                                    <i className="icon-right" />
                                    2017 - 2018
                                </span>
                            </div>
                        </div>

                        <div className={styles.TimelineFeedItem}>
                            <div>
                                <h5>Released initial blockchain `${'"TestNet"'}`</h5>
                                <p>
                                    String initial prototype was released including UDM and 
                                    prototype videos
                                </p>
                            </div>
                            <div>
                                <span className={styles.TimelineItemDate}>
                                    <i className="icon-right" />
                                    April 2021
                                </span>
                            </div>
                        </div>

                        <div className={styles.TimelineFeedItem}>
                            <div>
                                <h5>Seed Raise & team cohesion</h5>
                            </div>
                            <div>
                                <span className={styles.TimelineItemDate}>
                                    <i className="icon-right" />
                                    June 2022
                                </span>
                            </div>
                        </div>

                        <div className={styles.TimelineFeedItem}>
                            <div>
                                <h5>Testnet</h5>
                                <p>
                                    String primitive for private transactions, NFTs,
                                    multidimensional transactions
                                </p>
                            </div>
                            <div>
                                <span className={styles.TimelineItemDate}>
                                    <i className="icon-right" />
                                    December 2022
                                </span>
                            </div>
                        </div>

                        <div className={styles.TimelineFeedItem}>
                            <div>
                                <h5>MainNet</h5>
                                <p>
                                    Full release of String blockchain including wallet and 
                                    interoperability features
                                </p>
                            </div>
                            <div>
                                <span className={styles.TimelineItemDate}>
                                    <i className="icon-right" />
                                    March 2023
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Timeline;